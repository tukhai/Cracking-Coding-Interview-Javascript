console.clear();

function updateBits(n, m, i, j) {
  var allOnes = ~0;
  var left = allOnes << (j + 1);
  var right = ((1 << i) - 1);
  var mask = left | right;
  
  var n_cleared = n & mask;
  var m_sifted = m << i;
  return n_cleared | m_sifted;
}

var N = 1024; // 10000000000 in binary
var M = 19; // 10011 in binary
var i = 2;
var j = 6;

console.log(updateBits(N, M, i, j));