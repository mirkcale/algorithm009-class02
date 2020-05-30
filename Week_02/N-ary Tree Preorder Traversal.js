
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
    let result = [];
    let traverse = (root) => {
        if (root === null) return
        result.push(root.val);
        if (root.children) root.children.map(i => traverse(i));
    }
    traverse(root);
    return result;
};