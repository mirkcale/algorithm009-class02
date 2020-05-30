var levelOrder = function (root) {
    let result = [];
    let level = 0;
    let traversal = (root, level) => {
        if (root === null) return
        if (result[level]) result[level].push(root.val)
        else result[level] = [root.val];
        level++;
        if (root.children) {
            root.children.map(item => traversal(item, level));
        }
    }
    traversal(root, level);
    return result;
};