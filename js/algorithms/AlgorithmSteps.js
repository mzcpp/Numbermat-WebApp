/**
 * Methods to generate step-by-step solutions to computations in Algorithms class.
 *
 * @author Valdemar Svabensky - Original code in Java. <395868(at)mail(dot)muni(dot)cz>
 * @author Mario Zak - Rewritten and modified code in JavaScript. <441270(at)mail(dot)muni(dot)cz>
 */

class AlgorithmSteps {

  constructor() {
    throw new Error('This class should not be instantiated!');
  }

  /**
  * Euclidean algorithm for finding the greatest common divisor of two integers.
  *
  * @param {Number} a Integer
  * @param {Number} b Integer
  * @return Step-by-step solution to the greatest common divisor problem
  */
  static gcdSteps(a, b) {
    let gcdEquals = this.buildGCDEquals(a, b);

    if (a < 0 && b < 0) {
      b = -b;
      return gcdEquals + this.buildGCDNewline(-a, b) + this.gcdSteps(-a, b);
    }
    if (b < 0) {
      return gcdEquals + this.buildGCDNewline(a, -b) + this.gcdSteps(a, -b);
    }
    if (a < b) {
      return gcdEquals + this.buildGCDNewline(b, a) + this.gcdSteps(b, a);
    }

    let result = "";
    while (b > 0) {
      let r = a % b;
      result += a + " = " + Math.floor(a / b) + this.MULT + b + " + " + r + this.NEWLINE;
      a = b;
      b = r;
    }
    result += gcdEquals + a + this.NEWLINE;
    return result;
  }

  static buildGCD(a, b) {
    return "(" + a + ", " + b + ")";
  }

  /**
  * @param {Number} a Integer
  * @param {Number} b Integer
  * @return String of form "(a, b) = "
  */
  static buildGCDEquals(a, b) {
    return this.buildGCD(a, b) + " = ";
  }

  static buildGCDNewline(a, b) {
    return this.buildGCD(a, b) + this.NEWLINE;
  }

  /**
  * Extended Euclidean algorithm for solving Bezout's identity.
  *
  * @param {Number} a Non-negative integer, a >= b
  * @param {Number} b Non-negative integer
  * @return Step-by-step solution to solving Bezout's identity
  */
  static bezoutSteps(a, b) {
    Algorithms.notNegativeCheck(a);
    Algorithms.notNegativeCheck(b);
    Algorithms.notLessThanCheck(a, b);
    if (b === 0) return this.buildBezoutSolutionSimple(a, b, a, 1, 0);

    let gcdSteps = [];
    while (b > 0) {
      let r = a % b;
      gcdSteps.push(a);
      gcdSteps.push(Math.floor(a / b));
      gcdSteps.push(b);
      gcdSteps.push(r);
      a = b;
      b = r;
    }
    // Convert ArrayList to array
    if (gcdSteps.length == 4) return this.buildBezoutSolutionSimple(a, b, gcdSteps[2], 0, 1);

    let result = "";
    let line = "";
    line += a + " = ";
    line += gcdSteps[gcdSteps.length - 8] + " - ";
    line += gcdSteps[gcdSteps.length - 7] + this.MULT;
    line += gcdSteps[gcdSteps.length - 6] + this.NEWLINE;
    result += line;

    let swapMinusSign = false; // minuses alternate every second iteration

    for (let i = gcdSteps.length - 9; i > -1; i -= 4) {
      let replacement = "";
      replacement += "(" + gcdSteps[i - 3];
      replacement += " - " + gcdSteps[i - 2];
      replacement += this.MULT + gcdSteps[i - 1] + ")";

      let replaceIndex = line.lastIndexOf((gcdSteps[i]).toString());
      line = Algorithms.replace(replaceIndex, replaceIndex + replacement.length, line, replacement);
      result += line + this.NEWLINE;
      line = "";

      gcdSteps[i - 2] *= gcdSteps[i + 2];
      if (i == gcdSteps.length - 9) {
        gcdSteps[i - 2] += 1;
      } else {
        gcdSteps[i - 2] += gcdSteps[i + 6];
      }
      line += a + " = ";
      if (swapMinusSign) {
        line += gcdSteps[i + 2];
      } else {
        line += gcdSteps[i + 2] * (-1);
      }
      line += this.MULT + gcdSteps[i - 3];
      if (swapMinusSign) {
        line += " - ";
        swapMinusSign = false;
      } else {
        line += " + ";
        swapMinusSign = true;
      }
      line += gcdSteps[i - 2] + this.MULT;
      line += gcdSteps[i - 1] + this.NEWLINE;
      result += line;
    }
    result += "x = ";
    if (swapMinusSign) {
        result += gcdSteps[5] * (-1);
    } else {
        if (gcdSteps.length == 8) {
          result += gcdSteps[6];
        } else {
          result += gcdSteps[5];
        }
    }
    result += ", y = ";
    if (swapMinusSign) {
      result += gcdSteps[1];
    } else {
      result += gcdSteps[1] * (-1);
    }
    return result += this.NEWLINE;
  }

  static buildBezoutSolutionSimple(a, b, d, x, y) {
    let result = "";
    result += d + " = " + x + this.MULT + a;
    result += " + " + y + this.MULT + b + this.NEWLINE;
    result += "x = " + x + ", y = " + y + this.NEWLINE;
    return result;
  }

