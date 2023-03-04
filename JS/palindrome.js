function palindrome(str) {
  const strLower = str.toLowerCase();
  const pattern = /[\W_]/g; /* or use /[^a-z1-9]/g */
  const str2 = strLower.replace(pattern, "");
  const len = str2.length;
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

// https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/
//
