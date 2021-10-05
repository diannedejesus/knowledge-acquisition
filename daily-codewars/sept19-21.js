/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let currentNum = .3
    let k = 0
    for(let i=0; i<nums.length; i++){
        if(nums[i] === currentNum){
             nums[i] = 101
        }else{
            currentNum = nums[i]
            k++
        }
    }
    
    nums.sort((a, b) => a - b)
    return k
};