function solution(A, B, K) {
	if (A === B) {
		if (A % K === 0) {
			return 1;
		}
		return 0;
	}

	if (K > B) {
		return 0;
	}

	let firstDivisible = 0;
	for (let i = A; i <= B; i++) {
		if (i % K === 0) {
			firstDivisible = i;
			break;
		}
	}

	let lastDivisible = 0;
	for (let i = B; i >= A; i--) {
		if (i % K === 0) {
			lastDivisible = i;
			break;
		}
	}
	return (lastDivisible - firstDivisible) / K + 1;
}

export default function test() {
	console.log("KAKA");
	const resutl = solution(1, 2, 3);
	console.log(resutl);
}
