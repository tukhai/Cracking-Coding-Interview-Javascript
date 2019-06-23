
console.clear();

function replaceSpaces(s) {
  var finalStr = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") {
      finalStr = finalStr + "%20";
    } else {
      finalStr = finalStr + s[i];
    }
  }
  return finalStr;
}

function replaceSpaces(s) {
  return s.replace(/ /g, "%20");
}

console.log(replaceSpaces("Hello, my name is K"));
