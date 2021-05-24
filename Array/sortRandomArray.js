//getting 10 random three digit numbers
let randomNoArray = new Array();
for  ( let count=0 ; count<10; count++ ){
    randomNoArray[count] =  Math.floor(Math.random()*900 + 1);
}
console.log("Ten random numbers are: ");
console.log(randomNoArray);

//using Array Helper (sort) to sort the array
randomNoArray.sort(function(a,b)
    {
        return a-b
    });
    console.log("Second largest number in the array is: "+randomNoArray[randomNoArray.length-2]);
    console.log("Second smallest number in the array is :"+randomNoArray[1]);