/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let biggestArea = Number.MIN_SAFE_INTEGER;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let shorterLine = Math.min(height[left], height[right]);
    biggestArea = Math.max(biggestArea, shorterLine * (right - left));
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return biggestArea;
};
