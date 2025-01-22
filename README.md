# Extended Euclidean Algorithm

## Overview

The Extended Euclidean Algorithm extends the basic Euclidean algorithm for computing the greatest common divisor (GCD) of two integers. Beyond finding the GCD, it computes coefficients \(x\) and \(y\) such that:

\[ a \cdot x + b \cdot y = \text{gcd}(a, b) \]

This property is useful in solving linear Diophantine equations and finding modular inverses.

---

## How It Works

The algorithm repeatedly divides the larger number by the smaller one, replacing the larger number with the remainder until the remainder is zero. The Extended version tracks the coefficients \(x\) and \(y\) at each step.

---

## Usage

### Function Signature
```javascript
function extendedGCD(a, b) {
    // Implementation
}
