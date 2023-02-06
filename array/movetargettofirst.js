

arr = [1,5,4,6,4,6,7,4,6]

target = 4

for(i=0,j=0;i<arr.length;i++){
    if(arr[i] == target){
        temp = arr[j]
        arr[j] = arr[i] 
        arr[i] = temp
        j++
    }
}


console.log(arr);