var lengthOfLongestSubstring = function(s = '') {
    if(!s || !s.length){
        return 0;
    }

    var uniqueStore = new Map();
    var MaxCount = 0;
    var count = 0;
    for(let index = 0; index <s.length; index++){
        var letter = s[index]
        if(uniqueStore.has(letter)){
            MaxCount = count > MaxCount ? count : MaxCount;
            count = 0;
            index = uniqueStore.get(letter);
            uniqueStore.clear();
            
        } else {
            uniqueStore.set(letter, index);
            count++;
        }
    }

    return MaxCount > count ? MaxCount : count;
};




// var s = "abcabcbb";
// console.log(lengthOfLongestSubstring(s));


// var s = "bbbbb";
// console.log(lengthOfLongestSubstring(s));


// var s = "pwwkew";
// console.log(lengthOfLongestSubstring(s));


// var s = "";
// console.log(lengthOfLongestSubstring(s));

s = "dvdf"
console.log(lengthOfLongestSubstring(s));