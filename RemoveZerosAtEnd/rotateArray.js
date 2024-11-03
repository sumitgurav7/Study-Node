var nums = [1,2,3,4, 5,6,7];
var k = 3;

// var rotate = function(nums = [], k = 0) {
//     var carry = [];
//     for(var i = nums.length-k; i < nums.length; i++ ){
//         carry.push(nums[i]);
//     }
//     for( var i = 0; i < nums.length - k; i++) {
//         carry.push(nums[i]);
//     }
//     console.log(carry);
    
// };

const rotate = function(nums, k) {
    const numsLen=nums.length,
          num = k%numsLen;
    if(num) {
        var carry = nums.splice(numsLen-num,numsLen-1);
        console.log(nums, carry);
        nums.splice(0,0, ...carry);
        console.log(nums);
        // console.log(nums.splice(numsLen-num,numsLen-1), num, nums.splice(0,0), nums.splice(0,0,...nums.splice(numsLen-num,numsLen-1)));
        // nums.splice(0,0,...nums.splice(numsLen-num,numsLen-1));   
    }
};


rotate(nums, k);