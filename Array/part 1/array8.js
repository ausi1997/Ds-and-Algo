// An array contains both positive and negative numbers in random order. 
// Rearrange the array elements so that all negative numbers appear before all positive numbers.

// Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
// Output: -12 -13 -5 -7 -3 -6 11 6 5

function rearrange(array){
    var arr=array.sort(function(a,b){
        return a-b;
    })
    return arr;
}
console.log(rearrange([-12, 11, -13, -5, 6, -7, 5, -3, -6]));