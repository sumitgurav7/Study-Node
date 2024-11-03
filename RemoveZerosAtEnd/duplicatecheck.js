var nums = [1,2,3,1];
var store = {};
var containsDuplicate = function(nums = []) {
    for(var i = 0; i < nums.length; i++){
        if(nums[i] in store){
            return true;
        }
        store[nums[i]] = true;
    }
    return false;
};

console.log(containsDuplicate(nums));
console.log(store);
store = {};
nums = [1,2,3,4];
console.log(containsDuplicate(nums));
store = {};
nums = [1,1,1,3,3,4,3,2,4,2];
console.log(containsDuplicate(nums));