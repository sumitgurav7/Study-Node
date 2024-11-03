//https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x > (Math.pow(2,31) - 1) || x<(Math.pow(-2,31))) return 0;
    let percentageIncrement = 10;
    let division = 1;
    let currentRmainder = 1;
    let numberRes = 0;
    let isNegative = x<0 ? true : false;
    let carry = 2;
    x= Math.abs(x);
    let power = Math.floor(Math.log10(x));
    while(carry>1){
        if(numberRes.length > 10){
            return 0;
        }
        currentRmainder = Math.floor((x%percentageIncrement)/division);
        carry = x/division;
        if(carry<1){
            break
        }
        numberRes += currentRmainder*Math.pow(10, power);
        if(numberRes > (Math.pow(2,31) - 1) || numberRes<(Math.pow(-2,31))) return 0;
        power--;

        percentageIncrement *= 10;
        division *= 10;
    }
    let response = numberRes * (isNegative ? -1 : 1);
    return response;
    

};

/**
 * @param {number} x
 * @return {number}
 */
var reverse1 = function(x) {
    if(x > (Math.pow(2,31) - 1) || x<(Math.pow(-2,31))) return 0;
    let isNegative = x<0;
    x= Math.abs(x);
    let str = x+''
    let resp = str.split('').reverse().join('');
    let response =  0-resp * (isNegative ? 1 : -1);
    if(response > (Math.pow(2,31) - 1) || response<(Math.pow(-2,31))) return 0;
    return response;    

};


console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))