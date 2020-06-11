/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const colLength = grid.length;
  let result = 0;
  const dfs = (i, j) => {
    // 行、列越界 或者不是水域就返回
    if (!grid[i] || !grid[i][j] || grid[i][j] === '0') {
      return
    } else grid[i][j] = 0;
    dfs(i, j + 1);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i - 1, j);

  }
  for (let i = 0; i < colLength; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        result++;
        dfs(i, j);
      }
    }
  }
  console.log(result);
  return result;
};

numIslands([["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]])
numIslands([
  ['1', '1', '', '', ''],
  ['1', '1', '', '', ''],
  ['', '', '1', '', ''],
  ['', '', '', '1', '1'],
]);
numIslands([
  ['1', '1', '1'],
  ['0', '1', '0'],
  ['1', '1', '1'],
]);
numIslands([
  ["1", "0", "1", "1", "1"],
  ["1", "0", "1", "0", "1"],
  ["1", "1", "1", "0", "1"]
])
