function SetOfStacks(stackSize) {
  if (!stackSize) throw new Error("must provide stack size");
  this.stacks = [[]];
  this.max = stackSize;
}

SetOfStacks.prototype.push = function(value) {
  if (this.stacks[this.stacks.length - 1].length >= this.max) {
    // if size of the last stack is exceeded, push another new stack
    this.stacks.push([]);
  }
  this.stacks[this.stacks.length - 1].push(value); // always push to the last stacks
}

SetOfStacks.prototype.pop = function() {
  const value = this.stacks[this.stacks.length - 1].pop(); // pop the top ele of the top stack
  if (this.stacks.length && this.stacks[this.stacks.length - 1].length === 0) {
    this.stacks.pop(); // pop the top stacks if it's empty
  }
  return value;
}

SetOfStacks.prototype.popAt = function(stackNum) {
  if (stackNum < 1 || stackNum > this.stacks.length) {
    throw new Error("Invalid stack number");
  }
  
  if (stackNum === this.stack.length) {
    return this.pop(); // if pop the top stack, then same as our pop function
  }
  
  let stack = this.stacks[stackNum-1];
  let value = stack.pop(); // pop value of the selected stack
  const tempStack = [];
  let nextStack;
  
  // if pop any value in the middle, we shift all the top 1 unit down
  if (stackNum < this.stacks.length) { // if valid stackNum
    for (let i = stackNum; i < this.stacks.length; i++) { // loop to top
      nextStack = this.stacks[i];
    
      // push all of nextStack to tempStack
      while (nextStack.length) {
        tempStack.push(nextStack.pop());
      }

      stack.push(tempStack.pop()); // push the top ele of tempStack to our selected stack, this is the bottom ele of nextStack actually

      // push back from tempStack to nextStack
      while (tempStack.length) {
        nextStack.push(tempStack.pop());
      }

      stack = nextStack; // move value of stack to next
    }
    
    // if top stack empty, same as pop function
    if (this.stacks.length > 1 && this.stacks[this.stacks.length-1].length === 0) {
      this.stacks.pop();
    }
    
    return value;
  }
}