  /**
  * Euler's totient (phi) function.
  *
  * @param {Number} n Positive integer
  * @return Step-by-step solution to finding the value of phi n
  */
  static eulerPhiSteps(n) {
    Algorithms.positiveCheck(n);
    if (n < 2) {
        return this.buildPhiEquals(n) + n;
    }

    let factorization = this.factorizeSteps(n);
    let result = "";
    result += factorization + this.NEWLINE;
    factorization = factorization.replace(n + " = ", "");
    result += this.buildPhiEquals(n) + this.buildPhiLine(factorization);
    let tmp = factorization.replaceAll(" \\* ", ") \\* " + this.PHIB).replaceAll(/\\/g, " ");

    if (tmp !== factorization) {
        result += this.buildPhiEquals(n) + this.buildPhiLine(tmp);
    }

    result += this.buildPhiEquals(n);
    let phi = 1;
    let factors = Algorithms.factorize(n);
    let factSize = factors.length;

    for (let i = 0; i < factSize; ++i) {
      let prime = factors[i][0];
      let exponent = factors[i][1];
      phi *= prime - 1;
      phi *= Math.pow(prime, exponent - 1);
      result += "(" + (prime - 1) + this.MULT;
      result += this.buildPower(prime, exponent - 1) + ")";
      if (!lastForCycle(i, factSize)) {
          result += this.MULT;
      }
    }
    result += this.NEWLINE + this.buildPhiEquals(n);
    for (let i = 0; i < factSize; ++i) {
      let prime = factors[i][0];
      let exponent = factors[i][1];
      result += ((prime - 1) * Math.pow(prime, exponent - 1));
      if (!lastForCycle(i, factSize)) {
          result += this.MULT;
      }
    }
    result += this.NEWLINE;
    if (factSize > 1) {
      result += this.buildPhiEquals(n) + phi + this.NEWLINE;
    }
    return result;
  }

  /**
  * @param {Number} n Non-negative integer (check is performed in Algorithms class)
  * @return Step-by-step solution to finding the value of phi n
  */
  static factorizeSteps(n) {
    let factors = Algorithms.factorize(n);
    let factSize = factors.length;
    let result = n + " = ";
    for (let i = 0; i < factSize; ++i) {
      let prime = factors[i][0];
      let exponent = factors[i][1];
      result += this.buildPower(prime, exponent);
      if (!lastForCycle(i, factSize)) {
          result += this.MULT;
        }
    }
    return result;
  }

  static buildPower(base, exp) {
    let sb = base + "^";
    if (exp > 9) {
      sb += "{" + exp + "}";
    } else {
      sb += exp;
    }
    return sb;
  }

  static buildPhi(n) {
    return this.PHIB + n + ")";
  }

  /**
  * @param {Number} n Integer
  * @return String of form "φ(n) = "
  */
  static buildPhiEquals(n) {
    return this.buildPhi(n) + " = ";
  }

  static buildPhiLine(s) {
    return this.PHIB + s + ")" + this.NEWLINE;
  }

  static buildModLineEnd(m) {
    return " (mod " + m + ")" + this.NEWLINE;
  }

  /**
  * Steps of solving a single linear congruence ax ≡ b (mod n).
  *
  * @param {Number} a Integer
  * @param {Number} b Integer
  * @param {Number} n Positive integer
  * @return Step-by-step solution for a single congruence.
  */
  static linearCongruenceSteps(a, b, n) {
    Algorithms.positiveCheck(n);
    let lineEnd = this.buildModLineEnd(n);
    let result = this.buildLinearCongruence(a, 'x', b, lineEnd);
    let originalA = a;
    let originalB = b;
    if (this.normalizeIntModuloChanges(a, b, n)) {
      a = Algorithms.normalizeIntModulo(a, n);
      b = Algorithms.normalizeIntModulo(b, n);
      result += this.buildLinearCongruence(a, 'x', b, lineEnd);
    }
    if (a === 1) {
      return result;
    }
    if ((a === 0) && (b === 0)) {
      return result += LANGUAGE.infinite_solutions + AlgorithmSteps.NEWLINE;
    }
    if ((a === 0) && (b !== 0)) {
      return result += LANGUAGE.solution_not_exists + AlgorithmSteps.NEWLINE;
    }

    // Natural solution
    let naturalSolution = this.linearCongruenceStepsNatural(originalA, originalB, n, "");
    if (naturalSolution.length !== 0) {
      return naturalSolution;
    }

    // Bezout's identity solution
    let numberOfSolutions = Algorithms.gcd(a, n);
    result += this.buildGCDEquals(a, n) + numberOfSolutions;
    if (b % numberOfSolutions !== 0) {
      result += this.NOT_DIVIDES + b + this.NEWLINE;
      return result += LANGUAGE.solution_not_exists + AlgorithmSteps.NEWLINE;
    }
    result += " | " + b + this.NEWLINE;
    result += numberOfSolutions + " = " + a;
    result += "r + " + n + "s" + this.NEWLINE;
    let bezoutCoefficientA; // coeffient r such that ra + sn = gcd(a, n)
    if (a > n) {
      bezoutCoefficientA = Algorithms.bezout(a, n)[1];
    } else {
      bezoutCoefficientA = Algorithms.bezout(n, a)[2];
    }
    let shiftedModulus = Math.floor(n / numberOfSolutions);
    let x = Math.floor((bezoutCoefficientA * b) / numberOfSolutions);
    x = Algorithms.normalizeIntModulo(x, shiftedModulus);
    result += "r = " + bezoutCoefficientA + this.NEWLINE;
    lineEnd = this.buildModLineEnd(shiftedModulus);
    result += "x" + this.CONG + b + "r / ";
    result += numberOfSolutions + lineEnd;
    result += this.buildLinearCongruence(1, 'x', x, lineEnd);
    return result;
  }

