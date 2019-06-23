console.clear();

function basicStrCompression(s) {
  var compressStr = "";
  var countLetter = "";
  var count = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] == countLetter) {
      count += 1;
    } else {
      if (count > 0) {
        compressStr += countLetter + count;
      }
      countLetter = s[i];
      count = 1;
    }
  }
  
  compressStr += countLetter + count; // for the last char
  if (compressStr.length < s.length) {
    return compressStr;
  } else {
    return s;
  }
}

// console.log(basicStrCompression("aaabbcc"));
console.log(basicStrCompression("aabbcc"));
