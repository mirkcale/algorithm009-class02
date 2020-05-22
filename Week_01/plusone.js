/**
 * 
 * @param {number[]} digits 
 * @param {number} extra 
 */
var plusOne = function (digits, extra = 1) {
    let i = digits.length;
    while (i--) {
        const sum = digits[i] + extra;
        if (sum > 9) {
            digits[i] = sum - 10;
            extra = ~~(sum / 10);
        } else {
            digits[i] = sum;
        }
        if(extra){
            digits.unshift(extra);
        }
    }
    return digits;
};