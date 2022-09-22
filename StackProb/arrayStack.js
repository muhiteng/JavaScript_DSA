class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  push(element) {
    this.items[this.count] = element;
    console.log(`Element ${element} pushed in position ${this.count}`);
    this.count++;
  }

  pop() {
    if (this.count === 0) return;
    let removedElement = this.items[this.count - 1];
    this.count--;
    console.log("Removed element : " + removedElement);
  }

  top() {
    if (this.count > 0) return this.items[this.count - 1];
    else return -1;
  }

  isEmpty() {
    return this.count === 0 ? true : false;
  }

  length() {
    return this.count;
  }
}
const stack = new Stack();

stack.push(5);
stack.push(4);
stack.push(2);

console.log(stack.items);

console.log(stack.top());

stack.pop();
stack.pop();
stack.pop();
