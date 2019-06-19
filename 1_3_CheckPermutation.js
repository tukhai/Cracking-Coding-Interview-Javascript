function isPermutation(s1, s2) {
  if (s1.length != s2.length) {
    return false;
  } else {
    var s1Splitted = s1.split('');
    var s1Sorted = s1Splitted.sort().join('');

    var s2Splitted = s2.split('');
    var s2Sorted = s2Splitted.sort().join('');

    if (s1Sorted != s2Sorted) {
      return false;
    }
    return true;
  }
}

function charsCount(s) {
  var countObj = {};
  for (let i = 0; i < s.length; i++) {
    if (countObj[s[i]]) {
      countObj[s[i]] += 1;
    } else {
      countObj[s[i]] = 1;
    }
  }
  return countObj;
}

function isPermutation(s1, s2) {
  if (s1.length != s2.length) {
    return false;
  } else {
    for (var i in charsCount(s1)) {
      if (charsCount(s1)[i] != charsCount(s2)[i]) {
        return false;
      }
    }
    return true;
  }
}
