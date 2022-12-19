/**
 * @param {string} s
 * @return {number}
 */

const romanToInt = (s) => {
  const split = s.split("");
  const hash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;

  let i = 0;

  while (i < split.length) {
    if (split[i] === "I" && split[i + 1] === "V") {
      result = result + 4;
      i += 2;
    } else if (split[i] === "I" && split[i + 1] === "X") {
      result = result + 9;
      i += 2;
    } else if (split[i] === "X" && split[i + 1] === "L") {
      result = result + 40;
      i += 2;
    } else if (split[i] === "X" && split[i + 1] === "C") {
      result = result + 90;
      i += 2;
    } else if (split[i] === "C" && split[i + 1] === "D") {
      result = result + 400;
      i += 2;
    } else if (split[i] === "C" && split[i + 1] === "M") {
      result = result + 900;
      i += 2;
    } else {
      result = result + hash[split[i]];
      i++;
    }
  }

  return result;
};

// console.log("-> romanToInt", romanToInt("LVIII"));
// console.log("-> romanToInt", romanToInt("XLVI"));
console.log("-> romanToInt", romanToInt("MCMXCIV"));

//MCMXCIV
