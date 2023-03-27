export default function solution(A, B, C) {
	let count = 3;
	const binA = dec2bin(A);
	const binB = dec2bin(B);
	const binC = dec2bin(C);

	console.log(A, binA);
	console.log(B, binB);
	console.log(C, binC);

	let xor1 = dec2bin(A ^ B);
	let xor2 = dec2bin(A ^ C);
	let xor3 = dec2bin(B ^ C);

	const fullXor1 = new Array(30 - xor1.length).fill(1).join("") + xor1;
	const fullXor2 = new Array(30 - xor2.length).fill(1).join("") + xor2;
	const fullXor3 = new Array(30 - xor3.length).fill(1).join("") + xor3;

	const max = Math.max(xor1.length, xor2.length, xor3.length);
	if (xor1.length < max) {
		xor1 = new Array(max - xor1.length).fill(0).join("") + xor1;
	}
	if (xor2.length < max) {
		xor2 = new Array(max - xor2.length).fill(0).join("") + xor2;
	}
	if (xor3.length < max) {
		xor3 = new Array(max - xor3.length).fill(0).join("") + xor3;
	}

	console.log(xor1);
	console.log(xor2);
	console.log(xor3);

	for (let i = max; i <= 0; i--) {}

	return count;
}

function dec2bin(dec) {
	return (dec >>> 0).toString(2);
}

/**
 * (1,2,3)
(1,500000000,1073741823)
(1073741821,1073741822,1073741823)
(1073741820,1073741822,1073741823)
 */
