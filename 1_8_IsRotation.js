console.clear();

function isRotation(s1, s2) {
  if (s1.length != s2.length || s1.length == 0 || s2.length == 0) {
    return false;
  }
  
  // return isSubstring(s1, s2 + s2);
  var doubleS2 = s2 + s2;
  return doubleS2.indexOf(s1) > -1;
}

console.log(isRotation("waterbottLe", "erbottLewat"));
// console.log(isRotation("", "waterbottLe")); 