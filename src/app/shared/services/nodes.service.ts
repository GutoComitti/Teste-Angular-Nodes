import { Node } from '../models/node.model';

export class NodesService {
	constructor () {}
	//Inicializando o nodesArray com o root node. Root node não é pra aparecer, apenas pra servir como base
	rootNode: Node = new Node('root', null, null);
	selectedNode: Node;
	
	selectNode(node: Node){
		if (this.selectedNode){
			this.selectedNode.isSelected = false;
		}
		this.selectedNode = node;
		this.selectedNode.isSelected = true;
	}

	//Cada node só existe no array do seu parent, excluindo um node todos os abaixo dele também são excluidos
	deleteNode (){
		if (this.selectedNode){
			let index = this.selectedNode.parentNode.nodesArray.indexOf(this.selectedNode);
			this.selectedNode.parentNode.nodesArray.splice(index, 1);
			this.selectedNode = null;
		}else{
			alert("Please select a node to delete");
		}
	}

	createNode (code: string, description: string, observation?: string){
		if (this.selectedNode){
			this.selectedNode.nodesArray.push(new Node(code, description, this.selectedNode, observation? observation : null));
			this.selectedNode.showChildren = true;
		}else {
			this.rootNode.nodesArray.push(new Node(code, description, this.rootNode, observation? observation : null));
		}
	}

	editNode(code?: string, description?: string, observation?: string){
		if (code) this.selectedNode.code = code;
		if (description) this.selectedNode.description = description;
		if (observation) this.selectedNode.observation = observation;
	}

	retractAllNodes(){
		this.rootNode.retractAllChildNodes();
	}

	expandAllNodes(){
		this.rootNode.expandAllChildNodes();
	}
}