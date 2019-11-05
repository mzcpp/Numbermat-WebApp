/**
 * Static methods for computations and math problem solving.
 *
 * @author Valdemar Svabensky - Original code in Java. <395868(at)mail(dot)muni(dot)cz>
 * @author Mario Zak - Rewritten and modified code in JavaScript. <441270(at)mail(dot)muni(dot)cz>
 */

class Algorithms {

  constructor() {
    throw new Error("This class should not be instantiated!");
  }

  /**
  * Throws exception if a == 0.
  *
  * @param {Number} a Integer
  */
  static notZeroCheck(a) {
    if (a == 0) {
      throw new Error("Expecting non-zero argument.");
    }
  }

  /**
  * Throws exception if a is not prime.
  *
  * @param {Number} a Integer
  * @param {Boolean} odd Should 'a' be odd?
  */
  static isPrimeCheck(a, odd) {
    if ((odd) && (a === 2)) {
      throw new Error(a + " is not an odd prime.");
    }
    if (!this.isPrime(a)) {
      throw new Error(a + " is not a prime.");
    }
  }

  /**
  * Throws exception if a < lowerBound.
  *
  * @param {Number} a Integer
  * @param {Number} lowerBound Integer
  */
  static notLessThanCheck(a, lowerBound) {
    if (a < lowerBound) {
      throw new RangeError("Input argument " + a + " should not be smaller than " + lowerBound);
    }
  }

  /**
  * Throws exception if a > upperBound.
  *
  * @param {Number} a Integer
  * @param {Number} upperBound Integer
  */
  static notGreaterThanCheck(a, upperBound) {
    if (a > upperBound) {
      throw new RangeError("Input argument " + a + " should not be greater than " + upperBound);
    }
  }

  /**
  * Throws exception if a, b are not coprime.
  *
  * @param {Number} a Integer
  * @param {Number} b Integer
  */
  static isCoprimeCheck(a, b) {
    if (!this.isCoprime(a, b)) {
      throw new Error(a + ", " + b + " are not coprime.");
    }
  }

  /**
  * Throws exception if the input array is not a permutation.
  *
  * @param {Array} perm Array of integers
  */
  static permutationCheck(perm) {
    let permCopy = [...perm];
    permCopy.sort(function(a, b) {return a - b});
    for (let i = 0; i < permCopy.length; ++i) {
      if (permCopy[i] !== i + 1) {
        throw new Error(perm + " is not a permutation.");
      }
    }
  }

  /**
  * Throws exception if a < 1.
  *
  * @param {Number} a Integer
  */
  static positiveCheck(a) {
    this.notLessThanCheck(a, 1);
  }

  /**
  * Throws exception if a is negative.
  *
  * @param {Number} a Integer
  */
  static notNegativeCheck(a) {
    this.notLessThanCheck(a, 0);
  }

  /**
  * Throws exception if the input array is not a permutation.
  *
  * @param {Number} count Non negative integer
  * @param {Array} inputList array of integers
  */
  static listCheck(count, inputList) {
    this.notNegativeCheck(count);
    let inputListSize = inputList.length;
    if (inputListSize !== count) {
      throw new Error("inputList size: " + inputListSize + ", expected: " + count);
    }
  }

  /**
  * Throws exception if the difference between max and min is Number.MAX_SAFE_INTEGER or more.
  *
  * @param {Number} min Integer
  * @param {Number} max Integer >= min
  */
  static overflowCheck(min, max) {
    this.notLessThanCheck(max, min);
    let result = max - min;
    if (result >= Number.MAX_SAFE_INTEGER) {
        throw new RangeError("Overflow occured!");
    } else if (result <= Number.MIN_SAFE_INTEGER) {
        throw new RangeError("Underflow occured!");
    }
  }

  /**
  * @param {Number} n Integer
  * @return {Boolean} Is 'n' prime?
  */
  static isPrime(n) {
    if (n < 2) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;

    for (let i = 3; i <= Math.sqrt(n) + 1; i += 2) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
  }

  /**
  * @param {Number} a Integer
  * @param {Number} b Integer
  * @return {Boolean} Are 'a', 'b' coprime integers?
  */
  static isCoprime(a, b) {
    return this.gcd(a, b) == 1;
  }

  /**
  * @param {Number} n Integer
  * @return {Boolean} Is 'n' a power of 2?
  */
  static isPowerOf2(n) {
    return (n != 0) && ((n & (n - 1)) == 0);
  }

