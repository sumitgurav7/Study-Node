var inputArray = [1,5,3,6,8,0,7,2];

var solveFunc = (input,target,store = {}) => {
    var res = [];
    for(var num in input){
        if(num in store){
            res.push({num1:num, num2: store[num]});
        }
        else{
            store[target > num ? target-num:num-target] = num;
        }
    }
    console.log(res);
}


solveFunc(inputArray,7);