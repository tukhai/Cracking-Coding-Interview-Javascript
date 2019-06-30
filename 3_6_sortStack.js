console.clear();

class Stack {
  constructor() {
    this.items = [];
  }
  
  push(ele) {
    this.items.push(ele);
  }
  
  pop() {
    if (this.items.length === 0) return;
    return this.items.pop();
  }
  
  peek() {
    return this.items[this.items.length - 1];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
  
  printStack() {
    var str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    console.log("--", str);
  }
  
  sortStack() {
    var r = new Stack();

    while (!this.isEmpty()) {
      var tmp = this.pop(); // take the top ele of the current stack out and save at variable tmp
      while (!r.isEmpty() && r.peek() > tmp) {
        this.push(r.pop());
      }
      r.push(tmp);
    }

    return r;
  }
}

var testStack = new Stack();
testStack.push(3);
testStack.push(5);
testStack.push(4);
testStack.push(6);
testStack.sortStack().printStack();

