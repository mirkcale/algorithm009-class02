/**
 *
 * @param {string} s
 */
var longestValidParentheses = function (s) {
  if (s.length <= 1) return 0
  let curMax = 0;
  let longest = new Array(s.length).fill(0);
  for (let i = 0; i < s.length; i++) {
    if (s[i] == ')' && i - longest[i - 1] - 1 >= 0 && s[i - longest[i - 1] - 1] == '(') {
      longest[i] = longest[i - 1] + 2 + ((i - longest[i - 1] - 2 >= 0) ? longest[i - longest[i - 1] - 2] : 0);
      curMax = Math.max(longest[i], curMax);
    }
  }
  return curMax;
}
