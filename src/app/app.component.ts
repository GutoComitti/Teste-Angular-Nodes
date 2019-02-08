import { Component, Output } from '@angular/core';
import { NodesService } from './shared/services/nodes.service';
import { Node } from './shared/models/node.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor (private nodesService: NodesService){}
	@Output() public rootNode: Node = this.nodesService.rootNode;
}