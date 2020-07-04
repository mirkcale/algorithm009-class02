
class UnionFind {
  count = 0;
  parent = [];
  constructor(n) {
    this.count = n;
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }

  find(p) {
    while (p !== this.parent[p]) {
      this.parent[p] = this.parent[this.parent[p]];
      p = this.parent[p];
    }
    return p
  }

  union(p, q) {
    let rootP = this.find(p);
    let rootq = this.find(q);
    if (rootP === rootq) return false;
    this.parent[rootP] = rootq;
    this.count--;
    return true
  }

}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (grid == null || grid.length == 0 || grid[0].length == 0) return 0;
  let joinSet = new UnionFind(grid.length * grid[0].length);
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        count++;
        let ijIndex = grid[i].length * i + j;
        if (grid[i + 1] && grid[i + 1][j] == 1) {
          if (joinSet.union(ijIndex, ijIndex + grid[i].length)) count--;
        }
        if (grid[i][j + 1] == 1) {
          if (joinSet.union(ijIndex, ijIndex + 1)) count--;
        }
      }
    }
  }
  return count;
};