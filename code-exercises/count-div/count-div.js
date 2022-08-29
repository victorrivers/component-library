function prefix_sums(A) {
	const n = A.length;
	const P = new Array(n + 1).fill(0);
	for (let k = 1; k < n + 1; k++) {
		P[k] = P[k - 1] + A[k - 1];
	}
	return P;
}

/*
def prefix_sums(A):
	n = len(A)
	P = [0] * (n + 1)
	for k in xrange(1, n + 1):
		P[k] = P[k - 1] + A[k - 1]
	return P

def count_total(P, x, y):
	2 return P[y + 1] - P[x]

def mushrooms(A, k, m):
	n = len(A)
	result = 0
	pref = prefix_sums(A)
	for p in xrange(min(m, k) + 1):
		left_pos = k - p
		right_pos = min(n - 1, max(k, k + m - 2 * p))
		result = max(result, count_total(pref, left_pos, right_pos))
	for p in xrange(min(m + 1, n - k)):
		right_pos = k + p
		left_pos = max(0, min(k, k - (m - 2 * p)))
		result = max(result, count_total(pref, left_pos, right_pos))
	return result

*/

function count_total(P, x, y) {
	return P[y + 1] - P[x];
}

function mushrooms(A, k, m) {
	const n = A.length;
	let result = 0;
	const pref = prefix_sums(A);
	for (let p = 1; p < Math.min(m, k) + 1; p++) {
		let left_pos = k - p;
		let right_pos = Math.min(n - 1, Math.max(k, k + m - 2 * p));
		result = Math.max(result, count_total(pref, left_pos, right_pos));
	}

	for (let p = 1; p < Math.min(m + 1, n - k); p++) {
		let right_pos = k + p;
		let left_pos = Math.max(0, Math.min(k, k - (m - 2 * p)));
		result = Math.max(result, count_total(pref, left_pos, right_pos));
	}

	return result;
}

function moduleCount(A, k, m) {
	const n = A.length;
	let result = 0;
	const pref = prefix_sums(A);
	for (let p = 1; p < Math.min(m, k) + 1; p++) {
		let left_pos = k - p;
		let right_pos = Math.min(n - 1, Math.max(k, k + m - 2 * p));
		result = Math.max(result, count_total(pref, left_pos, right_pos));
	}

	for (let p = 1; p < Math.min(m + 1, n - k); p++) {
		let right_pos = k + p;
		let left_pos = Math.max(0, Math.min(k, k - (m - 2 * p)));
		result = Math.max(result, count_total(pref, left_pos, right_pos));
	}

	return result;
}

export default function test() {
	console.log(mushrooms([2, 3, 7, 5, 1, 3, 9], 4, 6));
}