  /**
  * Steps of solving a single linear congruence ax ≡ b (mod n).
  *
  * @param {Number} a Integer (non-zero, > 1)
  * @param {Number} b Integer (non-zero)
  * @param {Number} n Positive integer (checked)
  * @param {String} result String from previous run (empty in the beginnning)
  * @return Step-by-step natural solution or empty String
  */
  static linearCongruenceStepsNatural(a, b, n, result) {
    let firstRun = result.length === 0;
    let lineEnd = this.buildModLineEnd(n);
    if (firstRun) {
      result += this.buildLinearCongruence(a, 'x', b, lineEnd);
    }
    let normA = Algorithms.normalizeIntModulo(a, n);
    let normB = Algorithms.normalizeIntModulo(b, n);

    /**
    * Let d be a small divisor of both (normalized) a and b.
    * Try to find this divisor and divide the input congruence by it.
    * (By 'small' we will mean between 2 and 13, inclusive.)
    */
    let d = 1;
    if (normB !== 0) {
      d = this.linearCongruenceStepsNaturalSearch(Algorithms.commonDivisors(normA, normB));
    }
    if ((d > 1) && firstRun) {
    if ((normA != a) || (normB != b)) {
      result += this.buildLinearCongruence(normA, 'x', normB, lineEnd);
    }
    a = normA;
    b = normB;
    } else { // Try to find d for original a, b.
      d = this.linearCongruenceStepsNaturalSearch(Algorithms.commonDivisors(a, b));
    }

    let gcd = Algorithms.gcd(n, d);
    if (gcd > 1) {
      d = gcd;
    }
    if (d > 1) { // We found d in either of the branches
      result = replaceLast(result, this.NEWLINE, "   /÷" + d + this.NEWLINE);
      a = Math.floor(a / d);
      b = Math.floor(b / d);

      if (n % d === 0) {
        n = Math.floor(n / d);
      }
      lineEnd = this.buildModLineEnd(n);
      result += this.buildLinearCongruence(a, 'x', b, lineEnd);
      if (a === 1) {
        return result;
      }
    }

    /**
    * Now a is still > 1, so let d be a small divisor of a.
    * Try to find d and then search for k such that nk ≡ -b (mod d).
    * It holds that the congruence ax ≡ b + nk (mod n) is divisible by d.
    */
    d = this.linearCongruenceStepsNaturalSearch(Algorithms.divisors(a));
    gcd = Algorithms.gcd(n, d);

    if (gcd > 1) {
      d = gcd;
    }

    if (d > 1) {
      let partial = Algorithms.linearCongruence(n, -b, d);
      if (partial.length !== 0) {
        let k = partial[0];
        b = b + n * k;
        if (k !== 0) {
          result = replaceLast(result, this.NEWLINE, "   /+" + n * k + this.NEWLINE);
          result += this.buildLinearCongruence(a, 'x', b, lineEnd);
        }
        result = replaceLast(result, this.NEWLINE, "   /÷" + d + this.NEWLINE);
        a = Math.floor(a / d);
        b = Math.floor(b / d);
        if (n % d === 0) {
          n = Math.floor(n / d);
        }
        lineEnd = this.buildModLineEnd(n);
        result += this.buildLinearCongruence(a, 'x', b, lineEnd);
        if (a === 1) {
          return result;
        }
      }
    }

    if (firstRun) {
      /* Rerun the process once more. */
      let sb = this.linearCongruenceStepsNatural(a, b, n, result);
      if (this.linearCongruenceStepsNaturalFinished(sb)) {
        return sb;
      }
      /*
      * Now if a is still > 1, check a +/- n
      * (according to which of these has a small divisor).
      */
      if (this.linearCongruenceStepsNaturalSearch(Algorithms.divisors(a + n)) > 1) {
        sb = this.linearCongruenceStepsNatural(a + n, b, n, result);
        if (this.linearCongruenceStepsNaturalFinished(sb)) {
          return sb;
        }
      }
      if (this.linearCongruenceStepsNaturalSearch(Algorithms.divisors(a - n)) > 1) {
        sb = this.linearCongruenceStepsNatural(a - n, b, n, result);
        if (this.linearCongruenceStepsNaturalFinished(sb)) {
          return sb;
        }
      }
    }
    return "";
  }

  /**
  * Steps of solving a single linear congruence ax ≡ b (mod n).
  *
  * @param {Array} divisors Array where to search
  * @return d
  */
  static linearCongruenceStepsNaturalSearch(divisors) {
    let d = divisors.shift(); // remove 1 and initialize d
    for (let i = 0; i < divisors.length; ++i) {
      let di = divisors[i];
      if (di > 13) {
        break;
      }
      if (di > d) {
        d = di;
      }
    }
    return d;
  }

  static linearCongruenceStepsNaturalFinished(sb) {
    if (sb.length === 0) {
      return false;
    }
    // Solution is finished when it has the form x ≡ b (mod n)
    return isNaN(parseInt(sb.substring(sb.lastIndexOf("x") - 1)[0]));
  }

  /**
  * @param {Number} a Integer
  * @param {Number} x Char with variable name
  * @param {Number} b Integer
  * @param {String} lineEnd String containing line end, usually " (mod n)\n"
  * @return StringBuilder of form "a'x' ≡ b (mod n)\n"
  */
  static buildLinearCongruence(a, x, b, lineEnd) {
    return "" + ((a === 1) ? "" : a) + x + this.CONG + b + lineEnd;
  }

  static buildLinearCongruenceIndex(a, x, i, b, lineEnd) {
    let sb = this.buildLinearCongruence(a, x, b, lineEnd);
    return "" + (sb.replace(x + "", x + "_" + i));
  }

  /**
  * @param {Number} m Integer
  * @return String of form " (mod n)\n"
  */
  static buildModLineEnd(m) {
    return " (mod " + m + ")" + this.NEWLINE;
  }

  /**
  * Checks if normalizing integers modulo 'mod' changes the numbers.
  *
  * @param {Integers} ints Integers ending with modulus 'mod'
  * @return True if any of the integers changes, false if all stays the same.
  */
  static normalizeIntModuloChanges(...ints) {
    let size = ints.length;
    let mod = ints[size - 1];
    let changes = false;
    for (let i = 0; i < size - 1; ++i) {
      let a = ints[i];
      changes = (changes) || (a != Algorithms.normalizeIntModulo(a, mod));
    }
    return changes;
  }

