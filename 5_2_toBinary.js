console.clear();

function toBinary(n) {
	if (n >= 1 || n <= 0) return "ERROR";
  
  var answer = "";
  answer = answer + ".";
  
  while (n > 0) {
  	if (answer.length >= 32) return "ERROR";
    var b = n * 2;
    if (b >= 1) {
    	answer = answer + "1";
      n = b - 1;
    } else {
    	answer = answer + "0";
      n = b;
    }
  }
  return answer;
}

var n = 0.625;
// var n = 0.6256;
// var n = 0.72;
console.log(toBinary(n));