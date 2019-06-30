// This solution using class Tower with Stack features
// The main recursive algorithm is used as a method of this class

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

class Tower {
  constructor(n) {
    this.disks = new Stack();
    this.index = n;
  }
  
  getTowerHeight() {
    return this.index;
  }
  
  addDisk(d) {
    if (!this.disks.isEmpty() && this.disks.peek() <= d) {
      console.log("Error placing disk", d);
    } else {
      this.disks.push(d);
    }
  }
  
  moveToTop(t) {
    var top = this.disks.pop();
    t.addDisk(top);
    console.log(`Move disk ${top} from Tower${this.getTowerHeight()} to Tower${t.getTowerHeight()}`);
  }
  
  moveDisks(n, destination, buffer) {
    if (n > 0) {
      this.moveDisks(n - 1, buffer, destination);
      this.moveToTop(destination);
      buffer.moveDisks(n - 1, destination, this);
    }
  }
}

var N = 3;
var towers = {};
for (let i = 0; i < 3; i++) {
  towers[i] = new Tower(i + 1);
}

for (let i = N - 1; i >= 0; i--) {
  towers[0].addDisk(i + 1);
}

towers[0].moveDisks(N, towers[2], towers[1]); // destination is the 3rd tower, with 2nd tower as buffer tower