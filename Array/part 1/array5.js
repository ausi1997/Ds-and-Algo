// Given an array, a[], and an element x, find a number of occurrences of x in a[].

function number(array , x){
    var newArray = [];
    for(var i = 0; i<array.length; i++){
        if(array[i] == x){
            newArray.push(array[i]);
        }
    }
    return newArray.length;
}

console.log(number([5,7,9,1,3,4,5,2,1] , 1));