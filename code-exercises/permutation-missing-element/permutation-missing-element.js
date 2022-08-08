function solution(A) {
	let sum = 0;
	for (let index = 0; index < A.length; index++) {
		sum = sum + A[index];
	}
	const total = ((A.length + 1) * (A.length + 2)) / 2;
	return total - sum;
}

function test() {
	const array = [];
	for (let index = 0; index < 99999; index++) {
		if (index < 8000) {
			array.push(index + 1);
		} else {
			array.push(index + 2);
		}
	}

	console.time("PERF");
	const result = solution(array);
	console.timeEnd("PERF");

	console.log(
		"result",
		result,
		array.slice(7999, 8002),
		"...",
		array[array.length - 1],
		array.length
	);
}
