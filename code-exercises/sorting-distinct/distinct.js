function solution(A) {
  const obj = {};
  A.forEach((element) => {
    obj[element] = true;
  });

  return Object.keys(obj).length;
}

export default function tests() {
  test([2, 1, 1, 2, 3, 1], 3);
  test(
    new Array(1000).fill(0).map((_, i) => i * 2),
    1000
  );
  test(
    new Array(1000).fill(0).map((_, i) => i % 33),
    33
  );
}

function test(A, expected) {
  console.time("PERF => ");
  const actual = solution(A);
  console.timeEnd("PERF => ");
  if (actual !== expected) {
    console.log(
      `TEST FAILED: A = [${
        A.length > 10
          ? A.slice(0, 5) + ", ... , " + A.slice(A.length - 5, A.length)
          : A
      }]`
    );
    console.log(`Expected = ${expected}, Actual = ${actual}`);
  }
}
