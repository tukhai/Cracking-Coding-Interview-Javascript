console.clear();

class ThreeStacksInOne {
  constructor(capacity) {
    this.mainArr = [];
    this.begin = [0, 1*capacity, 2*capacity, 3*capacity]; // Although there're only 3 stacks, still need 3*capacity to check if the 3rd stack is full
    this.end = [,,];
  }
  
  push(stackIndex, ele) {
    if (stackIndex > 2) {
      console.log("We only have maximum 3 stacks");
      return false;
    }
    
    // if the stack is empty (i.e. no end)
    if (this.end[stackIndex] === undefined) {
    	this.end[stackIndex] = this.begin[stackIndex];
    } else if (this.end[stackIndex + 1] === this.begin[stackIndex + 1]) {
    	console.log(`Stack number ${stackIndex} is full`);
      return false
    } else this.end[stackIndex]++;
    this.mainArr[this.end[stackIndex]] = ele;
    return true;
  }
  
  pop(stackIndex) {
  	if (stackIndex > 2) {
    	console.log("We only have maximum 3 stacks");
      return undefined;
    }
    
    if (this.end[stackIndex] === undefined) {
    	console.log(`Stack number ${stackIndex} is empty`);
      return undefined;
    }
    
    var value = this.mainArr[this.end[stackIndex]];
    delete this.mainArr[this.end[stackIndex]];
    
    // After delete, have to check if this stack become empty or not
    if (this.end[stackIndex] === this.begin[stackIndex]) {
    	this.end[stackIndex] = undefined;
    } else this.end[stackIndex]--;
    return value;
  }
}

var stack = new ThreeStacksInOne(10000);
stack.push(0, "a"); // push "a" to the first stack
console.log(stack.pop(0));
var x = stack.pop(0);
stack.push(3, "b");