class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkeList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addFirst(data) {
    // here data and next
    this.head = new Node(data, this.head);
  }
}

node = new LinkeList();
node.addFirst(10);
node.addFirst(20);
node.addFirst(30);

console.log(JSON.stringify(node,null,2));
