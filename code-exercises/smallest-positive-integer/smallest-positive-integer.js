/*
Correctness
20%

Performance
50%

Task score
33%

Correctness test cases
Passed 1 out of 5

Performance test cases
Passed 2 out of 4
*/
function solutionA(A) {
	const value = findSmallest(A);
	return Math.max(value, 1);
}

/*
Correctness
60%

Performance
50%

Task score
55%

Correctness test cases
Passed 3 out of 5

Performance test cases
Passed 2 out of 4
*/
function solutionB(A) {
	if (A.length === 1) {
		return Math.max(A.at(0) + 1, 1);
	}

	let min = 1;
	let index = 0;
	const obj = {};
	while (index < A.length) {
		const value = A[index];
		min = Math.min(min, value);
		obj[value] = true;
		index++;
	}

	index = min;
	while (index < A.length) {
		if (obj[index] === undefined) {
			return Math.max(1, index);
		}
		index++;
	}
	return Math.max(index + 1, 1);
}

/*
Correctness
80%

Performance
100%

Task score
88%

Correctness test cases
Passed 4 out of 5

Performance test cases
Passed 4 out of 4
*/
function solutionC(A) {
	if (A.length === 1) {
		return Math.max(A.at(0) + 1, 1);
	}

	let min = 1;
	let index = 0;
	const obj = {};
	while (index < A.length) {
		const value = Math.max(A[index], 0);
		min = Math.min(min, value);
		obj[value] = true;
		index++;
	}

	index = min;
	while (index < A.length) {
		if (obj[index] === undefined) {
			return Math.max(1, index);
		}
		index++;
	}
	return Math.max(index + 1, 1);
}

function findSmallest(A) {
	if (A.length === 1) {
		return A.at(0) + 1;
	}

	let result = undefined;
	const a = [...A].sort((a, b) => a - b);
	for (let index = 0; index < a.length; index++) {
		const needle = index + 1;
		if (index <= a.length - 2) {
			const value = a[index] + 1;
			if (a[index] !== a[needle] && value !== a[needle]) {
				result = value;
				break;
			}
		} else {
			// Last element
			result = a[index] + 1;
			break;
		}
	}
	return result;
}

export default function tests() {
	testFindSmallest([1, 3, 6, 4, 1, 2], 5); // 5
	testFindSmallest([1, 2, 3], 4); // 4
	testFindSmallest([-1, -3], -2); // -2 => 1
	testFindSmallest([-1, -3, -2], 0); // 0 => 1
	testFindSmallest([-1, -3, -2, 0], 1); // 1
	testFindSmallest([-1, -3, -2, 0, 1], 2); // 2
	testFindSmallest([-1, -3, -2, 1], 0); // 0 => 1
	testFindSmallest([10, 9, -2, -71], -70); // -70 => 1
	testFindSmallest([-99], -98); // -98 => 1
	testFindSmallest([0], 1); // 1
	testFindSmallest([-1], 0); // 0 => 1

	test([1, 3, 6, 4, 1, 2], 5); // 5
	test([1, 2, 3], 4); // 4
	test([-1, -3], 1); // -2 => 1
	test([-1, -3, -2], 1); // 0 => 1
	test([-1, -3, -2, 0], 1); // 1
	test([-1, -3, -2, 0, 1], 2); // 2
	test([-1, -3, -2, 1], 2); // 0 => 2
	test([10, 9, -2, -71], 1); // -70 => 1
	test([-99], 1); // -98 => 1
	test([0], 1); // 1
	test([-1], 1); // 0 => 1
	test([-1, 0, 0, -1], 1); // 0 => 1
	test([1], 2); // 2
}

function testFindSmallest(A, expected) {
	const actual = findSmallest(A);
	if (actual !== expected) {
		console.log(
			"testFindSmallest",
			"A:",
			A.length > 10 ? "... " + A.slice(A.length - 10, A.length) : A,
			"actual:",
			actual,
			"expected:",
			expected
		);
	}
}

function test(A, expected) {
	const actual1 = solutionA(A);
	if (actual1 !== expected) {
		console.log(
			"SOLUTION 1",
			"A:",
			A.length > 10 ? "... " + A.slice(A.length - 10, A.length) : A,
			"actual:",
			actual1,
			"expected:",
			expected
		);
	}

	const actual2 = solutionB(A);
	if (actual2 !== expected) {
		console.log(
			"SOLUTION 2",
			"A:",
			A.length > 10 ? "... " + A.slice(A.length - 10, A.length) : A,
			"actual:",
			actual2,
			"expected:",
			expected
		);
	}

	const actual3 = solutionC(A);
	if (actual3 !== expected) {
		console.log(
			"SOLUTION 3",
			"A:",
			A.length > 10 ? "... " + A.slice(A.length - 10, A.length) : A,
			"actual:",
			actual3,
			"expected:",
			expected
		);
	}
}
