let str1= 'Saleeel'
let str2 = 'sa le el'
let i = 0
function compare(string1,string2){  
string1=string1.toLowerCase().replace(/[^a-z0-9]/g,'')
string2=string2.toLowerCase().replace(/[^a-z0-9]/g,'')

if(string1.length != string2.length){
    return "not equals"
}   
let length = string1.length 
while(i<length){
    if(string1[i].toLowerCase() == string2[i].toLowerCase()){
        i++;
    }else{
        console.log('not equal');
        return
    }
    if(i = string1.length){
        console.log("both are equal");
        return true
    }
}
}

console.log(compare(str1,str2));