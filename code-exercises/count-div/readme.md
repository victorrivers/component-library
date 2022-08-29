# CountDiv

## Task description

---

Compute number of integers divisible by k in range [a..b].

Write a function:

    function solution(A, B, K);

that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

    { i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Write an efficient algorithm for the following assumptions:

    A and B are integers within the range [0..2,000,000,000];
    K is an integer within the range [1..2,000,000,000];
    A ≤ B.

    def prefix_sums(A):
    	n = len(A)
    	P = [0] * (n + 1)
    	for k in xrange(1, n + 1):
    	P[k] = P[k - 1] + A[k - 1]
    	return P

    def count_total(P, x, y):
    	return P[y + 1] - P[x]

    def mushrooms(A, k, m):
    	n = len(A)
    	result = 0
    	pref = prefix_sums(A)
    	for p in xrange(min(m, k) + 1):
    		left_pos = k - p
    		right_pos = min(n - 1, max(k, k + m - 2 _ p))
    		result = max(result, count_total(pref, left_pos, right_pos))
    	for p in xrange(min(m + 1, n - k)):
    		right_pos = k + p
    		left_pos = max(0, min(k, k - (m - 2 _ p)))
    		result = max(result, count_total(pref, left_pos, right_pos))
    	return result