  /**
  * @param {Number} n Integer
  * @return {Boolean} Is 'n' a power of 4?
  */
  static isPowerOf4(n) {
    return (this.isPowerOf2(n)) && ((this.getNumberOfBits(n) % 2) == 1);
  }

  /**
  * Euclidean algorithm for finding the greatest common divisor of two integers.
  *
  * @param {Number} a Integer
  * @param {Number} b Integer
  * @return {Number} gcd(a, b)
  */
  static gcd(a, b) {
    if (a < 0) return this.gcd(-a, b);
    if (b < 0) return this.gcd(a, -b);
    if (a < b) return this.gcd(b, a);

    while (b > 0) {
        var r = a % b;
        a = b;
        b = r;
    }
    return a;
  }

  /**
  * Generates a pseudo-random integer between 'min' and 'max', inclusive.
  * The difference between min and max can be at most Number.MAX_SAFE_INTEGER - 1.
  *
  * @param {Number} min Minimum value
  * @param {Number} max Maximum value >= min
  * @param {Boolean} zero Is zero allowed?
  * @return Integer in range [min, max]
  */
  static randIntZero(min, max, zero) {
    this.notLessThanCheck(max, min);
    this.overflowCheck(min, max);

    if (min == 0 && max == 0 && !zero) {
      throw new RangeError("Bounds allow to generate only 0, but it was not allowed.");
    }
    let n = Math.floor(Math.random() * (max - min + 1)) + min;

    if (!zero) {
      while (n == 0) {
        n = Math.floor(Math.random() * (max - min + 1)) + min
      }
    }
    return n;
  }

  /**
  * Generates a pseudo-random integer between 'min' and 'max', inclusive.
  * The difference between min and max can be at most Number.MAX_SAFE_INTEGER - 1.
  *
  * @param {Number} min Minimum value
  * @param {Number} max Maximum value >= min
  * @return Integer in range [min, max]
  */
  static randInt(min, max) {
    return this.randIntZero(min, max, true);
  }

  /**
  * Generates a pseudo-random prime between 'min' and 'max', inclusive.
  * The difference between min and max can be at most Number.MAX_SAFE_INTEGER - 1.
  *
  * @param {Number} min Minimum value. Non-negative integer.
  * @param {Number} max Maximum value >= min. Cannot be smaller than 2.
  * @return Prime in range [min, max]
  */
  static randPrime(min, max) {
    this.notNegativeCheck(min);
    this.notLessThanCheck(max, 2);
    this.notLessThanCheck(max, min);
    this.overflowCheck(min, max);

    var flag = 0;
    let result = []

    for (let i = min; i < max + 1; ++i) {
      if (i === 1) {
        continue;
      }
      flag = 1;
      for (let j = 2; j < Math.floor((i / 2) + 1); ++j) {
        if (i % j == 0) {
          flag = 0
          break;
        }
      }
      if (flag == 1) {
        result.push(i);
      }
    }
    return result[this.randInt(0, result.length - 1)];
  }

  /**
  * Generates a pseudo-random prime between 'min' and 'max', inclusive.
  * The difference between min and max can be at most Number.MAX_SAFE_INTEGER - 1.
  *
  * @param {Number} min Minimum value. Non-negative integer.
  * @param {Number} max Maximum value >= min. Cannot be smaller than 2.
  * @param {Boolean} odd Generate only odd primes
  * @return Prime in range [min, max]
  */
  static randPrimeOdd(min, max, odd) {
    var n;
    for (let i = 0; i < this.FOR_LOOP_ATTEMPTS; ++i) {
      n = this.randPrime(min, max);
      if (!odd || n != 2) {
        return n;
      }
    }
    throw new Error("Unable to generate a prime in range [" + min + ", " + max + "].");
  }

  /**
  * @param {Number} n Integer
  * @return {Number} Number of bits needed to express 'n' in binary
  */
  static getNumberOfBits(n) {
    if (n == 0) return 1;
    if (n < 0) return 1 + this.getNumberOfBits(-n);
    return 32 - this.numberOfLeadingZeros(n);
  }

  /**
  * Returns the number of zero bits preceding the highest-order
  * ("leftmost") one-bit in the two's complement binary representation
  * of the specified value. Returns 32 if the specified value has no one-bits in
  * its two's complement representation, in other words if it is equal to zero.
  *
  * @param {Number} n Integer
  * @return {Number} Number of bits needed to express 'n' in binary
  */
  static numberOfLeadingZeros(i) {
    if (i == 0) return 32;
    let n = 1;
    if (i >>> 16 == 0) n += 16; i <<= 16;
    if (i >>> 24 == 0) n +=  8; i <<=  8;
    if (i >>> 28 == 0) n +=  4; i <<=  4;
    if (i >>> 30 == 0) n +=  2; i <<=  2;
    n -= i >>> 31;
    return n;
  }

