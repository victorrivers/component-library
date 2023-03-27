function oddOccurrencesInArray(A) {
	const result = {};
	let index = 0;
	while (index < A.length) {
		const value = result[A[index]];
		if (value === undefined) {
			result[A[index]] = 1;
		} else {
			result[A[index]] = value + 1;
		}
		index++;
	}

	const found = Object.keys(result).find((key) => {
		return result[key] % 2 === 1;
	});

	if (found) {
		return parseInt(found);
	}
	return -1;
}

function tests() {
	test([2], 2);
	test([9], 9);
	test([2, 8, 2], 8);
	test([4, 8, 4, 8, 4, 8, 4, 4, 4, 4, 48, 8, 8, 8, 8, 8, 8, 8, 4], 48);
	let array = new Array(999999);
	for (let i = 0; i < array.length; i++) {
		array[i] = (i % 4) + (1 * 999999) / 3;
	}
	array = [...array, array[array.length - 1] + 1, 696969];
	test(array, 696969);
}

tests();

function test(A, expected) {
	const actual = solution(A);
	if (actual !== expected) {
		console.log(
			"TEST FAILED - ",
			"A:",
			A,
			"actual:",
			actual,
			"expected:",
			expected
		);
	}
}
