/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let smallestStr = strs[0];
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length < smallestStr.length) {
      smallestStr = strs[i];
    }
  }

  let currentSubstr = smallestStr;
  let result = '';

  for (let i = 0; i < smallestStr.length; i++) {
    if (strs.every((str) => str.startsWith(currentSubstr))) {
      result = currentSubstr;
      break;
    }

    currentSubstr = currentSubstr.slice(0, currentSubstr.length - 1);
  }

  return result;
};