  /**
  * Least common multiple of two positive integers.
  *
  * @param {Number} a Positive integer
  * @param {Number} b Positive integer
  * @return lcm(a, b)
  */
  static lcm(a, b) {
    this.positiveCheck(a);
    this.positiveCheck(b);
    return Math.floor(a * b / this.gcd(a, b));
  }

  /**
  * Extended Euclidean algorithm for solving Bezout's identity.
  * This algorithm is also useful for finding multiplicative inverses mod n.
  *
  * @param {Number} a Non-negative integer, a >= b
  * @param {Number} b Non-negative integer
  * @return Array [d, x, y] where d = gcd(a, b) and x, y such that ax + by = d
  */
  static bezout(a, b) {
    this.notNegativeCheck(a);
    this.notNegativeCheck(b);
    this.notLessThanCheck(a, b);
    if (b == 0) {
      return [a, 1, 0];
    }
    let x, y, q, r;
    let x1 = 0;
    let x2 = 1;
    let y1 = 1;
    let y2 = 0;
    while (b > 0) {
      q = Math.floor(a / b);
      r = Math.floor(a - q * b);
      x = Math.floor(x2 - q * x1);
      y = Math.floor(y2 - q * y1);
      a = b;
      b = r;
      x2 = x1;
      x1 = x;
      y2 = y1;
      y1 = y;
    }
    return [a, x2, y2];
  }

  static replace(start, end, string, replacement) {
    if (start > end) throw new Error("start > end");
    if (start > string.length) throw new Error("start > length");

    let string1 = "";
    let string2 = "";

    for (let i = 0; i < start; ++i) {
      string1 += string[i];
    }

    for (let j = end; j < string.length; ++j) {
      string2 += string[j];
    }
    return string1 + replacement + string2;
  }

  /**
  * @param {Number} n Positive integer
  * @return Array of all positive divisors of 'n' in ascending order
  */
  static divisors(n) {
    this.notZeroCheck(n);
    if (n < 0) {
      return this.divisors(-n);
    }

    let divisors = [];
    divisors.push(1);
    if (n == 1) {
        return divisors;
    }

    if (!this.isPrime(n)) {
      let i = 2;
      let increment = 1;
      if (n % 2 === 1) {
        i = 3;
        increment = 2; // test odd ones only
      }
      for (; i <= Math.floor(n / 2); i += increment) {
        if (n % i == 0) {
          divisors.push(" " + i);
        }
      }
    }
    divisors.push(" " + n);
    return divisors;
  }

  /**
  * @param {Number} a Non-zero integer
  * @param {Number} b Non-zero integer
  * @return Array of all positive divisors of both a and b in ascending order
  */
  static commonDivisors(a, b) {
    this.notZeroCheck(a);
    this.notZeroCheck(b);
    return this.listIntersection(this.divisors(a), this.divisors(b));
  }

  /**
  * @param {Array} l1 Array of elements
  * @param {Array} l2 Array of elements
  * @return Array of all elements that are both in a and b
  */
  static listIntersection(l1, l2) {
    let list = [];

    for (let elem of l1) {
      if (l2.includes(elem)) {
        list.push(elem);
      }
    }
    return list;
  }

  /**
  * Prime factorization.
  *
  * @param {Number} n Non-negative integer
  * @return Array of pairs (factor, exponent)
  */
  static factorize(n) {
    this.notNegativeCheck(n);
    let factors = [];
    if (n < 4) {
      factors.push([n, 1]);
      return factors;
    }

    for (let i = 2; i <= n; ++i) {
      let factor = [i, 0];
      let factorFound = false;
      while (n % i == 0) {
        factorFound = true;
        factor[1] = factor[1] + 1;
        n = Math.floor(n / i);
      }
      if (factorFound) {
        factors.push(factor);
      }
    }
    return factors;
  }

  /**
  * Euler's totient (phi) function.
  *
  * @param {Number} n Positive integer
  * @return Value of Euler's totient function for n
  */
  static eulerPhi(n) {
    this.positiveCheck(n);
    if (n == 1) {
        return 1;
    }
    let phi = 1;
    let factors = this.factorize(n);
    for (let i = 0; i < factors.length; ++i) {
      let prime = factors[i][0];
      let exponent = factors[i][1];
      phi *= prime - 1;
      phi *= Math.pow(prime, exponent - 1);
    }
    return phi;
  }

