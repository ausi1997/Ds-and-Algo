// Given an array (or string), the task is to reverse the array/string.

 function reverse(array){
     var newArray = [];
     for(var i=array.length-1; i>=0; i--){
          newArray.push(array[i]);
     }
     return newArray;
 }

 console.log(reverse([1,2,3,4,5]));

 // using methods

 function revrse1(arr){
     var reverse = arr.reverse();
     return reverse;
 }
 console.log(revrse1([1,2,3,4,5]));