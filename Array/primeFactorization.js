const prompt = require('prompt-sync')();
//getting a number from the user
let num =prompt("Enter a number : ");
num = Number(num);
//array to store prime factors
let PrimeFactorArray = new Array();

function primeFactor(num) {
	{
		console.log("Prime factors of " + num + " are: ");
		for(let i = 2; i < num; i++) {
			for( ; num% i == 0 ; num=num/i)
				PrimeFactorArray.push(i);
		 }
		if(num > 2)
			PrimeFactorArray.push(num);

		console.log(PrimeFactorArray);
	}
}
primeFactor(num);