  /**
  * Mods 'a' to closest positive integer modulo 'n'. Example: -74 % 5 = -4 % 5 = 1
  *
  * @param {Number} a Integer
  * @param {Number} n Positive integer
  * @return a % n, smallest possible positive solution
  */
  static normalizeIntModulo(a, n) {
    this.positiveCheck(n);
    a = a % n;
    return (a < 0 ? (Number(a) + Number(n)) : Number(a));
  }

  /**
  * Solving a congruence ax ≡ b (mod n).
  *
  * @param {Number} a Integer
  * @param {Number} b Integer
  * @param {Number} n Positive integer
  * @return Pair (solution, modulus) OR empty pair if no solutions exist OR pair (0, 1) if infinite solutions exist.
  */
  static linearCongruence(a, b, n) {
    this.positiveCheck(n);
    a = this.normalizeIntModulo(a, n);
    b = this.normalizeIntModulo(b, n);
    if (((a === 0) && (b === 0)) || (n === 1)) {
      return [0, 1];
    }

    let numberOfSolutions = this.gcd(a, n);
    if (b % numberOfSolutions != 0) {
      return [];
    }

    let bezoutCoefficientA;
    if (a > n) {
      bezoutCoefficientA = this.bezout(a, n)[1];
    } else {
      bezoutCoefficientA = this.bezout(n, a)[2];
    }

    let shiftedModulus = Math.floor(n / numberOfSolutions);
    let x = Math.floor((bezoutCoefficientA * b) / numberOfSolutions);
    x = this.normalizeIntModulo(x, shiftedModulus);
    return [x, shiftedModulus];
  }

  /**
  * Solving a congruence ax ≡ b (mod n).
  *
  * @param {Number} count Number of equations, positive integer
  * @param {Array} aInList Array of integers
  * @param {Array} bInList Array of integers
  * @param {Array} nInList Array of integers
  * @return Pair (solution, modulus) OR empty pair if no solutions exist OR pair (0, 1) if infinite solutions exist.
  */
  static linearCongruenceSystem(count, aInList, bInList, nInList) {
    this.positiveCheck(count);
    this.listCheck(count, aInList);
    this.listCheck(count, bInList);
    this.listCheck(count, nInList);
    let aList = [...aInList];
    let bList = [...bInList];
    let nList = [...nInList];
    for (let i = 0; i < count; ++i) {
      let ai = aList[i];
      let bi = bList[i];
      let ni = nList[i];
      this.positiveCheck(ni);
      aList[i] = this.normalizeIntModulo(ai, ni);
      bList[i] = this.normalizeIntModulo(bi, ni);
    }

    let solution = [];
    for (let i = 0; i < count; ++i) {
      let partial = this.linearCongruence(aList[i], bList[i], nList[i]);
      if (partial.length === 0) {
          return [];
      }
      if (arraysEqual(partial, [0, 1])) {
        if ((solution.length === 0) && (lastForCycle(i, count))) {
          return [0, 1];
        }
        continue;
      }
      let partialX = partial[0];
      let partialM = partial[1];
      if (solution.length === 0) {
        solution.push(partialX);
        solution.push(partialM);
      } else {
        solution[0] = solution[0] + solution[1] * partialX;
        solution[1] = solution[1] * partialM;
      }
      if (!lastForCycle(i, count)) {
        bList[i + 1] = bList[i + 1] - (aList[i + 1] * solution[0]);
        aList[i + 1] = aList[i + 1] * solution[1];
      }
    }
    return solution;
  }

  /**
  * @param {Number} n Integer > 1
  * @return Array of elements of unit group Zn^× in ascending order
  */
  static elementsOfUnitGroup(n) {
    this.notLessThanCheck(n, 2);
    let result = [];
    if (this.isPrime(n)) {
      for (let i = 1; i < n; ++i) {
        result.push(i);
      }
    } else {
        for (let i = 1; i < n; ++i) {
          if (this.isCoprime(i, n)) {
            result.push(i);
          }
        }
      }
    return result;
  }

  /**
  * @param {Number} element Positive integer
  * @param {Number} n Integer > 1
  * @return Order of element 'element' in group Zn×
  */
  static unitGroupElementOrder(element, n) {
    this.positiveCheck(element);
    this.notLessThanCheck(n, 2);
    if (element === 1) {
      return 1;
    }

    let unitGroup = this.elementsOfUnitGroup(n);
    if (!unitGroup.includes(element)) {
        throw new Error(element + " is not an element of Z" + n + "×");
    }

    let possibleElementOrders = this.divisors(unitGroup.length);
    for (let i = 0; i < possibleElementOrders.length; ++i) {
      let currentOrder = possibleElementOrders[i];
      if (this.modPow(element, currentOrder, n) == 1) {
        return currentOrder;
      }
    }
    return Number.MAX_SAFE_INTEGER;
  }

