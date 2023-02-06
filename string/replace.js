function replace(str,key){
    key = key % 26 
    str = str.split("")
 for(let i=0;i<str.length;i++){

     letterposition =str[i].charCodeAt()+ key
     if(letterposition <=122 ){
        str[i] =   String.fromCharCode(letterposition)
     }else{
        str[i] = String.fromCharCode(letterposition - 122 + 96) 
     }
 }
 return str.join("")
}



console.log(replace("abc",1));