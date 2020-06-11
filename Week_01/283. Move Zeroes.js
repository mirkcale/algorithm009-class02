/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (nums[i] !== nums[j]) [nums[i], nums[j]] = [nums[j], nums[i]];
            j++
        }

    }
};
const a = [1, 2, 0, 0, 30, 0, 2];
moveZeroes(a)
console.log(a);

