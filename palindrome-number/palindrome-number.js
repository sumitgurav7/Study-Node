//https://leetcode.com/problems/palindrome-number/submissions/1420829864/?submissionId=1420726786

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    if(x<0){
        return false
    }
    let temp = x;
    let newNum = ''
    while(temp>0){
        newNum += temp % 10;
        temp = Math.floor(temp/10)
    }
    return x == newNum
};