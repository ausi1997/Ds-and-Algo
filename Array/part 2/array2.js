// Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.

function missing(arr){
     var missingno;
    for(var i=0; i<arr.length; i++){
        if(arr[0]==2){
            missingno = 1;
        }
        else if(arr[i]-arr[i-1]>1){
         missingno = arr[i]-1;
        }
    }
    return missingno;
}

console.log(missing([1,2,3,4,5,6,7,9,10]));