export class Node {
	public showChildren: boolean = true;
	public nodesArray: Node[] = [];
  public isSelected: boolean = false;
  public showSelf: boolean = true;
	constructor(
		public code: string,
		public description: string,
		public parentNode?: Node,
		public observation?: string
	){}

	retractAllChildNodes(){
    this.showChildren = false;
		if (this.nodesArray.length){
			this.nodesArray.forEach((node) => {
        node.showSelf = false;
	    	node.retractAllChildNodes();
	  	});
		}
	}

	expandChildNodes(){
		this.showChildren = true;
    if (this.nodesArray.length){
      this.nodesArray.forEach((node) => {
        node.showSelf = true;
      })
    }
	}

	expandAllChildNodes(){
    this.expandChildNodes();
		if (this.nodesArray.length){
  		this.nodesArray.forEach((node) => {
    		node.expandAllChildNodes();
  		});
		}
	}

  showAllParentNodes(){
    if (this.parentNode){
      this.showSelf = true;
      this.parentNode.showAllParentNodes();
    }
  }

  filterAllChildNodes(query: String){
    if (this.code.toLowerCase().includes(query.toLowerCase())){
      this.showAllParentNodes();
    }
    if (this.nodesArray.length){
      this.nodesArray.forEach((node) => {
        node.filterAllChildNodes(query);
      })
    }
  }

};