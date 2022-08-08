function solution(A) {
	const max_value = 100000;
	const obj = {};
	let min = max_value;
	let max = 1;
	for (let index = 0; index < A.length; index++) {
		const value = A[index];
		if (obj[value] || value < 1 || value > max_value) {
			return 0;
		} else {
			obj[value] = 1;
		}
		min = Math.min(min, value);
		max = Math.max(max, value);
	}

	if (min !== 1) {
		return 0;
	}

	for (let index = min; index <= max; index++) {
		if (!obj[index]) {
			return 0;
		}
	}

	return 1;
}

export default function tests() {
	const max_value = 100000;

	let index = 0;
	const A = [];
	while (index < max_value) {
		index++;
		A.push(index);
	}
	test(A, 1);
}

function test(A, expected) {
	console.log(`TEST A.length: ${A.length}`);
	console.time("P");
	const result = solution(A);
	console.timeEnd("P");
	console.log(`Actual: ${result}, Expected: ${expected}`);
	console.log("---------------------------------");
}
