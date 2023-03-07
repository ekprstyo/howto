function rot13(str) {
  const alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let decodeStr = "";
  let rot13Index = 0;
  let indexToDecode = 0;
  let strIndex = 0;
  for (let i = 0; i < str.length; i++) {
    strIndex = alfabet.indexOf(str[i]);
    rot13Index = strIndex + 13;
    indexToDecode = rot13Index > 25 ? rot13Index - 26 : rot13Index;
    if (strIndex != -1) {
      decodeStr += alfabet[indexToDecode];
    } else {
      decodeStr += str[i];
    }
  }
  return decodeStr;
}

rot13("SERR PBQR PNZC");