  /**
  * Modular exponentiation.
  *
  * @param {Number} base Integer
  * @param {Number} exp Non negative integer
  * @param {Number} mod Positive integer
  * @return (base^exp) mod (mod)
  */
  static modPow(base, exp, mod) {
    this.notNegativeCheck(exp);
    this.positiveCheck(mod);
    base = this.normalizeIntModulo(base, mod);
    if (mod === 1) return 0;
    if (base === 0) return ((exp === 0) ? 1 : 0);
    if ((base === 1) || (exp === 0)) return 1;
    if (base === -1) return ((exp % 2 === 0) ? 1 : -1 + mod);
    if (exp === 1) return base;

    let bigBase = bigInt(base);
    let bigExp = bigInt(exp);
    let bigMod = bigInt(mod);

    return bigBase.modPow(bigExp, bigMod).value;
  }

  /**
  * Computes the Legendre Symbol
  *
  * @param {Number} a Integer
  * @param {Number} p Odd prime
  * @return 1, 0 or -1
  */
  static legendreSymbol(a, p) {
    this.isPrimeCheck(p, true);
    let value = this.modPow(a, (p - 1) / 2, p);
    if (value == p - 1) {
      value = -1;
    }
    return value;
  }

  /**
  * @param {Number} n Integer
  * @return Is given integer a square of another integer?
  */
  static isPerfectSquare(n) {
    if (n < 0) {
      return false;
    }
    let test = Math.floor(Math.sqrt(n));
    return (test * test) === n;
  }

  /**
  * @param {Number} base Integer > 1
  * @param {Number} limit Integer > 1
  * @return The highest power of 'base' smaller than 'limit'
  */
  static findHighestPowerLessThan(base, limit) {
    this.notLessThanCheck(base, 2);
    this.notLessThanCheck(limit, 2);
    let x = 1;
    while ((x * base) < limit) {
      x *= base;
    }
    return x;
  }

  /**
  * @param {Number} start Integer
  * @return The next power of 4 from 'start' or start itself if it is a power of 4
  */
  static findNextHigherPowerOf4(start) {
    if (start < 1) {
      return 1;
    }
    if (this.isPowerOf4(start)) {
      return start;
    }

    return 4 * this.findHighestPowerLessThan(4, start);
  }

  /**
  * Solves the quadratic congruence of form x^2 ≡ a (mod m).
  *
  * @param {Number} a Integer
  * @param {Number} m Positive integer
  * @return Array of solutions in ascending order ending with modulus, e.g. [x1, x2, ..., xn, m]
  */
  static quadraticCongruenceSimple(a, m) {
    this.positiveCheck(m);
    a = this.normalizeIntModulo(a, m);
    if (a === 0) {
      if (this.isPerfectSquare(m)) {
        m = Math.floor(Math.sqrt(m));
      } else if ((this.isPowerOf2(m)) && (m > 2)) {
        m = Math.floor(Math.sqrt(this.findNextHigherPowerOf4(m)));

      } else if ((m % 2 === 0) && (Math.floor((Math.floor(m / 2) * m) / 2) % m === 0)) {
        m = Math.floor(m / 2);
      }
      return [0, m];
    }

    // Handle powers of 2 separately :(
    if (this.isPowerOf2(m)) {
      if (m < 16) {
        if (a < 2) {
          return [a, 2];
        }
        if ((a === 4) && (m === 8)) {
          return [2, 4];
        }
        return [];
      }

      // 0, 1, 4, 9, 16, 17, 25, 32, 33... are quadratic residues mod 2^k
      if (a % 8 === 1) {
        return this.quadraticCongruenceSimpleSolve(a, m);
      }
      if (!this.isPowerOf4(a)) {
        return [];
      }

      m = Math.floor(m / 2);
      let x1 = Math.floor(Math.sqrt(a));
      let limit = this.findHighestPowerLessThan(4, m);
      if (a === limit) {
        m = Math.floor(Math.sqrt(this.findNextHigherPowerOf4(m)));
        return [x1, m];
      }
      if ((a === Math.floor(limit / 4)) && (this.isPowerOf4(m))) {
        m = Math.floor(Math.sqrt(m));
        return [x1, m];
      }

      m = Math.floor(m / 2);
      let result = [];
      this.quadraticCongruenceSimpleFillSolution(result, x1, m);
      result.push(m);
      return result;
    }

    /**
    * Let m = m1 * m2 * ... * mn = p1^e1 * p2^e2 * ... * pn^en.
    * The input congruence is equivalent to system of congruences: x^2 ≡ a (mod p1), x^2 ≡ a (mod p2), ..., x^2 ≡ a (mod pn). (The exponents are negligible, since p^e|a => p|a.)
    * Now each subcongruence must have a solution (=> the corresponding Legendre symbol is 0 or 1).
    */
    let factorization = this.factorize(m);
    for (let i = 0; i < factorization.length; ++i) {
        let pi = factorization[i][0];
        if (pi === 2) {
          continue;
        }
        if (this.legendreSymbol(a, pi) == -1) { // => no solutions to whole system
          return [];
        }
    }

    // Try to find solution with halved modulus
    if (m % 2 === 0) {
      let halfModSolution = true;
      let halfMod = Math.floor(m / 2);
      let test = this.quadraticCongruenceSimpleSolve(a, halfMod);
      for (let i = 0; i < test.length - 1; ++i) {
        let testXi = test[i] + halfMod;
        if (((testXi * testXi) % m) !== a) {
          halfModSolution = false;
          break;
        }
      }
      if (halfModSolution) {
        if (a !== halfMod) {
          return test;
        }
        let result = [];
        for (let i = 0; i < test.length - 1; ++i) {
          let x1 = test[i] + halfMod;
          this.quadraticCongruenceSimpleFillSolution(result, x1, m);
          if (result.length === 2) {
            break;
          }
        }
        if (result.length !== 0) {
          result.sort(function(a, b) {return a - b});
          result.push(m);
        }
        return result;
      }
    }
    return this.quadraticCongruenceSimpleSolve(a, m);
  }

