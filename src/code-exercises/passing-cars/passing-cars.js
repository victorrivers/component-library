function solution(A) {
	let result = 0;
	let onesCount = 0;
	let index = A.length - 1;
	while (index >= 0) {
		const element = A[index];
		if (element === 1) {
			onesCount = onesCount + 1;
		} else {
			result = result + onesCount;
			if (result > 1000000000) {
				return -1;
			}
		}
		index--;
	}
	return result;
}

export default function tests() {
	test("N=1", [0], 0);
	test("N=1", [1], 0);
	test("N=2", [0, 1], 1);
	test("N=2", [1, 0], 0);
	test("N=3", [0, 0, 1], 2);
	test("N=3", [1, 0, 1], 1);
	test("N=3", [0, 0, 0], 0);
	test("N=3", [1, 1, 1], 0);
	test("N=3", [1, 1, 0], 0);
	test("N=4", [1, 1, 1, 0], 0);
	test("N=4", [0, 1, 0, 1], 3);
	test("N=4", [1, 0, 1, 0], 1);
	test("N=4", [0, 0, 0, 1], 3);
	test("N=4", [0, 0, 1, 1], 4);
	test(
		"N=100,000",
		new Array(100000).fill(0).map((x, i) => (i % 2 === 0 ? 0 : 1)),
		-1
	);
}

function test(title, A, expected) {
	console.log("-----------------------------");
	console.log(`TEST ${title}, A length=${A.length}`);
	console.time("P");
	const actual = solution(A);
	console.timeEnd("P");
	console.log(`RESULTS: Actual=${actual}, Expected=${expected}`);

	if (actual !== expected) {
		console.log("FAILED");
	}
}
