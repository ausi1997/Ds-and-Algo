// Given an array arr of integer elements, the task is to find the range and coefficient of range of the given array where: 
// Range: Difference between the maximum value and the minimum value in the distribution. 
// Coefficient of Range: (Max – Min) / (Max + Min).

function rangeCoff(array){
    var arr = array.sort(function(a,b){
        return a-b;
    });
    console.log(arr);
    var range = arr[arr.length-1] - arr[0];
    var highest = arr[arr.length-1] + arr[0];

    var coefficient = range/highest;

    return {range,coefficient};
}

console.log(rangeCoff([15, 16, 10, 9, 6, 7, 17]));