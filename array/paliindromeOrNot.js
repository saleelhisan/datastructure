


var isPalindrome = function(number) 
{

    let original = number    
    let reverse = 0;
    
    while(number>0){
        right = number%10;
        reverse = reverse*10 + right;
        number = Math.floor(number/10);
    }

    if(original == reverse){
        return true
    }else{
        return false
    }
}



console.log(isPalindrome(12321));
