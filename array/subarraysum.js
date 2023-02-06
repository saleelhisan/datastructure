function subaArray(arr,sum){
let n = arr.length
let curr_sum = 0
for (let i=0;i<n;i++){
    curr_sum = arr[i]
    for(let j = i+1;j<=n;j++){
        if(curr_sum == sum){
            console.log(i,j-1);
            return
        }
        if(curr_sum > sum || j == n){
            break ;
        }
        curr_sum = curr_sum + arr[j]
    }
}
console.log("no subarray found");
return
}

let arr= [15, 2, 4, 8, 9, 5, 10, 23];
let sum = 23;
subaArray(arr,sum)