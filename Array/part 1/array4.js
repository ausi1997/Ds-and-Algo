// Given an array and a number k where k is smaller than the size of the array, we need to find the k’th smallest
// element in the given array. It is given that all array elements are distinct.

function smallest(arr,k){
    var small = arr.sort();
    var kthSmall = small[k-1];
    return kthSmall;
}
console.log(smallest([7,3,6,9,2,8], 2));