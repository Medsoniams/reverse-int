module.exports = function reverse (n) {

  let nToString = Math.abs(n).toString();
  let result = "";
  for (let i = 0; i <= nToString.length - 1; i += 1) {
    result = nToString[i] + result;
  }
  return Number(result);
}
