  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }


var addTwoNumbers = function(l1 = [], l2 = []) {

    
    var carry = 0;
    var ans = [];

    var len1 = l1.length;
    var len2 = l2.length;
    if(!len1 && !len2){
        ans.push(0);
        return ans;
    }
    var largeNum = [];
    var smallNum = [];
    if(len1 > len2){
        largeNum = l1;
        smallNum = l2;
     }else{
         largeNum = l2;
         smallNum = l1;
     }

    for(let index = 0; index < largeNum.length; index++){
        if(index<smallNum.length){
            var sum = smallNum[index] + largeNum[index] + carry;
            if(sum > 9) { 
                carry = 1; 
                ans.push(sum%10);
            }else{
                carry = 0;
                ans.push(sum);
            }
        } else {
            var sum = largeNum[index] + carry;
            if(index === largeNum.length-1){
                if(sum > 9) {                     
                    ans.push(sum%10);
                    ans.push(1);
                }else{
                    ans.push(sum);
                }
            } else {
                if(sum > 9) { 
                    carry = 1; 
                    ans.push(sum%10);
                }else{
                    carry = 0;
                    ans.push(sum);
                }
            }
        }
    }

    return ans;
};


var l1 = [2,4,3]; var l2 = [5,6,4]
console.log( addTwoNumbers(l1, l2));
var l1 = [0]; var l2 = [0]
console.log( addTwoNumbers(l1, l2));
var l1 = []; var l2 = []
console.log( addTwoNumbers(l1, l2));
l1 = [9,9,9,9,9,9,9]; l2 = [9,9,9,9]

console.log( addTwoNumbers(l1, l2));