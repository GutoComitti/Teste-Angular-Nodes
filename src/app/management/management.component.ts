import { Component, OnInit, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NodesService } from '../shared/services/nodes.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  @ViewChild('createForm') createForm: NgForm;
  @ViewChild('editForm') editForm: NgForm;
  isCreateOpen: boolean = false;
  isEditOpen: boolean = false;

  constructor(private nodesService: NodesService) { }

  ngOnInit() {
  }

  toggleCreate() {
    if (this.isCreateOpen){
      this.closeCreate();
    }else{
      this.openCreate();
    }
  }

  closeCreate() {
    this.createForm.reset();
    this.isCreateOpen = false;
  }

  openCreate() {
    this.isCreateOpen = true;
    this.isEditOpen = false;
  }

  toggleEdit() {
    if (this.isEditOpen){
      this.closeEdit();
    }else{
      this.openEdit();
    }
  }

  closeEdit() {
    this.editForm.reset();
    this.isEditOpen = false;
  }

  openEdit() {
    this.isCreateOpen = false;
     this.isEditOpen = true;
  }

  onEdit() {
    if (this.nodesService.selectedNode){
      this.nodesService.editNode(
        this.editForm.value.code,
        this.editForm.value.description,
        this.editForm.value.observation
      )
    this.editForm.reset();
    }else{
      alert("Please select a node to be editted");
    }

  }

  onCreate() {
    this.nodesService.createNode(
      this.createForm.value.code,
      this.createForm.value.description,
      this.createForm.value.observation
      );
    this.createForm.reset();
  }

  onDelete(){
  	this.nodesService.deleteNode();
  }

  onExpand() {
  	this.nodesService.expandAllNodes();
  }

  onRetract() {
  	this.nodesService.retractAllNodes();
  }

  onFilterChange(e) {
    if (!e.target.value){
      this.onExpand();
    }else{
      this.onRetract();
      this.nodesService.rootNode.filterAllChildNodes(e.target.value);
    }
  }

}
