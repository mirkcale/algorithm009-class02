/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let j = nums[0];
    let count = 1;
    for (let i = 0; i < nums.length; i++) {
        if (j !== nums[i]) {
            j = nums[i]
            count++;
        }
    }
    return count;
};

const result = removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
const result2 = removeDuplicates([1,1,2],)
console.log(result, result2);