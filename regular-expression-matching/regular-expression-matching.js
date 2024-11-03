//https://leetcode.com/problems/regular-expression-matching/description/?submissionId=1420726786


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let stringCtr =0;
    let matchStringCtr = 0;
    let carryChar = '';
    let flagStar = false; 
    let startFound = false;
    let dotFound = false;
    while(stringCtr<s.length || matchStringCtr <p.length){
        if(flagStar){
            if(carryChar == '.'){
                if(matchStringCtr == (p.length-1)){
                    return true;
                } else if(p[matchStringCtr+1] == s[stringCtr]){
                    flagStar = false;
                    matchStringCtr++;
                } else if(stringCtr == s.length-1 && matchStringCtr < p.length) {
                    return false;
                }
                else{
                    stringCtr++;
                }
            } else  if(carryChar == s[stringCtr]){
                stringCtr++
            } else {
                matchStringCtr++;
                flagStar = false;
                if(s[stringCtr] == undefined && (p[matchStringCtr] == carryChar || p[matchStringCtr] == '*')){
                    flagStar = true
                } else if(s[stringCtr] == undefined && (p[matchStringCtr] != carryChar && p[matchStringCtr+1] == '*')){
                    carryChar = carryChar
                    flagStar = true;
                }
                
            }
        } else {
            if(stringCtr == s.length){
                if(p[matchStringCtr+1] == '*' || p[matchStringCtr] == '*'){
                    startFound = true;
                    matchStringCtr++
                } else if(carryChar == '.' && p[matchStringCtr] == '*'){

                }
                 else {
                    return false;
                }
            }
            else if(s[stringCtr] == p[matchStringCtr] && p[matchStringCtr+1] != '*'){
                carryChar = '';
                stringCtr++;
                matchStringCtr++;
            } 
             else if(p[matchStringCtr] == '.'){
                carryChar = '';
                dotFound = true;
                stringCtr++;
                matchStringCtr++;
            } else if(p[matchStringCtr+1] == '*'){
                carryChar = p[matchStringCtr];
                flagStar = true;
            } else if(p[matchStringCtr] == '*'){
                carryChar = p[matchStringCtr-1];
                startFound = true;
                flagStar = true;
            }
            else {
                return false;
            }
        }
        
    }
    if(!dotFound && !startFound){
        return s.length == p.length;
    }

    return true;
};

let s = "aa", p = "a";
console.log(isMatch(s,p)) //f
s = "aa", p = "a*"
console.log(isMatch(s,p)) //t
s = "ab", p = ".*"
console.log(isMatch(s,p)) //t
s = "aab", p ="c*a*b"
console.log(isMatch(s,p)) //t
s = "mississippi", p ="mis*is*p*."
console.log(isMatch(s,p)) //f
s ="ab", p =".*c"
console.log(isMatch(s,p)) //f
s = "aaa", p = "ab*ac*a"
console.log(isMatch(s,p)) //t
s="a", p="ab*"
console.log(isMatch(s,p)) //t
s="aaa", p="a*a"
console.log(isMatch(s,p)) //t
s="aaa", p="ab*a*c*a"
console.log(isMatch(s,p)) //t
s="bbbba", p=".*a*a"
console.log(isMatch(s,p)) //t

//reverse string


