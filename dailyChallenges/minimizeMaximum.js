/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
  let currMaxValue = nums[0]
  let sum = nums[0]
  for (let i = 1; i < nums.length; i++) {
      sum += nums[i]
      currMaxValue = Math.max(currMaxValue, Math.ceil(sum / (i+1)))
  }
  return currMaxValue
}
