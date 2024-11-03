var nums = [0,1,0,3,12];

var moveZeroes = function(nums = []) {
    var counter = 0;
    for(var i = 0; counter < nums.length; i++){
        if(nums[i] == 0){
            nums.splice(i,1);
            nums.push(0);
            i--;
        }
        counter++;

    }

    console.log(nums);
};

moveZeroes(nums);