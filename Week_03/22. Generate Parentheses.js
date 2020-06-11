/**
 * 解法一 递归
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];
  const helper = (l, r, s) => {
    if (l === n && r === n) {
      res.push(s);
      return;
    }
    if (l < n) helper(l + 1, r, s + '(');
    if (l > r) helper(l, r + 1, s + ')');
  }
  helper(0, 0, '');
  console.log(res);
  return res;
};

/**
 * 解法二 回溯
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = []
  let depth = n * 2 - 1;

  const backtrack = (str, closed) => {
    // terminater
    if (depth === 0) {
      result.push(str)
    } else {
      // choose
      depth--
      // processor (like two times for looper)
      if (depth != 0 && depth + 1 > -closed) backtrack(str + '(', closed - 1);
      if (closed + 1 <= 0) backtrack(str + ')', closed + 1);
      // back tracking
      depth++
    }
  }
  backtrack('(', -1);
  console.log(result);
  return result
};

generateParenthesis(3);