  /**
  * @param {Number} count Number of equations, positive integer
  * @param {Array} aList List of integers
  * @param {Array} bList List of integers
  * @param {Array} cList List of integers
  * @return Steps to solving a system of 'i' congruences of type a_i x ≡ b_i (mod n_i).
  */
  static linearCongruenceSystemSteps(count, aList, bList, nList) {
    Algorithms.positiveCheck(count);
    Algorithms.listCheck(count, aList);
    Algorithms.listCheck(count, bList);
    Algorithms.listCheck(count, nList);

    if (count === 1) {
      return this.linearCongruenceSteps(aList[0], bList[0], nList[0]);
    }
    let result = "";
    let lineEnds = [];
    let coefficentsModded = false;

    for (let i = 0; i < count; ++i) {
      let ai = aList[i];
      let bi = bList[i];
      let ni = nList[i];
      Algorithms.positiveCheck(ni);
      aList[i] = Algorithms.normalizeIntModulo(ai, ni);
      bList[i] = Algorithms.normalizeIntModulo(bi, ni);
      if ((aList[i] !== ai) || (bList[i] !== bi)) {
        coefficentsModded = true;
      }
      lineEnds.push(this.buildModLineEnd(ni));
      result += this.buildLinearCongruence(ai, 'x', bi, lineEnds[i]);
    }
    result += this.SEPARATOR;

    if (coefficentsModded) {
      for (let i = 0; i < count; ++i) {
        let ai = aList[i];
        let bi = bList[i];
        result += this.buildLinearCongruence(ai, 'x', bi, lineEnds[i]);
      }
      result += this.SEPARATOR;
    }

    let solution = [];
    for (let i = 0; i < count; ++i) {
      let partial = Algorithms.linearCongruence(aList[i], bList[i], nList[i]);
      if (partial.length === 0) {
        return result += LANGUAGE.solution_not_exists + AlgorithmSteps.NEWLINE;
      }
      if (arraysEqual(partial,[0, 1])) {
        if ((solution.length === 0) && (lastForCycle(i, count))) {
          return result += this.SEPARATOR + LANGUAGE.infinite_solutions + AlgorithmSteps.NEWLINE;
        }
        continue;
      }
      let partialX = partial[0];
      let partialM = partial[1];

      if (solution.length === 0) {
        solution[0] = partialX;
        solution[1] = partialM;
      } else {
        solution[0] = (solution[0] + solution[1] * partialX);
        solution[1] = (solution[1] * partialM);
      }

      if (i > 0) {
        result += String.fromCharCode(106 + i) + " = " + partialX + " + ";
        result += partialM + String.fromCharCode(107 + i) + this.NEWLINE;
      }

      let solutionX = solution[0];
      let solutionM = solution[1];
      let xEquals = "" + solutionX;
      xEquals += " + " + solutionM + String.fromCharCode(107 + i);
      result += "x = " + xEquals + this.NEWLINE;
      if (!lastForCycle(i, count)) {
        result += this.SEPARATOR;
        let nextA = aList[i + 1];
        if (nextA !== 1) {
          result += nextA + "(" + xEquals + ")";
        } else {
          result += xEquals;
        }
        result += this.CONG + bList[i + 1] + lineEnds[i + 1];
        bList[i + 1] = bList[i + 1] - (aList[i + 1] * solutionX);
        aList[i + 1] = aList[i + 1] * solutionM;
      }
    }
    result += this.buildLinearCongruence(1, 'x', solution[0], this.buildModLineEnd(solution[1]));
    return result;
  }

  /**
  * @param {Number} element Positive integer (check is performed in Algorithms class)
  * @param {Number} n Integer > 1 (check is performed in Algorithms class)
  * @return Step-by-step solution to finding order of element 'element' in group Zn×
  */
  static unitGroupElementOrderSteps(element, n) {
    let elementOrder = Algorithms.unitGroupElementOrder(element, n);
    let groupOrder = Algorithms.eulerPhi(n);
    let groupOrderDivisors = Algorithms.divisors(groupOrder);

    let result = "";
    result += this.elementsOfUnitGroupSteps(n);
    result += LANGUAGE.group_order + ": " + this.buildPhiEquals(n) + groupOrder + this.NEWLINE;
    result += LANGUAGE.possible_orders + ": " + "[" + groupOrderDivisors + "]" + this.NEWLINE;
    result = result.replaceAll("\\[", "\\{");
    result = result.replaceAll("\\]", "\\}");

    let lineEnd = "1 " + this.buildModLineEnd(n);
    for (let i = 0; i < groupOrderDivisors.length; ++i) {
      let currentDivisor = groupOrderDivisors[i];
      if (currentDivisor === elementOrder) {
        break;
      }
      result += this.buildPower(element, currentDivisor) + this.NOT_CONG + lineEnd;
    }
    result += this.buildPower(element, elementOrder) + this.CONG + lineEnd;
    result += LANGUAGE.element_order  + " [" + element + "] " + LANGUAGE.is + " ";
    result += elementOrder + "." + this.NEWLINE;
    return result;
  }

  /**
  * @param {Number} n Integer > 1
  * @return Steps to finding elements of unit group Zn^×.
  */
  static elementsOfUnitGroupSteps(n) {
    Algorithms.notLessThanCheck(n, 2);
    let result = "";
    result += "Z" + n + this.TIMES + " = ";
    if (Algorithms.isPrime(n)) {
      return result += "Z" + n + "*" + this.NEWLINE;
    }

    result += "\\{";
    let breakline = 0;
    for (let i = 1; i < n; ++i) {
      if (Algorithms.isCoprime(i, n)) {
        result += i;
        if (i < n - 1) {
          result += ", ";
        }
        ++breakline;
        if (breakline === 10) {
          result += "\n";
          breakline = 0;
        }
      }
    }
    return result += "\\}" + this.NEWLINE;
  }

