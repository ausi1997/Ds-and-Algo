// Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose sum is equal to K


function pairSum(arr , k){
     var counter = 0;
    for(var i=0; i<arr.length; i++){
     for(var j=i; j<arr.length; j++){
         if(arr[i] + arr[j+1] == k){
             counter = counter + 1;
         }
     }
    }
    return counter;
}

console.log(pairSum([1,1,1,1] , 2));