// Given two sorted arrays, find their union and intersection.

// Input : arr1[] = {1, 3, 4, 5, 7}
   //     arr2[] = {2, 3, 5, 6} 
// Output : Union : {1, 2, 3, 4, 5, 6, 7} 
   //      Intersection : {3, 5}

   function union(arr1 , arr2){
       var newArray = [];
         for(var i = 0; i<arr1.length ; i++){
             if(!newArray.includes(arr1[i])){
               newArray.push(arr1[i]);
             }
           for(var j = 0; j<arr2.length && arr2[j]<arr1[i]; j++){
                    if(!newArray.includes(arr2[j])){
                        newArray.push(arr2[j]);
                    }
           }
             }
             
         return newArray;
   }

   console.log(union([1, 3, 4, 5, 7],[2, 3, 5, 6]));


   function intersection(arr1 , arr2){
     var newArray = [];
     for(var i=0; i<arr1.length; i++){
       if(arr2.includes(arr1[i])){
         newArray.push(arr1[i]);
       }
     }
     return newArray;
   }

   console.log(intersection([1,3,4,5,7] , [2,3,5,6]));