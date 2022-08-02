# CountConformingBitmasks

## Count 30-bit bitmasks conforming to at least one of three given 30-bit bitmasks.

---

In this problem we consider unsigned 30-bit integers, i.e. all integers B such that 0 ≤ B < 230.

We say that integer A conforms to integer B if, in all positions where B has bits set to 1, A has corresponding bits set to 1.

For example:

    00 0000 1111 0111 1101 1110 0000 1111(BIN) = 16,244,239 conforms to
    00 0000 1100 0110 1101 1110 0000 0001(BIN) = 13,032,961, but
    11 0000 1101 0111 0000 1010 0000 0101(BIN) = 819,399,173 does not conform to
    00 0000 1001 0110 0011 0011 0000 1111(BIN) = 9,843,471.

Write a function:

    function solution(A, B, C);

that, given three unsigned 30-bit integers A, B and C, returns the number of unsigned 30-bit integers conforming to at least one of the given integers.

For example, for integers:

    A = 11 1111 1111 1111 1111 1111 1001 1111(BIN) = 1,073,741,727,
    B = 11 1111 1111 1111 1111 1111 0011 1111(BIN) = 1,073,741,631, and
    C = 11 1111 1111 1111 1111 1111 0110
