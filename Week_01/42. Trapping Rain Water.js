/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const stack = [-1];
    for (let i = 0; i < height.length; i++) {
        const h = height[i];
        while (stack.length && h > stack[0]) {
            let temp = stack[0];
            
        }
        stack.unshift(h);
    }
};