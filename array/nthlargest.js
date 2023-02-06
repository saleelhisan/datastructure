arr = [3,2,1,5,6,4] 
k = 1
for(i=1 ; i< k; i++){
    max = Math.max(...arr)
    arr[arr.indexOf(max)] = ''
}
console.log(Math.max(...arr));