  /**
  * @param {Number} base Integer
  * @param {Number} exp Non-negative integer
  * @param {Number} mod Positive integer
  * @return Steps of finding (base^exp) mod (mod)
  */
  static modPowSteps(base, exp, mod) {
    Algorithms.notNegativeCheck(exp);
    Algorithms.positiveCheck(mod);
    let lineStart = this.buildModPowLineStart(base, exp);
    let lineEnd = this.buildModLineEnd(mod);
    let result = "";
    if (this.normalizeIntModuloChanges(base, mod)) {
      base = Algorithms.normalizeIntModulo(base, mod);
      result += lineStart + this.buildPower(base, exp) + lineEnd;
      lineStart = this.buildModPowLineStart(base, exp);
    }
    if (mod === 1) {
      return this.modPowReturn(0, result += this.CONG, lineEnd);
    }
    if (base === 0) {
      return this.modPowReturn((exp === 0 ? 1 : 0), result += this.CONG, lineEnd);
    }
    if ((base === 1) || (exp === 0)) {
      return this.modPowReturn(1, result += this.CONG, lineEnd);
    }
    if (base === -1) {
      return this.modPowReturn((exp % 2 === 0 ? 1 : -1 + mod), result += this.CONG, lineEnd);
    }
    if (exp === 1) {
      return this.modPowReturn(base, result += this.CONG, lineEnd);
    }

    // Find phi
    let appendCongSymbol = false;
    if (Algorithms.isCoprime(base, mod)) {
      let phi = Algorithms.eulerPhi(mod);
      if (this.normalizeIntModuloChanges(exp, phi)) {
        result += this.buildPhiEquals(mod) + phi + this.NEWLINE;
        result += this.SEPARATOR + lineStart;

        exp = Algorithms.normalizeIntModulo(exp, phi);
        if (exp === 0) {
          return this.modPowReturn(1, result, lineEnd);
        }
        if (exp === 1) {
          return this.modPowReturn(base, result, lineEnd);
        }

        result += this.buildPower(base, exp) + lineEnd;
        lineStart = this.buildModPowLineStart(base, exp);
        appendCongSymbol = true;
      }
    }

    // Find element order
    try {
      let order = Algorithms.unitGroupElementOrder(base, mod);
      if (this.normalizeIntModuloChanges(exp, order)) {
        if (appendCongSymbol) {
          result += this.CONG;
        } else {
          result += lineStart;
        }
        let trailing = "";
        if (exp % order !== 0) {
          trailing = this.buildPower(base, exp % order) + this.MULT;
        }
        result += trailing;
        if (Math.floor(exp / order) > 1) {
          result += "(" + this.buildPower(base, order) + ")";
          result += "^{" + Math.floor(exp / order) + "}";
        } else {
          result += this.buildPower(base, order);
        }
        result += lineEnd + this.CONG + trailing;
        result += this.buildPower(1, Math.floor(exp / order)) + lineEnd;
        result += this.CONG;

        exp = Algorithms.normalizeIntModulo(exp, order);
        if (exp === 0) {
          return this.modPowReturn(1, result, lineEnd);
        }
        if (exp === 1) {
          return this.modPowReturn(base, result, lineEnd);
        }

        result += this.buildPower(base, exp) + lineEnd;
        lineStart = this.buildModPowLineStart(base, exp);
        appendCongSymbol = true;
      }
    } catch (ex) {}

    // Try to factorize mod
    let factors = Algorithms.factorize(mod);
    let factSize = factors.length;
    if (factSize > 1) {
      let subMods = [];
      let lineEnds = [];
      for (let i = 0; i < factSize; ++i) {
        let p = factors[i][0];
        let e = factors[i][1];
        let m = Math.pow(p, e);
        subMods.push(m);
        lineEnds.push(this.buildModLineEnd(m));
      }

      if (result.indexOf(this.NEWLINE) !== result.lastIndexOf(this.NEWLINE)) {
        result += this.SEPARATOR;
      }
      result += this.factorizeSteps(mod) + this.NEWLINE + this.SEPARATOR;

      for (let i = 0; i < factSize; ++i) {
        let subResult = Algorithms.modPow(base, exp, subMods[i]);
        result += this.buildModPowResult(subResult, lineStart, lineEnds[i]);
      }
      result += this.SEPARATOR;
      appendCongSymbol = false;
    }
    result += appendCongSymbol ? this.CONG : lineStart;
    return this.modPowReturn(Algorithms.modPow(base, exp, mod), result, lineEnd);
  }

  static modPowReturn(value, result, lineEnd) {
    return result += this.buildModPowResult(value, "", lineEnd);
  }

  static buildModPowResult(result, lineStart, lineEnd) {
    return "" + lineStart + result + lineEnd;
  }

  /**
  * @param {Number} base Integer
  * @param {Number} exp Integer
  * @return String of form "base^exp ≡ "
  */
  static buildModPowLineStart(base, exp) {
    return "" + this.buildPower(base, exp) + this.CONG;
  }

  /**
  * @param {Number} a Integer
  * @param {Number} p Odd prime (check is performed Algorithms class)
  * @return Steps of computing the Legendre symbol (a/p)
  */
  static legendreSymbolSteps(a, p) {
    let result = this.buildLegendreSymbolEquals(a, p);
    if (this.normalizeIntModuloChanges(a, p)) {
      a = Algorithms.normalizeIntModulo(a, p);
      result += this.buildLegendreSymbolNewlineEquals(a, p);
    }
    if (this.legendreSymbolFinish(a)) {
      return this.legendreSymbolReturn(result, a, p);
    }

    // Try to flip a, p
    let minus = false;
    if ((a < p) && (a !== 2) && (Algorithms.isPrime(a))) {
      if ((a % 4 !== 1) && (p % 4 !== 1)) {
        minus = true;
        result += "-";
      }
      result += this.buildLegendreSymbolNewlineEquals(p, a);
      let tmp = a;
      a = p;
      p = tmp;

      if (this.normalizeIntModuloChanges(a, p)) {
        a = Algorithms.normalizeIntModulo(a, p);
        if (minus) {
          result += "-";
        }
        result += this.buildLegendreSymbolNewlineEquals(a, p);
      }
    }
    if (this.legendreSymbolFinish(a)) {
      return this.legendreSymbolReturn(result, a, p);
    }

    // Factorize a
    if (!Algorithms.isPrime(a)) {
      let factors = Algorithms.factorize(a);
      let factSize = factors.length;
      let values = [];
      if (minus) {
        result += "-";
      }
      let anyAppendsOnResult = false;
      for (let i = 0; i < factSize; ++i) {
        // Try to make a perfect square out of pi^ei
        let pi = factors[i][0];
        let ei = factors[i][1];
        let perfectPi = pi;
        let perfectEi = 1; // pi^perfectEi is perfect square
        for (let j = 0; j < ei - 1; ++j) {
          if (Algorithms.isPerfectSquare(pi)) {
            break;
          }
          perfectPi *= perfectPi;
          ++perfectEi;
        }

        let perfectFactor = perfectPi;
        let restFactor = Math.pow(pi, ei);
        if ((factSize > 1) && (restFactor !== a)) {
          anyAppendsOnResult = true;
          result += this.buildLegendreSymbol(restFactor, p);
        }
        values.push(Algorithms.legendreSymbol(restFactor, p));
        if (perfectEi !== ei) {
          anyAppendsOnResult = true;
          result += this.MULT + this.buildLegendreSymbol(perfectFactor, p);
          values.push(Algorithms.legendreSymbol(perfectFactor, p));
        }
        if (!lastForCycle(i, factSize)) {
          result += this.MULT;
        }
      }
      if (anyAppendsOnResult) {
        result += this.NEWLINE + " = ";
        if (minus) {
          result += "-";
        }
        // Now evaluate all factors
        let valuesSize = values.length;
        for (let i = 0; i < valuesSize; ++i) {
          let vi = values[i];
          result += (vi === -1) ? ("(" + vi + ")") : vi;
          if (!lastForCycle(i, valuesSize)) {
            result += this.MULT;
          }
        }
        result += this.NEWLINE + " = ";
      }
    }
    return this.legendreSymbolReturn(result, a, p).replaceAll("--", "");
  }

