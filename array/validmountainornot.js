
function validMountain(arr){
    
n = arr.length
c = 0
while(c < n-1  && arr[c] < arr[c+1]){
    c = c+1
}

if(c ==0 || c==n-1){
   return false
}

while(c < n-1 &&  arr[c] > arr[c+1]){
    c = c+1
}

if (c == n-1){
    return true
}
else{
    return false
}

}

arr = [1,3,9,6,5]

console.log(validMountain(arr))