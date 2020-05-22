/**
 * 解法一 暴力遍历
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const length = nums.length;
    if (length < 2) {
        return null;
    }
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            const ele1 = nums[i];
            const ele2 = nums[j];
            if (ele1 === ele2) {
                continue;
            }
            if (ele2 + ele1 === target) {
                return [i, j];
            }
        }
    }
    return null;
};

/**
 * 解法二 利用hash 辅助
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let length = nums.length;
    const map = new Map();
    for (let i = 0; i < length; i++) {
        map.set(target - nums[i], i);
    }
    for (let i = 0; i < length; i++) {
        if (map.has(nums[i]) && i !== map.get(nums[i])) {
            return [i, map.get(nums[i])];
        }
    }
};

/**
 * 解法三 利用hash 辅助，一次遍历
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const ele = nums[i];
        const sub = target - ele;
        if (map.has(sub) && map.get(sub) !== i) {
            return [i, map.get(sub)];
        }
        map.set(sub, i);
    }
}