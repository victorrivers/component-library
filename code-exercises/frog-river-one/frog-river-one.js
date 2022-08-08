function solution(X, A) {
	const obj = {};
	let sum = 0;

	let index = 1;
	while (index <= X) {
		sum = sum + index;
		index++;
	}

	let position = 0;
	for (let index = 0; index < A.length; index++) {
		const value = A[index];
		if (obj[value] === undefined) {
			obj[value] = true;
			position = position + value;
			if (position >= sum) {
				return index;
			}
		}
	}

	return -1;
}

// 1301.809ms => N = 10000 items
// (() => {

//     test(5, [1, 3, 1, 4, 2, 3, 5, 4], 6);
//     test(4, [4, 3, 2, 2, 2, 3, 1, 4], 6);
//     test(9, [9, 8, 7, 6, 5, 4, 3, 2, 1], 8);
//     test(1, [1], 0);
//     test(8, [1, 2, 3, 4, 5, 7, 7, 7, 7, 7, 6, 8, 9, 10], 11);

//     let index = 0;
//     const A = [];
//     while (index < 100000) {
//         index++;
//         A.push(index)
//     }
//     console.time("P");
//     const result = solution(99999, A);
//     console.timeEnd("P");
//     console.log("Solution =", result, "Items", A.length);
// })();

// function test(X, A, expected) {
//     console.time("P");
//     const result = solution(X, A);
//     console.timeEnd("P");
//     if (result !== expected) {
//         console.log("FAILED", result, "expected", expected)
//     }
//     console.log("Solution X =", result, A);
// }

/*
(5, [1, 3, 1, 4, 2, 3, 5, 4])
(4, [4, 3, 2, 2, 2, 3, 1, 4])
(9, [9, 8, 7, 6, 5, 4, 3, 2, 1])
(1, [1])
(8, [1, 2, 3, 4, 5, 7, 7, 7, 7, 7, 6, 8, 9, 10])
*/
