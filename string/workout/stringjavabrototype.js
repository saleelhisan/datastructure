function replaceString(str,key) {
    var all_chars = str.split("");
    for(var i = 0; i < all_chars.length; i++) {
      var n = all_chars[i].charCodeAt() - 'a'.charCodeAt();
      n = (n + key) % 26; 
      all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt());
      console.log(all_chars);                                                   
    }
    return all_chars.join("");
  }
  
  console.log(replaceString("abc",2))