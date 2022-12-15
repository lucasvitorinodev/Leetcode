/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const parsedNumber = x > 0 ? x.toString().split('') : x.toString().split('').slice(1);
  const result = Number(parsedNumber.reverse().join(''));

  if (result >= Math.pow(2, 31) || result <= Math.pow(-2, 31)) {
    return 0;
  }

  return x > 0 ? result : -result;
};
