/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = [];
    let list = [];
    const backTracking = (start, list) => {
        res.push(list);
        for (let i = start; i < nums.length; i++) {
            list.push(nums[i]);
            backTracking(i + 1, list.slice());
            list.pop();
        }
    }
    backTracking(0, list);
    return res;
};


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets1 = function (nums) {
    let n = nums.length;
    let tmpPath = [];
    let res = [];
    /**
     * 
     * @param {number[]} tmpPath 
     * @param {number} start 
     */
    let backtrack = (tmpPath, start) => {
        res.push(tmpPath);
        for (let i = start; i < n; i++) {
            tmpPath.push(nums[i]);
            backtrack(tmpPath.slice(), i + 1);
            tmpPath.pop();
        }
    }
    backtrack(tmpPath, 0);
    return res;
};

subsets([1, 2, 3, 4])