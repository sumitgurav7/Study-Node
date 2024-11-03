//https://leetcode.com/problems/zigzag-conversion/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    let final = [];
    for(let i = 0; i<numRows; i++){
        final.push("")
    }
    let strIn = 0;
    let j = 0;
    while(strIn<s.length){
        for(let i = 0; i<numRows;i++){
            final[i] += s[strIn]
            strIn++;
        }
        for(let i = numRows-2; i>0;i--){
            j++;
            final[i] += s[strIn]
            console.log(i,j)
            strIn++;
            if(strIn >= s.length){
                break;
            }
        }
        j++;
    }
    

    
    return final.join('');
    
};

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert1 = function(s, numRows) {
    if(numRows <=1){
        return s;
    }
    let window = numRows+ numRows - 2;
    let repeat = 0;
    let res = '';
    let take = 0;
    while(repeat<numRows){
        for(let i = 0; i< s.length;i++){
            let start = i;
            i = start + window
            
                i = i-1;
            if(i < 0){
                res = res+s[start];
                repeat++;
                break;
            }
            if(repeat == 0){
                res = res+s[start];
            }else{
                if ((start+repeat) == (i-(repeat-1))) {
                    
                    if((start+repeat)< s.length){
                        res = res+s[start+repeat] ;
                    }
                } else {
                    if((start+repeat)< s.length){
                        res = res+s[start+repeat] ;
                    }
                    if((i-(repeat-1))<s.length){
                        res= res+s[i-(repeat-1)];
                    }
                }

            }
        }
        repeat = repeat+1;
    }
    return res;

}


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert2 = function(s, numRows) {
    let output = new Array(Math.min(numRows, s.length)).fill("");;
    let currentRow = 0;
    let directionUp = false;
    for(let letter of s){
        output[currentRow] +=letter;
        if(currentRow == 0 || currentRow == numRows -1 ){
            directionUp = !directionUp;
        }
        currentRow += directionUp ? +1 : -1; 
    }
    return output.join("");

}

console.log(convert2("PAYPALISHIRING", 3))
console.assert("PAHNAPLSIIGYIR" == convert2("PAYPALISHIRING", 3))

console.log(convert2("PAYPALISHIRING", 4))
console.assert("PINALSIGYAHRPI" == convert2("PAYPALISHIRING", 4))
console.log(convert2("A", 1))