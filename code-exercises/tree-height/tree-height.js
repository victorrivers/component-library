function solution(T) {
	const counter = { i: 0 };
	traverse([T], counter);
	return counter.i;
}

function traverse(a, counter) {
	const b = [];
	for (let index = 0; index < a.length; index++) {
		const T = a[index];
		if (T.l) {
			b.push(T.l);
		} if (T.r) {
			b.push(T.r);
		}
	}
	if (b.length) {
		counter.i++;
		console.log("k", b, counter);
		traverse(b, counter);
	}
}

function test(T, expected) {
	console.log("T=", T);
	console.time("PERF =>");
	const actual = solution(T);
	if (actual !== expected) {
		return console.log(
			`TEST FAILED. Actual: ${actual} - Expected: ${expected}`
		);
	}
	console.timeEnd("PERF =>");
}

export default function tests() {
	const T = {
		x: 5,
		l: { x: 3, l: { x: 20, l: null, r: null }, r: { x: 21, l: null, r: null } },
		r: { x: 10, l: { x: 1, l: null, r: null }, r: null },
	};

	test(T, 2);
}
