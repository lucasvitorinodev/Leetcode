/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let result = nums[0] + nums[1] + nums[2];
  let currentSum = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      currentSum = nums[i] + nums[j] + nums[k];
      if (currentSum < target) {
        j++;
      } else if (currentSum > target) {
        k--;
      } else {
        return currentSum;
      }

      if (Math.abs(currentSum - target) < Math.abs(result - target)) {
        result = currentSum;
      }
    }
  }

  return result;
};

// console.log(threeSumClosest([-1, 2, 1, -4], 1)); //2
console.log(threeSumClosest([4, 0, 5, -5, 3, 3, 0, -4, -5], -2)); //-2
