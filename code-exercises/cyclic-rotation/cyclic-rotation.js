export default function cyclicRotation(A, K) {
	if (K === 0) {
		return A;
	}

	let index = 0;
	const result = [...A];
	while (K !== index) {
		[...result].forEach((val, index) => {
			const needle = index + 1;
			if (needle >= A.length) {
				result[0] = val;
			} else {
				result[needle] = val;
			}
		});
		index++;
	}
	return result;
}

function tests() {
	test([], 0, []);
	test([], 1, []);
	test([], 2, []);
	test([], 99, []);
	test([1], 0, [1]);
	test([1], 1, [1]);
	test([1], 2, [1]);
	test([1], 3, [1]);
	test([1], 77, [1]);
	test([1, 2], 0, [1, 2]);
	test([1, 2], 1, [2, 1]);
	test([1, 2], 2, [1, 2]);
	test([1, 2], 3, [2, 1]);
	test([1, 2], 77, [2, 1]);
	test([1, 2, 3], 0, [1, 2, 3]);
	test([1, 2, 3], 1, [3, 1, 2]);
	test([1, 2, 3], 2, [2, 3, 1]);
	test([1, 2, 3], 3, [1, 2, 3]);
	test([1, 2, 3], 75, [1, 2, 3]);
	test([1, 2, 3], 76, [3, 1, 2]);
	test([1, 2, 3], 77, [2, 3, 1]);
}
tests();

function test(A, K, expected) {
	const actual = cyclicRotation(A, K);
	if (!arrayEquals(actual, expected)) {
		console.log(
			"NOT EQUAL",
			"A",
			A,
			"K",
			K,
			"actual",
			actual,
			"expected",
			expected
		);
	}
}

function arrayEquals(a, b) {
	return (
		Array.isArray(a) &&
		Array.isArray(b) &&
		a.length === b.length &&
		a.every((val, index) => val === b[index])
	);
}
