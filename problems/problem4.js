// Largest Palindrome Product

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function largestPal(digits) {
	let highest = 0;

	// This chunk makes the function variable for any number of digits that user wants to check
	let largestNum = '9';
	largestNum += Number(largestNum.repeat(digits - 1));
	largestNum = Number(largestNum);

	// reverse iterate over both numbers so we don't waste processing power
	for (let i = largestNum; i > 0; i--) {
		for (let j = largestNum; j > 0; j--) {
			let product = i * j;
			if (isPalindrome(product)) {
				if (product > highest) {
					highest = product;
					break;
				}
			}
		}
	}
	return highest;
}

function isPalindrome(num) {
	// converts the number into a string so it can be easily reversed
	let reversed = String(num).split('').reverse().join('');

	return Number(reversed) === num;
}

console.log(largestPal(3));
// Answer:
// 906609
