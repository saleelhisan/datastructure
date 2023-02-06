


arr = [2,7,11,15]
target = 13 

var twoSum = function(nums, target) {
    n = nums.length
    for(i = 0; i<n ; i++){
        for (j = i+1 ; j < n-1 ; j++ ){
            if(nums[i] + nums[j] == target){
                return ([i,j])
            }
        }
    }
};



console.log(twoSum(arr,target));
