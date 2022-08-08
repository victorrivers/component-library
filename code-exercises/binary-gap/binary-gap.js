export default function binaryGap(N) {
	if (N < 1 || N > 2147483647) {
		return 0;
	}

	const binValue = dec2bin(N);

	const intArr = Array.from(String(binValue), (num) => Number(num));

	const result = [];
	let zeroCounter = 0;
	intArr.forEach((value, index) => {
		if (value === 1) {
			zeroCounter = 0;
			result[index] = 0;
		} else {
			zeroCounter++;
			result[index] = zeroCounter;
		}
	});

	let max = 0;
	let current = 0;
	result.forEach((x) => {
		current = Math.max(x, current);
		if (current > 0 && x === 0) {
			max = Math.max(max, current);
			current = 0;
		}
	});
	return max;
}

function dec2bin(dec) {
	return (dec >>> 0).toString(2);
}
