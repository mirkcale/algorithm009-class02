/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  /**
   * @param {string} s
   * @param {number} left
   * @param {number} right
   */
  const extendMiddle = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++
    }
  }
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    extendMiddle(s, i, i);
    extendMiddle(s, i, i + 1);
  }
  return count;
};
