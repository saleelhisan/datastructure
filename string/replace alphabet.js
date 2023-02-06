function replaceAlphabets(str, n) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      const c = str[i];
      const idx = alphabet.indexOf(c.toLowerCase());
      if (idx === -1) {
        result += c;
      } else {
        const offset = (idx + n) % 26;
        result += c.toUpperCase() === c ? alphabet[offset].toUpperCase() : alphabet[offset];
      }
    }
  
    return result;
  }
  
  console.log(replaceAlphabets("xyz",2))
