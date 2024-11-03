//https://leetcode.com/problems/string-to-integer-atoi/?submissionId=1420726786


/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let str = s.trim();
    let response = 0
    let isNegative = false;
    if(!str.includes('e') && Number.isInteger((0-str) * -1)){
        response =  (0-str) * -1;
        isNegative = response < 0 ;
        response = Math.abs(response);
        if(response > ((2 ** 31) - 1)){
            response = ((2 ** 31) - 1)
            response = (isNegative? response+1 : response )
        }
        return response * (isNegative? -1: 1);
    }
    let firstLetter = str[0];
    isNegative = false;
    if(firstLetter =='-'){
        isNegative = true;
        str = str.substr(1, str.length)
    } else if(firstLetter =='+'){
        isNegative = false;
        str = str.substr(1, str.length)
    }
    let newNum = ''
    for(let letter of str){
        if(Number.isInteger(Number.parseInt(letter))){
            newNum += letter
        } else{
            break;
        }
    }

    response = newNum ? Number.parseInt(newNum) : 0;

    if(response > ((2 ** 31) - 1)){
        response = ((2 ** 31) - 1)
        response = (isNegative? response+1 : response )
    }
    return response * (isNegative? -1: 1)
};


/**
 * @param {string} s
 * @return {number}
 */
var myAtoi1 = function(s){
    let trimmedStr = str.trim();
  let response = 0;
  let isNegative = trimmedStr[0] === '-' ? true : false;

  trimmedStr = trimmedStr.substr(isNegative || trimmedStr[0] === '+' ? 1 : 0); // Remove sign (+ or -)

  let extractedNumber = '';
  while (trimmedStr.length > 0 && trimmedStr[0].match(/\d/)) {
    extractedNumber += trimmedStr[0];
    trimmedStr = trimmedStr.substr(1);
  }

  response = extractedNumber ? Number.parseInt(extractedNumber) : 0;

  const maxInt = Math.pow(2, 31) - 1;
  if (response > maxInt) {
    response = isNegative ? maxInt + 1 : maxInt;
  }

  return response * (isNegative ? -1 : 1);
}



let s = " -042"
console.log(myAtoi(s));
s = "1337c0d3"
console.log(myAtoi(s));
s = "0-1"
console.log(myAtoi(s));
s = "words and 987"
console.log(myAtoi(s));
s ="-91283472332"
console.log(myAtoi(s));
s ="  -0012a42"
console.log(myAtoi(s));
s="   -115579378e25"
console.log(myAtoi(s));
s="  +  413"
debugger
console.log(myAtoi(s));


