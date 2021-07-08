// Given an array, write functions to find the minimum and maximum elements in it.

// using sorting method

function minandmax(arr , n){
    arr.sort();
    console.log('max no. : '+ arr[n]);
    console.log('min no. : ' + arr[0]);
}
minandmax([7,9,2,4,6], 4);

// using max and min method

function minandmax1(array){
        var max = Math.max.apply(null,array);
        var min = Math.min.apply(null,array);
 
        return {max,min};
}
console.log(minandmax1([7,9,2,4,6]));

// using iterating method

function max(arra){
    var max = -Infinity;
    for(var i = 0; i <=arra.length; i++){
        if(arra[i]>max){
            max = arra[i];
        }
    }
    return max;
}
console.log(max([7,9,2,4,6]));

function min(arra){
    var min = Infinity;
    for(var i = 0; i <=arra.length; i++){
        if(arra[i]<min){
            min = arra[i];
        }
    }
    return min;
}
console.log(min([7,9,2,4,6]));

