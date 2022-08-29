function solution(A) {
	const obj = {};
	const count = 0;
	for (let index = 0; index < A.length; index++) {
		const element = A[index];
		if (element < 0) {
			if (!obj[0]) {
				count++;
			}
			obj[0] = true;
		} else {
			if (!obj[element]) {
				count++;
			}
			obj[element] = true;
		}
	}

	if (obj[0] && !obj[1]) {
		return 1;
	} else {
		for (let index = 1; index <= count; index++) {
			if (!obj[index]) {
				return index;
			}
		}
		return count + 1;
	}
}

export default function tests() {
	test([0], 1);
	test([1], 2);
	test([1, 2, 3], 4);
	test([-1, -3], 1);
	test([1, 3, 6, 4, 1, 2], 5);
	test([-1, 0, -3], 1);
	test([-1, 1, -3], 2);
	test([2, -4, -3], 1);
	test(new Array(100000).fill(1), 2);
	test(new Array(100000).fill(-1000000), 1);
	test(new Array(100000).fill(1000000), 1);
	test(
		new Array(100000).fill(0).map((_, i) => i),
		100000
	);
	test(
		new Array(100000).fill(0).map((_, i) => i + -50000),
		50000
	);
}

function test(A, expected) {
	console.log(
		`-------------------------- Test [${
			A.length > 10
				? A.slice(0, 5) + ",...," + A.slice(A.length - 5, A.length) + "]"
				: A + "]"
		}`
	);
	console.time("Perf");
	const actual = solution(A);
	console.timeEnd("Perf");
	if (actual !== expected) {
		console.log(
			`-------------------------- Test failed - Actual: ${actual} _ Expected: ${expected}`
		);
	}
}