  static legendreSymbolFinish(a) {
    let absA = Math.abs(a);
    return absA < 4 || Algorithms.isPerfectSquare(absA);
  }

  static legendreSymbolReturn(result, a, p) {
    let value = Algorithms.legendreSymbol(a, p);
    return result += value + this.NEWLINE;
  }

  static buildLegendreSymbol(a, p) {
    return "(" + a + "/" + p + ")";
  }

  /**
  * @param {Number} a Integer
  * @param {Number} p Integer
  * @return String of form "(a/p) = "
  */
  static buildLegendreSymbolEquals(a, p) {
    return this.buildLegendreSymbol(a, p) + " = ";
  }

  static buildLegendreSymbolNewlineEquals(a, p) {
    return this.buildLegendreSymbol(a, p) + this.NEWLINE + " = ";
  }

  /**
  * @param {Character} x Char, variable symbol
  * @param {Number} a Integer
  * @param {Number} m Positive integer
  * @return Steps in finding a solution for congruence of form 'x'^2 ≡ a (mod m).
  */
  static quadraticCongruenceSimpleSteps(x, a, m) {
    Algorithms.positiveCheck(m);
    let lineEnd = this.buildModLineEnd(m);
    let result = this.buildQuadraticCongruence(x, a, lineEnd);
    if (this.normalizeIntModuloChanges(a, m)) {
        a = Algorithms.normalizeIntModulo(a, m);
        result += this.buildQuadraticCongruence(x, a, lineEnd);
    }
    let solution = Algorithms.quadraticCongruenceSimple(a, m);
    let solutionSB = this.quadraticCongruenceSimpleBuildSolution(solution, x, true);
    if (a === 0 || Algorithms.isPowerOf2(m)) {
        return result += solutionSB;
    }

    let factors = Algorithms.factorize(m);
    let factSize = factors.length;
    if (factSize > 1 && factSize < 5) {
      let subMods = [];
      let lineEnds = [];
      for (let i = 0; i < factSize; ++i) {
        let pi = factors[i][0]
        if (pi !== 2 && Algorithms.legendreSymbol(a, pi) === -1) {
          result += this.SEPARATOR;
          result += this.factorizeSteps(m) + this.NEWLINE;
          result += this.legendreSymbolSteps(a, pi);
          return result += LANGUAGE.solution_not_exists + AlgorithmSteps.NEWLINE;
        }
        let ei = factors[i][1];
        let mi = Math.pow(pi, ei);
        subMods.push(mi);
        lineEnds.push(this.buildModLineEnd(mi));
      }
      if (m > 13) {
        result += this.SEPARATOR;
        for (let i = 0; i < lineEnds.length; ++i) {
          result += this.buildQuadraticCongruence(x, a, lineEnds[i]);
        }
        for (let i = 0; i < subMods.length; ++i) {
          let subResult = Algorithms.quadraticCongruenceSimple(a, subMods[i]);
          result += this.quadraticCongruenceSimpleBuildSolution(subResult, x, false);
        }
      }
    }
    return result += solutionSB;
  }

  static buildQuadraticCongruence(x, a, lineEnd) {
    return this.buildBinomialCongruence(1, x, 2, 0, -a, lineEnd);
  }

  /**
  * @param {Number} a Integer
  * @param {Character} x Char, variable symbol
  * @param {Number} exp Positive integer
  * @param {Number} b Integer
  * @param {Number} c Integer
  * @param {String} lineEnd String containing line end, usually " (mod n)\n"
  * @return String of form "a'x'^{exp} + b'x' + c ≡ 0 (mod m)\n"
  */
  static buildBinomialCongruence(a, x, exp, b, c, lineEnd) {
    Algorithms.positiveCheck(exp);
    if (exp === 1) return this.buildLinearCongruence(a + b, x, -c, lineEnd);
    if (a === 0) return this.buildLinearCongruence(b, x, -c, lineEnd);

    let sb = "" + ((a === 1) ? "" : a);
    sb += x + "^";
    if (exp > 9) {
      sb += "{" + exp + "}";
    } else {
      sb += exp;
    }

    if ((a === 1) && (b === 0)) {
      return sb += this.CONG + -c + lineEnd;
    }
    if (b !== 0) {
      sb += this.buildCoefficient(b, false) + x;
    }
    sb += this.buildCoefficient(c, true);
    return sb += this.CONG + "0" + lineEnd;
  }

