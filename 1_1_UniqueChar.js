function isUniqueCharStr(s) {
  for (let i = 0; i < s.length; i++) {
    if (hashMap[s[i]]) {
      return false;
    } else {
      hashMap[s[i]] = true;
    }
  }
  return true;
}
