var TrieNode = function (val, compele = false) {
  this.head = val;
  this.child = {};
  this.isCompeledWord = compele;
};

/**
 * Initialize your data structure here.
 */
var Trie = function() { 
  this.head = new TrieNode('*');
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let currentNode = this.head;
  for (let char of word) {
    let node = currentNode.child[char] ? currentNode.child[char] : new TrieNode(char);
    currentNode.child[char] = node;
    currentNode = node;
  }
  currentNode.isCompeledWord = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
     let wordLength = word.length;
  let head = this.head;
  let count = 0;
  while (wordLength--) {
    head = head.child[word[count++]];
    if (!head) {
      return false
    }
  }
  return head && head.isCompeledWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
     let wordLength = prefix.length;
  let head = this.head;
  let count = 0;
  while (wordLength--) {
    head = head.child[prefix[count++]];
    if (!head) {
      return false
    }
  }
  return !!head;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */