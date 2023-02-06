


arr = [2,7,11,15]
target = 9 

var twoSum = function(nums, target) {
    n = nums.length

    for(i = 0; i<= n-1 ; i++){
        for (j = i+1 ; j < n-2 ; j++ ){
            if(nums[i] + nums[j]){
                return ([i,j])
            }
        }
    }

};



console.log(twoSum(arr,target));
