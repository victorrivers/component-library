function solution(N, A) {
	let obj = {};

	let max = 0;
	A.forEach((op) => {
		if (op === N + 1) {
			obj = {};
			obj[-1] = max;
		} else {
			let value = 1;
			if (obj[op - 1] !== undefined) {
				value = obj[op - 1] + 1;
			} else if (obj[-1] !== undefined) {
				value = obj[-1] + 1;
			}
			max = Math.max(max, value);
			obj[op - 1] = value;
		}
	});

	const counters = [];
	for (let index = 0; index < N; index++) {
		const value =
			obj[index] !== undefined
				? obj[index]
				: obj[-1] !== undefined
				? obj[-1]
				: 0;
		counters.push(value);
	}
	return counters;
}

export default function test() {
	//Perf: 0.385ms
	// const actual = solution(5, [3, 4, 4, 6, 1, 4, 4]);
	// console.log(actual)
	const N = 100000;
	const M = 100000 + 1;
	//const A = new Array(M).fill(0).map(k => getRandomIntInclusive(1, 2));
	//const A = new Array(M).fill(M);
	console.time("Perf");
	//const actual = solution(N, A);
	const actual = solution(5, [1, 1, 1, 1, 1, 1, 1]);
	console.log(actual);
	console.timeEnd("Perf");
}

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function slowSolution(N, A) {
	let counters = new Array(N);
	let max = 0;
	A.forEach((op) => {
		if (op === N + 1) {
			counters = new Array(N).fill(max);
		} else {
			const value = (counters[op - 1] || 0) + 1;
			max = Math.max(max, value);
			counters[op - 1] = value;
		}
	});
	return counters;
}
