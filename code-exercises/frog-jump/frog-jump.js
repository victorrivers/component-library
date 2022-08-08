function solutionA(X, Y, D) {
	if (X === Y) {
		return 0;
	}
	let position = 0;
	let jumps = 0;
	while (position < Y) {
		jumps++;
		position = jumps * D + X;
	}
	return jumps;
}

function solutionB(X, Y, D) {
	if (X === Y) {
		return 0;
	}
	const delta = X < Y ? Y - X : Y;
	return Math.ceil(delta / D);
}

export default function tests() {
	test(10, 85, 30, 3);
	test(1000000, 1000000, 1000000, 0);
	test(1, 1, 1000000, 0);
	test(1, 1000000, 1, 999999);
	test(1, 1000000, 2, 500000);
	test(1, 1000000, 3, 333333);
}

function test(X, Y, D, expected) {
	console.time("PERFORMANCE A");
	console.log(`X: ${X}, Y: ${Y}, D: ${D}`);
	const actual1 = solutionA(X, Y, D);
	if (actual1 !== expected) {
		console.log(
			`SOLUTION A FAILED - Actual: ${actual1}, Expected: ${expected}`
		);
	}
	console.timeEnd("PERFORMANCE A");

	console.time("PERFORMANCE B");
	console.log(`X: ${X}, Y: ${Y}, D: ${D}`);
	const actual2 = solutionB(X, Y, D);
	if (actual2 !== expected) {
		console.log(
			`SOLUTION B FAILED - Actual: ${actual2}, Expected: ${expected}`
		);
	}
	console.timeEnd("PERFORMANCE B");
}
