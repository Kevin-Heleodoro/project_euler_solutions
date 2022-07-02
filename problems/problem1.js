// Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

function sumOfMultiples(num) {
	let sum = 0; // variable to keep track of the sum of the multiples of 3 and 5

	for (let i = 0; i < num; i++) {
		if (i % 5 === 0 || i % 3 === 0) {
			sum += i; // add the current number to the previous sum if it is divisible by 3 or 5
		}
	}

	return sum;
}

console.log(sumOfMultiples(1000));

// Answer:
// 233168
