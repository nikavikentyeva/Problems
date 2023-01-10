const twoSum = function(nums, target) {
  let sum = 0
  for (let i = 0; i < nums.length;  i++) {
    if (sum === target) {
      return
    }
    if (nums[i] + nums[i + 1] === target) {
      console.log([i, i + 1])
    }
    sum = nums[i] + nums[i + 1]
  }
};

twoSum ([2,7,11,15], 9)
twoSum ([3,2,4], 6)
twoSum ([3,3], 6)

