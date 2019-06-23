console.clear();

function matrixCreator() {
  var matrix = [];
  for (let i = 0; i < 4; i++) {
    matrix[i] = [];
    for (let j = 0; j < 4; j++) {
      matrix[i][j] = i + "-" + j;
    }
  }
  return matrix;
}

function rotate(matrix) {
  for (let layer = 0; layer < Math.floor(matrix.length / 2); layer++) {
    var first = layer;
    var last = matrix.length - 1 - layer;
    
    for (var i = first; i < last; i++) {
      var offset = i - first;
      var top = matrix[first][i]; // save top
      matrix[first][i] = matrix[last - offset][first]; // left -> top
      matrix[last - offset][first] = matrix[last][last - offset]; // bot -> left
      matrix[last][last - offset] = matrix[i][last]; // right -> bot
      matrix[i][last] = top; // top -> right
    }
  }
  
  return matrix;
}

var matrix1 = matrixCreator();
console.log("without rotate", matrix1);

var matrix2 = matrixCreator();
console.log("with rotate", rotate(matrix2));
