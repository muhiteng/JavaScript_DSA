
class LinkeList {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
 
 
  
}

// create nodes
node1 = new LinkeList(8);
node2 = new LinkeList(23);
node3 = new LinkeList(10);
node4 = new LinkeList(60);

node1.next=node2
node2.next=node3
node3.next=node4


console.log(JSON.stringify(node1,null,2));
