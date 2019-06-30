console.clear();

// Count number of bits to be flipped to convert A into B

// Function that count set bits
function countSetBits(n) {
  var count = 0;
  while (n) {
    count += n & 1;
    n >>= 1;
  }
  return count;
}

// Function that return count of flipped number
function flippedCount(a, b) {
  // Return count of set bits in a XOR b
  return countSetBits(a ^ b);
}

// var a = 10;
// var b = 20;
var a = 7;
var b = 10;
console.log("FINAL", flippedCount(a, b));