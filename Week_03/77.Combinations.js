/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    var res = [];
    var tmp = [];
    const traverse = (n, k, index, res, tmp) => {
        if (n - index + 1 < k) {
            return;
        }
        if (k == 0) {
            res.push(tmp.concat());
            return;
        }
        tmp.push(index);
        traverse(n, k - 1, index + 1, res, tmp)
        tmp.pop();
        traverse(n, k, index + 1, res, tmp)
    }
    traverse(n, k, 1, res, tmp);
    return res;
};


/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    var res = [];
    var temp = [];
    /**
     * 
     * @param {number} index 
     * @param {number[]} temp 
     */
    const backTracking = (index, temp) => {
        // terminater
        if (temp.length === k) {
            res.push(temp);
            return;
        }
        for (let i = index; i <= n; i++) {
            // choose
            temp.push(i);
            // dirive
            backTracking(i + 1, temp.slice());
            // back
            temp.pop();

            console.log(temp);
        }
    }
    backTracking(1, temp);
    console.log(res);
    return res;
};

combine(4, 2);