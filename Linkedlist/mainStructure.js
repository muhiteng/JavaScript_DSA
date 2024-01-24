
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

//link nodes
node1.next=node2
node2.next=node3
node3.next=node4

// create ptr cursor for traverse during nodes
let i=1
ptr=node1
while(ptr !=null ){
console.log(`node ${i} is : ${ptr.value} `)
ptr=ptr.next
i++
}


//console.log(JSON.stringify(node1,null,2));
