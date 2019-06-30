console.clear();

function getNext(n) {
  // Compute c0 and c1  
  var c = n;
  var c0 = 0;
  var c1 = 0;
  
  while (((c & 1) == 0) && (c != 0)) {
    c0 += 1;
    c >>= 1;
  }
  
  while ((c & 1) == 1) {
    c1 += 1;
    c >>= 1;
  }
  
  // If there is no bigger number with the same no. of 1's 
  if (c0 + c1 == 31 || c0 + c1== 0) return -1;
  
  // position of rightmost non-trailing zero 
  var p = c0 + c1;

  // Flip rightmost non-trailing zero 
  n |= (1 << p);

  // Clear all bits to the right of p 
  n &= ~((1 << p) - 1);

  // Insert (c1-1) ones on the right. 
  n |= (1 << (c1 - 1)) - 1;

  return n;
}

var n = 5;
console.log(getNext(n));
  
// var n = 8;
// console.log(getNext(n));