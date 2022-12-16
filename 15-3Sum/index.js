/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const triplets = [];
  const sortedNums = nums.sort((a, b) => a - b);

  let currentSum;
  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (sortedNums[i] !== sortedNums[i - 1]) {
      let j = i + 1;
      let k = sortedNums.length - 1;

      while (j < k) {
        currentSum = nums[i] + nums[j] + nums[k];
        if (currentSum === 0) {
          triplets.push([nums[i], nums[j], nums[k]]);
          while (nums[j] === nums[j + 1]) j++;
          while (nums[k] === nums[k - 1]) k++;
          j++;
          k--;
        } else if (currentSum < 0) {
          j++;
        } else if (currentSum > 0) {
          k--;
        }
      }
    }
  }

  return triplets;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
