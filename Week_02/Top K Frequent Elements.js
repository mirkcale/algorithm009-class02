/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (hash[num]) {
            hash[num]++
        } else {
            hash[num] = 1;
        }
    }
    const arr = Object.entries(hash).sort((a, b) => b[1] - a[1]);
    return arr.splice(0, k).map(i => +i[0]);
};