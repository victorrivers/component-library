function solution(A) {
	const A1 = [0];
	const A2 = new Array(A.length + 1);
	A2[A2.length - 1] = 0;
	for (let index = 0; index < A.length; index++) {
		const valueA1 = A[index];
		A1.push(A1[index] + valueA1);

		const valueA2 = A[A.length - index - 1];
		A2[A2.length - index - 2] = A2[A2.length - index - 1] + valueA2;
	}

	let min = 2001;
	for (let index = 1; index < A1.length - 1; index++) {
		min = Math.min(min, Math.abs(A1[index] - A2[index]));
	}
	return min;
}

// 38s for N = 100000.
function solutionB(A) {
	let min = Math.abs(A[0] - A[1]);
	for (let index = 0; index < A.length - 1; index++) {
		const p1 = A.slice(0, index + 1).reduce((prev, current) => prev + current);
		const p2 = A.slice(index + 1, A.length).reduce(
			(prev, current) => prev + current
		);
		min = Math.min(min, Math.abs(p1 - p2));
	}
	return min;
}

export default function tests() {
	test([3, 1, 2, 4, 3], 1);
	test([-999, 0], 999);
	test([0, 999], 999);
	test([1, 999], 998);
	test([-999, 999], 1998);
	test([998, 999], 1);
	test([-1000, 0, 1000], 2000);

	const array = [];
	for (let index = 0; index < 99999; index++) {
		array.push(getRandomIntInclusive());
	}

	console.time("PERF");
	const result = solution(array);
	console.timeEnd("PERF");

	console.log(
		"result",
		result,
		array.slice(0, 4),
		"...",
		array.slice(array.length - 4, array.length)
	);
}

function test(A, expected) {
	const actual = solution(A);
	if (actual !== expected) {
		console.log(
			`TEST FAILED:> actual: ${actual}, expected: ${expected}, array: ...${A.slice(
				A.length - 5,
				A.length
			)}`
		);
	}
}

function getRandomIntInclusive() {
	const min = -1000;
	const max = 1000;
	return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
