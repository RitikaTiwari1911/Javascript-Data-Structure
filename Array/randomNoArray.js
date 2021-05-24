
//fuunction for second largest number in array
function secondLargestNumber(randomNoArray) {
    largestNumber = Math.max(...randomNoArray); // finding the largest number from the array
    pos = randomNoArray.indexOf(largestNumber); // getting the index of the largest number
    randomNoArray.splice(pos, 1); // splicing the largest number
    secLargestNumber = Math.max(...randomNoArray); // getting the second largest number
    console.log("Second largest number in the array is: "+secLargestNumber);

}

//function for the second smallest number in the array
function secondSmallestNumber(randomNoArray) {
    smallestNumber = Math.min(...randomNoArray); //geting the smallest number of the array
    pos = randomNoArray.indexOf(smallestNumber); //  getting the index of the smallest number
    randomNoArray.splice(pos, 1) // splicing the smallest number
    secSmallestNumber = Math.min(...randomNoArray) // getting the second smallest number
    console.log("Second smallest number in the array is: "+secSmallestNumber);

}


let randomNoArray = new Array();
for  ( let count=0 ; count<10; count++ ){
    randomNoArray[count] =  Math.floor(Math.random()*900 + 1);
}
console.log("Ten random numbers are: ");
console.log(randomNoArray);

secondLargestNumber(randomNoArray);
secondSmallestNumber(randomNoArray);