  static buildCoefficient(n, absolute) {
    let sb = "";
    if (n === 0) {
      return sb;
    }

    sb += (n > 0) ? " + " : " - ";
    if ((absolute) || (Math.abs(n) !== 1)) {
      sb += (n > 0) ? n : -n;
    }
    return sb;
  }

  static quadraticCongruenceSimpleBuildSolution(solution, x, subscripts) {
    if (solution.length === 0) {
      return "" + LANGUAGE.solution_not_exists + AlgorithmSteps.NEWLINE;
    }

    let lastIndex = solution.length - 1;
    let lineEnd = this.buildModLineEnd(solution[lastIndex]);
    let result = "" + this.SEPARATOR;
    if (subscripts) {
      for (let i = 0; i < lastIndex; ++i) {
        result += this.buildLinearCongruenceIndex(1, x, i + 1, solution[i], lineEnd);
      }
    } else {
      for (let i = 0; i < lastIndex; ++i) {
        result += this.buildLinearCongruence(1, x, solution[i], lineEnd);
      }
    }
    return result;
  }

  /**
  * @param {Number} a Integer
  * @param {Number} b Integer
  * @param {Number} c Integer
  * @param {Number} m Positive integer coprime with a
  * @return Steps in finding a solution for congruence ax^2 + bx + c ≡ 0 (mod m)
  */
  static quadraticCongruenceGeneralSteps(a, b, c, m) {
    Algorithms.positiveCheck(m);
    Algorithms.isCoprimeCheck(a, m);
    let lineEnd = this.buildModLineEnd(m);
    let result = this.buildBinomialCongruence(a, 'x', 2, b, c, lineEnd);
    if (m === 1) {
      return result += LANGUAGE.infinite_solutions + AlgorithmSteps.NEWLINE;
    }

    if (this.normalizeIntModuloChanges(a, b, c, m)) {
      a = Algorithms.normalizeIntModulo(a, m);
      b = Algorithms.normalizeIntModulo(b, m);
      c = Algorithms.normalizeIntModulo(c, m);
      result += this.buildBinomialCongruence(a, 'x', 2, b, c, lineEnd);
    }
    if (a === 0) {
      return this.linearCongruenceSteps(b, -c, m);
    }
    if (a === 1 && b === 0) {
      return this.quadraticCongruenceSimpleSteps('x', -c, m);
    }

    let solution = Algorithms.quadraticCongruenceGeneral(a, b, c, m);
    let solutionSB = this.quadraticCongruenceSimpleBuildSolution(solution, 'x', true);
    let naturalSolution = this.quadraticCongruenceStepsNatural(a, b, c, m);
    if (naturalSolution.length !== 0) {
      return result += naturalSolution + solutionSB;
    }

    let D = b * b - 4 * a * c;
    result += "D = " + D + this.NEWLINE + this.SEPARATOR;
    result += this.quadraticCongruenceSimpleSteps('t', D, 4 * m);
    let subResult = Algorithms.quadraticCongruenceSimple(D, 4 * m);
    if (subResult.length === 0) {
      return result;
    }

    result += this.SEPARATOR;
    let generated = Algorithms.quadraticCongruenceGeneralGenerate(subResult, m);
    let terminator = generated.length;
    for (let i = 0; i < terminator - 1; ++i) {
      let t = generated[i];
      if (((t - b) % 2) !== 0) {
        throw new Error("Computational error.");
      }

      let lastCycle = lastForCycle(i, terminator);
      let newA = Math.floor((t - b) / 2);
      result += "(t-b)/2 = " + newA + this.NEWLINE;

      let partial = Algorithms.linearCongruence(a, newA, m);
      result += this.buildLinearCongruence(a, 'x', newA, this.buildModLineEnd(m));
      if (arraysEqual(partial, [])) {
        return result += LANGUAGE.solution_not_exists + AlgorithmSteps.NEWLINE;
      }
      if (arraysEqual(partial, [0, 1]) && !lastCycle) {
        continue;
      }
      result += this.buildLinearCongruence(1, 'x', partial[0], this.buildModLineEnd(partial[1]));
      if (!lastCycle) {
        result += this.SEPARATOR;
      }
    }
    return result + solutionSB;
  }

  static quadraticCongruenceStepsNatural(a, b, c, m) {
    let result = "";
    let factors = Algorithms.factorize(m);
    let factSize = factors.length;
    if ((factSize < 2) || (factSize > 4)) {
      return result;
    }

    let subMods = [];
    let lineEnds = [];
    for (let i = 0; i < factSize; ++i) {
      let pi = factors[i][0];
      let ei = factors[i][1];
      let mi = Math.pow(pi, ei);
      subMods.push(mi);
      lineEnds.push(this.buildModLineEnd(mi));
    }
    result += this.SEPARATOR;
    for (let i = 0; i < lineEnds.length; ++i) {
      let lineEnd = lineEnds[i];
      let ai = a;
      let bi = b;
      let ci = c;
      let mi = subMods[i];
      result += this.buildBinomialCongruence(a, 'x', 2, b, c, lineEnd);
      if (this.normalizeIntModuloChanges(a, b, c, mi)) {
        ai = Algorithms.normalizeIntModulo(a, mi);
        bi = Algorithms.normalizeIntModulo(b, mi);
        ci = Algorithms.normalizeIntModulo(c, mi);
        result += this.buildBinomialCongruence(ai, 'x', 2, bi, ci, lineEnd);
      }
      let subResult = Algorithms.quadraticCongruenceGeneral(ai, bi, ci, subMods[i]);
      result += this.quadraticCongruenceSimpleBuildSolution(subResult, 'x', false);
      if (!lastForCycle(i, lineEnds.length)) {
        result += this.SEPARATOR;
      }
    }
    return result;
  }

