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
}

class QueueFromTwoStacks {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(ele) {
    this.stack1.push(ele);
  }
  
  dequeue() {
    if (this.stack2.items.length === 0) {
      if (this.stack1.items.length === 0) {
        console.log("Can't dequeue empty queue");
        return;
      }
      while (this.stack1.items.length > 0) {
        var p = this.stack1.items.pop();
        this.stack2.push(p);
      }
    }
    return this.stack2.pop();
  }
  
  printQueue() {
    var str = "";
    for (let i = this.stack2.items.length - 1; i >= 0; i--) {
      str += this.stack2.items[i] + " ";
    }
    
    for (let j = 0; j < this.stack1.items.length; j++) {
      str += this.stack1.items[j] + " ";
    }
    
    console.log("Final Queue:", str);
  }
}

var myQueue = new QueueFromTwoStacks();
myQueue.enqueue(4);
myQueue.enqueue(5);
myQueue.enqueue(6);
myQueue.enqueue(7);
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
/* myQueue.dequeue(); */
/* myQueue.dequeue(); */
myQueue.printQueue();

