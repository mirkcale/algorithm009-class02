/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;
  const treeNode = [beginWord].concat(wordList);
  const graph = [];
  const onlyOneLetterDiff = (a, b) => {
    let diffCount = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) diffCount++;
    }
    return diffCount === 1;
  }
  for (let i = 0; i < treeNode.length; i++) {
    for (let j = 0; j < treeNode.length; j++) {
      const a = treeNode[i];
      const b = treeNode[j];
      if (!graph[i]) {
        graph[i] = [];
      }
      graph[i].push(0);
      if (i !== j && onlyOneLetterDiff(a, b)) graph[i][j] = 1;
    }
  }
  console.log(graph);
};

ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);
ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"]);
