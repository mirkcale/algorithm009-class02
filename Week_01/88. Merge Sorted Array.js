/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, tar = m + n - 1;
    while (j >= 0) {
        nums1[tar--] = i >= 0 && nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    }
};

const nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [1, 2, 3]
merge(nums1, 3, nums2, 3);
// console.log(nums1.toString());
