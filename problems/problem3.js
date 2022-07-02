// Largest Prime Factor

// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function primeFinder(num) {
	let result = [];

	// In the case of an even number it will push the prime of 2 into the result array
	while (num % 2 === 0) {
		result.push(2);
		num = Math.floor(num / 2);
	}

	// In the case of an odd number it will check every odd number up until the squarae root of num.
	for (let i = 3; i <= Math.sqrt(num); i += 2) {
		while (num % i === 0) {
			result.push(i);
			num = Math.floor(num / i);
			console.log(result);
		}
	}

	// If at the end, num is greater than 2 it will push into result
	if (num > 2) {
		result.push(num);
	}

	return result;
}

console.log(primeFinder(600851475143));
// console.log(primeFinder(21));
// Answer:
// 6857

// Solution from willsierra
// let number = 600851475143;
// let primeFactors = [];

// for (i = 0; i <= number; i++) {
// 	if (number % i === 0) {
// 		primeFactors = i;
// 		number = number / primeFactors;
// 	}
// }

// console.log(primeFactors);
// console.log(number);
