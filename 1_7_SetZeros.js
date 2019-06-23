console.clear();

function setZeros(matrix) {
  var rowTrack = {}; // store using has table
  var columnTrack = {};
  for (let i = 0; i < matrix.length; i++) { // store value
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0) {
        rowTrack[i] = true;
        columnTrack[i] = true;
      }
    }
  }
  
  for (let i = 0; i < matrix.length; i++) { // store value
    for (let j = 0; j < matrix[i].length; j++) {
      if (rowTrack[i] || columnTrack[i]) {
        matrix[i][j] = 0;
      }
    }
  }
  
  return matrix;
}

var matrix = [
  [1, 2, 0, 3],
  [0, 0, 2, 4],
  [1, 5, 6, 9],
  [0, 3, 4, 5]
];

console.log(setZeros(matrix));