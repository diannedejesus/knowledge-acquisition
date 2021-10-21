/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0]
    
    for(let i=1; i<nums.length; i++){

        if(nums[i] > nums[i] + nums[i-1]){
            if(maxSum < nums[i]){
                maxSum = nums[i]
            }
        }else{
            nums[i] = nums[i] + nums[i-1]
            if(nums[i] > maxSum){
                maxSum = nums[i]
            }
        }
    }
    
    return maxSum
};