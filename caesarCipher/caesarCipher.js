function caesarCipher(str, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const alphabet2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (alphabet2.includes(str[i])) {
      let index = alphabet2.indexOf(str[i]);
      let newIndex = (index + shift) % alphabet2.length;
      if (newIndex < 0) newIndex += alphabet2.length;
      result += alphabet2[newIndex];
    } else if (alphabet.includes(str[i])) {
      let index = alphabet.indexOf(str[i]);
      let newIndex = (index + shift) % alphabet.length;
      if (newIndex < 0) newIndex += alphabet.length;
      result += alphabet[newIndex];
    } else {
      result += str[i];
    }
  }
  return result;
}
export default caesarCipher;
// if (alphabet.includes(char)) {

//     }
