console.clear();

// Main logic: as we push into the stack, we'll save the value of the current min by insert the value of 2 * x - currentMin, and update minAfterPush.
/* 
Push(x) : Inserts x at the top of stack.

- If stack is empty, insert x into the stack and make minEle equal to x.
- If stack is not empty, compare x with minEle. Two cases arise:
- If x is greater than or equal to minEle, simply insert x.
- If x is less than minEle, insert (2*x – minEle) into the stack and make minEle equal to x. For example, let previous minEle was 3. Now we want to insert 2. We update minEle as 2 and insert 2*2 – 3 = 1 into the stack.


Pop() : Removes an element from top of stack.

Remove element from top. Let the removed element be y. Two cases arise:
- If y is greater than or equal to minEle, the minimum element in the stack is still minEle.
- If y is less than minEle, the pop value is the current minEle
=> then the minimum element now becomes (2*minEle – y), so update (minEle = 2*minEle – y). This is where we retrieve previous minimum from current minimum and its value in stack. For example, let the element to be removed be 1 and minEle be 2. We remove 1 and update minEle as 2*2 – 1 = 3. 
*/

class MinStack {
  constructor() {
    this.items = [];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
  
  getMin() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
    } else {
      console.log("Min ele in stack is " + this.minEle)
    }
  }
  
  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
    }
    var top = this.items[this.items.length - 1];
    
    console.log(`Top element is ${top < this.minEle ? this.minEle : top}`);
  }
  
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    
    var top = this.items.pop();
    
    if (top < this.minEle) {
      console.log(`Top Most Element Removed: ${this.minEle}`); // same as peek
      this.minEle = 2*this.minEle - top; // update minEle
    } else {
      console.log(`Top Most Element Removed: ${top}`); // same as peek
    }
  }
  
  push(x) {
    if (this.isEmpty()) {
      this.minEle = x;
      this.items.push(x);
      console.log(`Number inserted: ${x}`);
      return;
    }
    
    if (x < this.minEle) {
      this.items.push(2*x - this.minEle); // save current minEle
      this.minEle = x; // update minEle
    } else this.items.push(x);
    
    console.log(`Number inserted: ${x}`);
  }
}

var s = new MinStack(); 
s.push(3); 
s.push(5); 
s.getMin(); 
s.push(2); 
s.push(1); 
s.getMin(); 
s.pop(); 
s.getMin(); 
s.pop(); 
s.peek();


