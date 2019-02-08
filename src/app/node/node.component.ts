import { Component, OnInit, Input } from '@angular/core';

import { NodesService } from '../shared/services/nodes.service';
import { Node } from '../shared/models/node.model';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {

  constructor(
  	public nodesService: NodesService
  	) { }

@Input() node: Node;

  ngOnInit() {
  	
  }
  selectedNode(node: Node){
    this.nodesService.selectNode(node);
  }
}
