/**
 * Computes the greatest common divisor (GCD) of two integers using the Extended Euclidean Algorithm.
 * Also finds coefficients `x` and `y` such that `a*x + b*y = gcd(a, b)`.
 * 
 * @param {bigint} a - The first integer.
 * @param {bigint} b - The second integer.
 * @returns {{ gcd: bigint, x: bigint, y: bigint }} An object containing the GCD and the coefficients `x` and `y`.
 * 
 * @example
 * const result = extendedGCD(120n, 23n);
 * console.log(result); // { gcd: 1n, x: -9n, y: 47n }
 */
function extendedGCD(a, b) {
    let x0 = 1n, x1 = 0n;
    let y0 = 0n, y1 = 1n;

    while (b !== 0n) {
        const q = a / b;
        [a, b] = [b, a % b];
        [x0, x1] = [x1, x0 - q * x1];
        [y0, y1] = [y1, y0 - q * y1];
    }

    return { gcd: a, x: x0, y: y0 };
}