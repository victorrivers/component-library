function solution(S) {
	if (S.length === 0) {
		return -1;
	} else if (S.length === 1) {
		return 0;
	} else if (S.length % 2 === 0) {
		return -1;
	}

	for (let index = 0; index < S.length; index++) {

		const i = index;
		const j = S.length - 1 - index;

		const left = S[i];
		const right = S[j];

		if (left !== right) {
			return -1;
		} else if (i === j) {
			return i;
		}
	}
	return -1;
}

export default function tests() {
	test("racecar", 3);
	test("x", 0);
	test("", -1);
	test("ab", -1);
	test("yuy", 1);
	test("ddffgghhjjkkllrllkkjjhhggffdd", 14);
	test("ddffgghhjjkkllllkkjjhhggffdd", -1);
	test("1234567890lkm0987654321", -1);
	test("xx", -1);
	let largeS = "a";
	let count = 0;
	while (count < 2000000) {
		largeS += "a";
		count++;
	}
	test(largeS, 1000000);

	largeS = "";
	count = 0;
	while (count < 1999979) {
		if (count === 999989) {
			largeS += "x";
		} else {
			largeS += "t";
		}
		count++;
	}
	test(largeS, 999989)
}

function test(S, expected) {
	console.time("PERF => ");
	const actual = solution(S);
	console.timeEnd("PERF => ");
	if (actual !== expected) {
		console.log(`TEST FAILED. Expected = ${expected}, Actual = ${actual}. S=${S}`);
	}
}
