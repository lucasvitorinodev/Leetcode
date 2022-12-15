/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {string}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const nums = nums1.concat(nums2);
  const sortedNums = nums.sort((a, b) => a - b);
  const length = sortedNums.length;

  let result;

  if (length % 2 === 0) {
    result = (nums[length / 2] + nums[length / 2 - 1]) / 2;
  } else {
    result = nums[(length - 1) / 2];
  }

  return result.toFixed(4);
};

findMedianSortedArrays([3], [-2, -1]);
findMedianSortedArrays([1, 2], [3, 4]);
