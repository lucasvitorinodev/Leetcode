/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let biggestLength = 0
  let currentSubstring = []
  const splitString = s.split('')

  if(splitString.length <= 1) {
    return splitString.length;
  }

  for (let indexTest = 0; indexTest < splitString.length; indexTest++) {
    for (let i = indexTest; i < splitString.length; i++) {
      if (!currentSubstring.includes(splitString[i])) {
        currentSubstring.push(splitString[i])
      } else {
        biggestLength =
          currentSubstring.length >= biggestLength
            ? currentSubstring.length
            : biggestLength
        currentSubstring = []
        break
      }
    }
  }

  return biggestLength
};