  /**
  * @param {Number} n Positive integer
  * @param {Number} a Integer
  * @param {Number} m Positive integer
  * @return Steps in finding a solution for congruence x^n ≡ a (mod m)
  */
  static binomialCongruenceSteps(n, a, m) {
    Algorithms.positiveCheck(n);
    Algorithms.positiveCheck(m);
    let lineEnd = this.buildModLineEnd(m);
    let result = this.buildBinomialCongruence(1, 'x', n, 0, -a, lineEnd);
    if (m === 1) {
      return result += LANGUAGE.infinite_solutions + AlgorithmSteps.NEWLINE;
    }
    if (n === 1) {
      return this.linearCongruenceSteps(1, a, m);
    }
    if (n === 2) {
      return this.quadraticCongruenceSimpleSteps('x', a, m);
    }

    if (this.normalizeIntModuloChanges(a, m)) {
      a = Algorithms.normalizeIntModulo(a, m);
      result += this.buildBinomialCongruence(1, 'x', n, 0, -a, lineEnd);
    }
    result += this.SEPARATOR;
    let lemma = this.binomialCongruenceLemma(n, a, m, result);
    result = lemma[1];
    if (!lemma[0]) {
      return result += LANGUAGE.solution_not_exists + AlgorithmSteps.NEWLINE;
    }

    let solutions = Algorithms.binomialCongruence(n, a, m);
    if (solutions.length === 0) {
      let factors = Algorithms.factorize(m);
      result += this.factorizeSteps(m) + this.NEWLINE;
      for (let i = 0; i < factors.length; ++i) {
        let subResult = "";
        let mi = factors[i][0];
        let lemma = this.binomialCongruenceLemma(n, a, mi, subResult);
        subResult = lemma[1];
        if (!lemma[0]) {
          result += subResult;
          break;
        }
      }
      return result += LANGUAGE.solution_not_exists + AlgorithmSteps.NEWLINE;
    }

    let lastIndex = solutions.length - 1;
    lineEnd = this.buildModLineEnd(solutions[lastIndex]);
    for (let i = 0; i < lastIndex; ++i) {
      result += this.buildLinearCongruence(1, 'x', solutions[i], lineEnd);
    }
    return result;
  }

  static binomialCongruenceLemma(n, a, m, result) {
    if (Algorithms.isCoprime(a, m) && Algorithms.primitiveRootsExist(m)) {
      let phiM = Algorithms.eulerPhi(m);
      let d = Algorithms.gcd(n, phiM);
      let test = Algorithms.modPow(a, Math.floor(phiM / d), m);

      let lineEnd = this.buildModLineEnd(m);
      if (this.normalizeIntModuloChanges(a, m)) {
        a = Algorithms.normalizeIntModulo(a, m);
        result += this.buildBinomialCongruence(1, 'x', n, 0, -a, lineEnd);
      }
      result += this.buildGCDEquals(a, m) + 1 + this.NEWLINE;
      result += this.buildPhiEquals(m) + phiM + this.NEWLINE;
      result += this.buildGCDEquals(n, phiM) + d + this.NEWLINE;
      result += this.buildModPowResult(test, this.buildModPowLineStart(a, Math.floor(phiM / d)), lineEnd) + this.SEPARATOR;
      if (test !== 1) {
        return [false, result];
      }
    }
    return [true, result];
  }

  /**
  * @param {Array} inputPerm Permutation (a subgroup of Sn for n >= 1) up to 99 elements
  * @return Representation of a permutation as a matrix
  */
  static permutationToMatrix(inputPerm) {
    let sorted = [...inputPerm];
    sorted.sort();

    let sb = "(";
    for (let i = 0; i < sorted.length; ++i) {
      if (i < 9 && inputPerm[i] > 9) {
        sb += " ";
      }
      sb += i + 1;
      if (!lastForCycle(i, sorted.length)) {
        sb += ", ";
      }
    }
    sb += ")" + this.NEWLINE;
    sb += this.permutationToString("[" + inputPerm + "]");
    return sb;
  }

  /**
  * @param {Array} inputPerm Permutation (a subgroup of Sn for n >= 1)
  * @return Representation of a permutation as a String of form "(a1, a2, ..., an)"
  */
  static permutationToString(inputPerm) {
    return inputPerm.toString().replaceAll("\\[", "(").replaceAll("\\]", ")").replaceAll(",", ", ");
  }

  /**
  * @param {Array} inputPerm Permutation (a subgroup of Sn for n >= 1)
  * @return Decomposition into cycles and steps to finding permutation order
  */
  static permutationOrderSteps(inputPerm) {
    let cycles = Algorithms.permutationCycles(inputPerm);
    let result = "";
    let orders = "k = ";
    if (cycles.size === 0) {
      result += "id";
      orders += "1";
    } else {
      if (cycles.size > 1) {
        orders += "[";
      }
      let order = 1;
      for (let cycle of cycles) {
        let currentCycleOrder = cycle.length;
        order = Algorithms.lcm(order, currentCycleOrder);
        orders += currentCycleOrder + ", ";
        result += this.permutationToString("[" + cycle + "]") + this.CIRC;
      }
      orders = orders.substring(0, orders.lastIndexOf(", "));
      if (cycles.size > 1) {
        orders += "] = " + order;
      }
    result = result.substring(0, result.lastIndexOf(this.CIRC));
    }
    result += this.NEWLINE + orders + this.NEWLINE;
    return result;
  }
}

AlgorithmSteps.NEWLINE = "\n";
AlgorithmSteps.MULT = " * ";
AlgorithmSteps.CONG = " \u2261 ";           // " ≡ "
AlgorithmSteps.NOT_CONG = " \u2262 ";       // " ≢ "
AlgorithmSteps.PHI = "\u03c6";              // "φ"
AlgorithmSteps.PHIB = "\u03c6(";            // "φ("
AlgorithmSteps.NOT_DIVIDES = " \u2224 ";    // "∤"
AlgorithmSteps.TIMES = "\u00d7";            // "×"
AlgorithmSteps.SIGMA = "\u03c3";            // "σ"
AlgorithmSteps.CIRC = " \u25e6 ";           // " ◦ "
AlgorithmSteps.SEPARATOR = "--------------------" + AlgorithmSteps.NEWLINE;
