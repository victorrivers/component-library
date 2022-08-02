function solution(A, B, C) {
	const obj = { 0: A, 1: B, 2: C };
	const result = {};

	let min = Math.min(A, B, C);
	let max = 1073741823;
	for (let i = 0; i < 3; i++) {
		for (let j = min; j <= max; j++) {
			if ((j & obj[i]) === obj[i]) {
				result[j] = true;
			}
		}
	}
	return Object.keys(result).length;
}

export default function tests() {
	// solution(16244239, 13032961, 0);
	// solution(819399173, 9843471, 0);
	solution(1073741727, 1073741631, 1073741679);
}

/*
For example, for integers:

A = 11 1111 1111 1111 1111 1111 1001 1111(BIN) = 1,073,741,727,
B = 11 1111 1111 1111 1111 1111 0011 1111(BIN) = 1,073,741,631, and
C = 11 1111 1111 1111 1111 1111 0110 1111(BIN) = 1,073,741,679,
the function should return 8, since there are 8 unsigned 30-bit integers conforming to A, B or C, namely:

11 1111 1111 1111 1111 1111 0011 1111(BIN) = 1,073,741,631,
11 1111 1111 1111 1111 1111 0110 1111(BIN) = 1,073,741,679,
11 1111 1111 1111 1111 1111 0111 1111(BIN) = 1,073,741,695,
11 1111 1111 1111 1111 1111 1001 1111(BIN) = 1,073,741,727,
11 1111 1111 1111 1111 1111 1011 1111(BIN) = 1,073,741,759,
11 1111 1111 1111 1111 1111 1101 1111(BIN) = 1,073,741,791,
11 1111 1111 1111 1111 1111 1110 1111(BIN) = 1,073,741,807,
11 1111 1111 1111 1111 1111 1111 1111(BIN) = 1,073,741,823.
 */
