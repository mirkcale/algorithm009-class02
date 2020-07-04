
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
    if (rootP === rootq) return;
    this.parent[rootP] = rootq;
    this.count--;
  }

}

/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
  const rowLength = M[0].length;
  const joinSet = new UnionFind(rowLength);
  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
      if (M[i][j] === 1) {
        joinSet.union(i, j);
      }
    }
  }
  return joinSet.count;
};