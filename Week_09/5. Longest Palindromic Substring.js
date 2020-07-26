
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let lo = 0;
  let maxlen = 0;
  /**
   *
   * @param {string} s
   * @param {number} left
   * @param {number} right
   */
  const extendPalindrome = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    if (maxlen < right - left - 1) {
      lo = left + 1;
      maxlen = right - left - 1;
    }

  }

  let length = s.length;
  if (length < 2) return s;
  for (let i = 0; i < s.length; i++) {
    extendPalindrome(s, i, i);
    extendPalindrome(s, i, i + 1);
  }
  return s.slice(lo, lo + maxlen);
};
