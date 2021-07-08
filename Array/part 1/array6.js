// Given an array A[] consisting 0s, 1s and 2s. The task is to write a function that sorts the given array. 
//The functions should put all 0s first, then all 1s and all 2s in last.

function arrange(array){
    var arrange = array.sort();
    return arrange;

}
console.log(arrange([1,0,1,2,0,1,2,0,2]));