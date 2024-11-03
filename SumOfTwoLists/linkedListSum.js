

 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }


 var addTwoNumbers = function(l1 = new ListNode(0, null), l2 = new ListNode(0, null)) {
    var carry = 0;
    var ans = null;
    var next = null;
    while(l1 !== null ||  l2 !== null){
        if(l1 !== null && l2 !== null){
            var sum = l1.val + l2.val + carry;
            carry = 0;
            if(sum > 9) { 
                carry = 1; 
                if(ans !== null){                    
                    next.next = new ListNode(sum%10, null);
                    next = next.next;
                } else {
                    ans = new ListNode(sum%10, null);
                    next = ans;
                }
            }else{
                carry = 0;
                if(ans !== null){                    
                    next.next = new ListNode(sum%10, null);
                    next = next.next;
                } else {
                    ans = new ListNode(sum%10, null);
                    next = ans;
                }
            }

            l1 = l1.next;
            l2 = l2.next;
        }
        else if(l1 === null && l2 !== null){
            var sum = l2.val + carry;
            carry = 0;

            if(l2.next === null){
                if(sum > 9) {                   
                    if(ans !== null){
                        next.next = new ListNode(sum%10, null);
                        next = next.next;
                    } else {
                        ans = new ListNode(sum%10, null);
                        next = ans;
                    }
                    next.next = new ListNode(1, null);
                    next = next.next;
                }else{
                    if(ans !== null){
                        next.next = new ListNode(sum%10, null);
                        next = next.next;
                    } else {
                        ans = new ListNode(sum%10, null);
                        next = ans;
                    }
                }
            } else {
                if(sum > 9) { 
                    carry = 1; 
                    if(ans !== null){
                        next.next = new ListNode(sum%10, null);
                        next = next.next;
                    } else {
                        ans = new ListNode(sum%10, null);
                        next = ans;
                    }
                }else{
                    carry = 0;
                    if(ans !== null){
                        next.next = new ListNode(sum%10, null);
                        next = next.next;
                    } else {
                        ans = new ListNode(sum%10, null);
                        next =  ans;
                    }
                }
            }
            l2 = l2.next;
        } 
        else if (l1 !== null && l2 ==null){
            var sum = l1.val + carry;
            carry = 0;

            if(l1.next === null){
                if(sum > 9) {                   
                    if(ans !== null){
                        next.next = new ListNode(sum%10, null);
                        next = next.next;
                    } else {
                        ans = new ListNode(sum%10, null);
                        next = ans;
                    }
                    next.next = new ListNode(1, null);
                    next = next.next;
                }else{
                    if(ans !== null){
                        next.next = new ListNode(sum%10, null);
                        next = next.next;
                    } else {
                        ans = new ListNode(sum%10, null);
                        next = ans;
                    }
                }
            } else {
                if(sum > 9) { 
                    carry = 1; 
                    if(ans !== null){
                        next.next = new ListNode(sum%10, null);
                        next = next.next;
                    } else {
                        ans = new ListNode(sum%10, null);
                        next =ans;
                    }
                }else{
                    carry = 0;
                    if(ans !== null){
                        next.next = new ListNode(sum%10, null);
                        next = next.next;
                    } else {
                        ans = new ListNode(sum%10, null);
                        next = ans;
                    }
                }
            }
            l1 = l1.next;
        }
    }
    if(carry > 0){
        next.next = new ListNode(carry, null);
    }
    return ans;
};


function addTwoNumbers2(l1 = new ListNode(), l2 = new ListNode(), carry = 0){
    var node = null
    if(l1 || l2){
        var val1 = l1.val ? l1.val : 0;
        var val2 = l2.val ? l2.val : 0;
        var sum = val1+val2+carry;
        node = new ListNode(sum%10);
        node.next = addTwoNumbers(l1? l1.next : null, l2? l2.next:null, sum > 9 ? 1 : 0 )

    } else if(carry){
        node = new ListNode(carry);
        node.next = null;
    }

    return node;
}


var l1 = new ListNode(2,new ListNode(4, new ListNode(3, null)))
var l2 = new ListNode(5,new ListNode(6, new ListNode(4, null)))

//console.log(addTwoNumbers(l1,l2));

var l1 = new ListNode(5,null)
var l2 = new ListNode(5,null)

console.log(addTwoNumbers2(l1,l2));
