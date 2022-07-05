// Smallest Multiple

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function smallestMultiple(maxNum) {
	let increment = 2;
	let step = 2;
	let smallestNum = 2;

	while (smallestNum <= Number.MAX_SAFE_INTEGER) {
		for (let i = 2; i <= maxNum; i++) {
			let isDivisible = smallestNum % i === 0;

			if (!isDivisible) break;

			if (i === increment) {
				step = smallestNum;
				increment++;
			}

			if (i === maxNum) return smallestNum;
		}
		smallestNum += step;
	}
}

console.log(smallestMultiple(10));
// Answer:
// 232792560