  /**
  * Helper method only for quadraticCongruenceSimple(). Tries to find solution by force.
  */
  static quadraticCongruenceSimpleSolve(a, m) {
    a = this.normalizeIntModulo(a, m);
    let testA = a;
    let testM = m;
    if (this.isPowerOf2(m)) {
        testM = Math.floor(m / 2);
    }
    let result = [];
    for (let i = 0; i < testM; ++i) {
      if (this.isPerfectSquare(testA)) {
        let x1 = Math.floor(Math.sqrt(testA));
        if (this.modPow(x1, 2, m) == a) {
          this.quadraticCongruenceSimpleFillSolution(result, x1, testM);
        }
        if (result.length == 4) {
          break;
        }
      }
      testA += testM;
      if (testA >= 2147483648) {
        testA = -2147483648 + (testA - 2147483648);
      }
    }

    if (result.length !== 0) {
      result.sort(function(a, b) {return a - b});
      result.push(testM);
      if ((result.length === 5) && (m % 2 === 0)) { // 5 = 4 + 1 for mod
        return this.binomialCongruenceRuleOut(result);
      }
    }
    return result;
  }

  /**
  * Helper method only for quadraticCongruenceSimple(). Fills the input collection with results.
  */
  static quadraticCongruenceSimpleFillSolution(result, x1, m) {
    let x2 = this.normalizeIntModulo(-x1, m);
    if (!result.includes(x1)) {
      result.push(x1);
    }
    if (!result.includes(x2)) {
      result.push(x2);
    }
  }

  /**
  * Helper method for quadraticCongruenceSimpleSolve() and binomialCongruence(). Rules out equivalent solutions for even modulus.
  */
  static binomialCongruenceRuleOut(result) {
    if (result.length === 0) {
        return result;
    }

    let resultSize = result.length;
    let m = result[resultSize - 1]; // last item is modulus
    if (m % 2 === 1) {
      return result;
    }

    let testM = Math.floor(m / 2);
    let x1 = this.normalizeIntModulo(result[0], testM); // first solution
    let testResult = [x1];
    for (let i = 1; i < resultSize - 1; ++i) {
      let xi = this.normalizeIntModulo(result[i], testM);
      let terminator = testResult.length;
      for (let j = 0; j < terminator; ++j) {
        if (xi === testResult[j]) {
          break;
        }
        if (lastForCycle(j, terminator)) {
          testResult.push(xi);
        }
      }
    }
    if (testResult.length < resultSize - 1) {
      testResult.push(testM);
      return testResult;
    }
    return result;
  }

