//https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    let largeArray = [];
    let smallArray = [];
    if (nums1.length > nums2.length)  {largeArray = nums1; smallArray= nums2 }else{  largeArray = nums2; smallArray = nums1}
    let uniqueArray = [];
    let carry = 0;
    for(let i  = 0; i < largeArray.length; i++){
        carry = largeArray[i];
        uniqueArray.push(carry);
        if(smallArray[i] && carry !== smallArray[i]){
            carry = smallArray[i];
            uniqueArray.push(carry);
        }
    }
    uniqueArray = uniqueArray.sort();
    let isDoubleMedian = uniqueArray.length%2 === 0;
    let medianIndex = Math.floor(uniqueArray.length/2)-1
    return isDoubleMedian ? (uniqueArray[medianIndex] + uniqueArray [medianIndex+1])/2 : uniqueArray[medianIndex+1];
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays1 = function(nums1, nums2) {
    
    let uniqueArray = [...nums1, ...nums2];
    uniqueArray = uniqueArray.sort(  (a,b) => {if (a< b) {
        return -1;
      } else if (a > b) {
        return 1;
      }
      // a must be equal to b
      return 0});
    let isDoubleMedian = uniqueArray.length%2 === 0;
    let medianIndex = Math.floor(uniqueArray.length/2)-1
    return isDoubleMedian ? (uniqueArray[medianIndex] + uniqueArray [medianIndex+1])/2 : uniqueArray[medianIndex+1];
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays2 = function(nums1, nums2) {
    let allLength = nums1.length+nums2.length;
    let isDoubleMedian = allLength%2 === 0;
    let medianIndex = Math.floor(allLength/2)-1
    let length1 = nums1.length;
    let length2 = nums2.length;
    let index1 = 0, index2 = 0;
    let final = [];
    let isBreakAPplied = false;
    while(length1 !== index1 && length2 !== index2){
        
        if(nums1[index1] > nums2[index2]){
            final.push(nums2[index2]);
            index2 = index2+1;
        }
        else if(nums1[index1] < nums2[index2]){
            final.push(nums1[index1]);
            index1 = index1+1;
        }
        else{
            final.push(nums1[index1]);
            final.push(nums2[index2]);
            index1 = index1+1;
            index2 = index2+1;
        }
        
        if(final.length == medianIndex+2){
            isBreakAPplied = true;
            break;
        }
    }

    if (!isBreakAPplied) {
        let {remainingNums,remainingLength, actualLength} = index1 == length1 && index2 !==length2 ? {remainingNums: nums2,remainingLength: index2,actualLength: length2} : index1 !== length1 && index2 == length2 ? {remainingNums: nums1,remainingLength: index1,actualLength: length1} : {remainingNums: [],remainingLength: 0,actualLength: 0}
            while(remainingLength !== actualLength){
                final.push(remainingNums[remainingLength]);
                remainingLength = remainingLength + 1;
            }
        
    }

    return isDoubleMedian ? (final[medianIndex] + final[medianIndex+1])/2 : final[medianIndex+1];
};

console.log(findMedianSortedArrays2([1,3], [2]))
console.log(findMedianSortedArrays2([1,2], [3,4]))
console.log(findMedianSortedArrays2([1,2,3,4,5], [6,7,8,9,10,11,12,13,14,15,16,17]))