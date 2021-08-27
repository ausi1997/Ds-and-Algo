// Given an array a[] of size N which contains elements from 0 to N-1, you need to find all the elements occurring more than once in the given array

function duplicate(arr){
    var duplicateNum = [];

    for(var i=0; i<arr.length; i++){
        for(var j=i; j<arr.length; j++){
            if(arr[i] == arr[j+1] && !duplicateNum.includes(arr[i])){
                duplicateNum.push(arr[i]);
            }
        }
    }
    return duplicateNum;
}

console.log(duplicate([2,4,5,2,6,3,2,5]));