  /**
  * Solves the quadratic congruence of form ax^2 + bx + c ≡ 0 (mod m).
  *
  * @param {Number} a Integer
  * @param {Number} b Integer
  * @param {Number} c Integer
  * @param {Number} m Positive integer coprime with a
  * @return Array of solutions in ascending order ending with modulus, e.g. [x1, x2, ..., xn, m]
  */
  static quadraticCongruenceGeneral(a, b, c, m) {
    this.positiveCheck(m);
    this.isCoprimeCheck(a, m);
    if (m === 1) {
      return [0, m];
    }

    a = this.normalizeIntModulo(a, m);
    b = this.normalizeIntModulo(b, m);
    c = this.normalizeIntModulo(c, m);
    if (a === 0) {
      let linear = this.linearCongruence(b, -c, m);
        return [linear[0], linear[1]];
    }

    let subResult = this.quadraticCongruenceSimple(b * b - 4 * a * c, 4 * m);
    if (subResult.length === 0) {
      return [];
    }

    let generated = this.quadraticCongruenceGeneralGenerate(subResult, m);
    if (generated.length === 0) {
      return [];
    }

    let terminator = generated.length - 1;
    let result = [];
    for (let i = 0; i < terminator; ++i) {
      let t = generated[i];
      if (((t - b) % 2) !== 0) {
        throw new Error("Computational error.");
      }

      let partial = this.linearCongruence(a, Math.floor((t - b) / 2), m);
      if (partial.length === 0) {
        return [];
      }
      if (arraysEqual(partial, [0, 1]) && (!lastForCycle(i, terminator))) {
        continue;
      }

      let xi = partial[0];
      if (!result.includes(xi)) {
        result.push(xi);
      }
      m = partial[1];
    }

    if (result.length !== 0) {
      result.sort(function(a, b) {return a - b});
      result.push(m);
    }
    return result;
  }

  /**
  * Generates a solution for quadratic congruence of form ax^2 + bx + c ≡ 0 (mod m) from its sub-result.
  * Called only from quadraticCongruenceGeneral() and quadraticCongruenceGeneralSteps().
  *
  * @param {Array} subResult Solution of simple quadratic congruence of form t^2 ≡ b*b - 4*a*c (mod 4*m)
  * @param {Number} m Input modulus m
  * @return Solution for input quadratic congruence ax^2 + bx + c ≡ 0 (mod m)
  */
  static quadraticCongruenceGeneralGenerate(subResult, m) {
    let currentMod = subResult[subResult.length - 1];
    let requiredMod = 2 * m;

    if (currentMod >= requiredMod) {
      return subResult;
    }
    let generator = subResult[0];
    let generated = [];
    let generatedSize = Math.floor(requiredMod / currentMod);
    for (let i = 0; i < generatedSize; ++i) {
      generated.push(generator);
      generator += currentMod;
    }
    generated.push(requiredMod);
    return generated;
  }

  /**
  * @param {Number} m Integer > 1
  * @return Do primitive roots mod m exist?
  */
  static primitiveRootsExist(m) {
    this.notLessThanCheck(m, 2);
    if ((m === 2) || (m === 4) || (this.isPrime(m))) {
      return true;
    }

    let factorization = this.factorize(m);
    let factSize = factorization.length;
    if (factSize > 2) {
      return false;
    }

    let a = factorization[0];
    let aFirst = a[0];
    if (factSize === 1) { // m must be a power of odd prime
      return (aFirst > 2) && (this.isPrime(aFirst));
    }

    // factSize == 2, m must be double of a power of odd prime
    let b = factorization[1];
    let bFirst = b[0];
    return (aFirst === 2) && (a[1] === 1) && (bFirst > 2) && (this.isPrime(bFirst));
  }

  /**
  * Solves the binomial congruence of form x^n ≡ a (mod m).
  *
  * @param {Number} n Positive integer
  * @param {Number} a Integer
  * @param {Number} m Positive integer
  * @return Array of solutions modulo m in ascending order ending with modulus, e.g. [x1, x2, ..., xn, m]
  */
  static binomialCongruence(n, a, m) {
    this.positiveCheck(n);
    this.positiveCheck(m);
    a = this.normalizeIntModulo(a, m);
    if (m === 1) {
      return [0, 1];
    }
    if (n === 1) {
      let linear = this.linearCongruence(1, a, m);
      return [linear[0], linear[1]];
    }
    if (n === 2) {
      return this.quadraticCongruenceSimple(a, m);
    }

    let maxNumberOfSolutions = m;
    if ((this.isCoprime(a, m)) && (this.primitiveRootsExist(m))) {
      let phiM = this.eulerPhi(m);
      let d = this.gcd(n, phiM);
      if (this.modPow(a, Math.floor(phiM / d), m) != 1) {
        return [];
      }
      maxNumberOfSolutions = d;
    }
    return this.binomialCongruenceSolve(n, a, m, maxNumberOfSolutions);
  }

