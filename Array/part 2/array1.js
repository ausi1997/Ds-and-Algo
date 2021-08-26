// Given an array, rotate the array by one position in clock-wise direction.

function rotation(arr , n ){
    var newArray = arr;
       // console.log(newArray[newArray.length-1]);
    for(var i=1; i<=n; i++){
        newArray.unshift(newArray[newArray.length-1]);
         newArray.pop(newArray[newArray.length-1]);
    }
    return newArray;
}

console.log(rotation([1,2,3,4,5] , 2));