let str = 'A man, a PLan, a canal: Panama'
str=str.toLowerCase().replace(/[^a-z0-9]/g,'')
console.log(str);
let ispalindrome = true

for(i=0;i<str.length/2;i++){
    if(str[i]!=str[str.length-1-i]){
        ispalindrome=false;
        break;
    }
}
console.log(ispalindrome);