  /**
  * Helper method only for binomialCongruence(). Tries to find solution by force.
  */
  static binomialCongruenceSolve(n, a, m, maxSolutions) {
    let result = [];
    for (let i = 0; i < m; ++i) {
      if (this.modPow(i, n, m) == a) {
        result.push(i);
        if (result.length === maxSolutions) {
          break;
        }
      }
    }
    if (result.length !== 0) {
        result.push(m);
    }
    return this.binomialCongruenceRuleOut(result);
  }

  /**
  * Generates modulus for quadratic (simple and general) and binomial congruences.
  *
  * @param {Boolean} odd Allow only odd primes (do not allow even modulus 2*p)
  * @return m which is a product of 2 different odd primes, min. 6, max. 95
  */
  static generateModulus(odd) {
    let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
    let startingIndex = this.randInt(odd ? 1 : 0, 3);
    let maxFinishingIndex = 13 - startingIndex * 3;

    if (startingIndex === 0 || startingIndex === 3) {
      ++maxFinishingIndex;
    }
    let finishingIndex = this.randInt(startingIndex + 1, maxFinishingIndex);

    return primes[startingIndex] * primes[finishingIndex];
  }

  /**
  * Decomposes a permutation into a set of independent cycles.
  *
  * @param {Array} inputPerm Permutation (a subgroup of Sn for n >= 1)
  * @return Independent cycles into which the input decomposes
  */
  static permutationCycles(inputPerm) {
    this.permutationCheck(inputPerm);
    let indicesToVisit = [];
    for (let i = 0; i < inputPerm.length; ++i) {
      indicesToVisit.push(i);
    }

    let result = new Set();
    let currentPerm = [];
    let i = 0;

    while (indicesToVisit.length !== 0) {
      if (!indicesToVisit.includes(i)) {
        i = indicesToVisit[0];
      }

      indicesToVisit.splice(indicesToVisit.indexOf(i), 1);
      let element = inputPerm[i];
      if (currentPerm.length === 0) {
          currentPerm.push(i + 1);
      }
      if (currentPerm.includes(element)) {
        if (currentPerm.length > 1) {
          result.add(currentPerm);
        }
        currentPerm = [];
        continue;
      }
      currentPerm.push(element);
      i = element - 1;
    }
    return result;
  }

  /**
  * @param {Set} cycles Permutation given by its independent cycles
  * @return Order of a permutation
  */
  static permutationOrderSet(cycles) {
    let order = 1;
    for (let cycle of cycles) {
      order = this.lcm(order, cycle.length);
    }
    return order;
  }

  /**
  * @param {Array} inputPerm Permutation (a subgroup of Sn for n >= 1)
  * @return Order of a permutation given by its cycles
  */
  static permutationOrderList(inputPerm) {
    let cycles = this.permutationCycles(inputPerm);
    return this.permutationOrderSet(cycles);
  }

  /**
  * Generates a random permutation of given size
  *
  * @param {Number} size Positive integer
  * @return Permutation with 'size' elements
  */
  static randPermutation(size) {
    this.positiveCheck(size);
    let permutation = [];
    for (let i = 1; i < size + 1; ++i) {
      permutation.push(i);
    }
    this.shuffleArray(permutation);
    return permutation;
  }


  /**
  * Randomly permutes the specified array using a default source of randomness.
  *
  * @param {Array} array Array to be shuffled
  * @return Shuffled array.
  */
  static shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  static randCoprime(min, max) {
    this.notNegativeCheck(min);
    this.notLessThanCheck(max, min);
    this.overflowCheck(min, max);

    let test = this.randCoprimeTry(this.randInt(min, max), min, max);
    if (test.length === 0) {
      test = this.randCoprimeTry(this.randPrime(min, max), min, max);
    }
    if (test.length !== 0) {
      return test;
    }
    throw new Error("Unable to generate a pair of coprimes in range [" + min + ", " + max + "].");
  }

  static randCoprimeTry(a, min, max) {
    let b = this.randInt(min, max);
    for (let i = 0; i < this.FOR_LOOP_ATTEMPTS; ++i) {
      if (this.isCoprime(a, b)) {
        return [a, b];
      }
      b = this.randInt(min, max);
    }
    return [];
  }
}

/**
* FOR loops upper limit.
*/
Algorithms.FOR_LOOP_ATTEMPTS = 1000;
