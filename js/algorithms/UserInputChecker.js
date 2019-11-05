/**
 * Methods for checking user input in GUI text fields (parameters or answer).
 *
 * @author Valdemar Svabensky - Original code in Java. <395868(at)mail(dot)muni(dot)cz>
 * @author Mario Zak - Rewritten and modified code in JavaScript. <441270(at)mail(dot)muni(dot)cz>
 */

class UserInputChecker {
  constructor() {
    throw new Error("This class should not be instantiated!");
  }

  /**
  * Checks if user input is a single integer within specified range.
  *
  * @param {Object} element Document element
  * @param {Number} min Lowest number allowed
  * @param {Number} max Highest number allowed
  * @param {Boolean} zero Is zero allowed?
  * @return Parsed number or null in case of error
  */
  static numberInput(element, min, max, zero) {
    Algorithms.notLessThanCheck(max, min);
    let value = Number(element.value);

    if (isNaN(value) || (value === 0 && !zero) || (value < min || value > max) || value % 1 !== 0 || element.value.trim() === "") {
      let msg = "";
      msg += LANGUAGE.please_integer + " [" + min;
      msg += ", " + max + "].";
      msg += ((min < 1) && (!zero)) ? " " + LANGUAGE.no_zero : "";
      this.error(element, msg);
      return null;
    } else {
      element.style.backgroundColor = "";
      return value;
    }
  }

  /**
  * Checks if user input is a single prime.
  *
  * @param {Object} element Document element
  * @param {Number} odd are only odd primes allowed?
  * @return Parsed number or null in case of error
  */
  static primeInput(element, odd) {
    let value = Number(element.value);

    if (isNaN(value) || (value === 2 && !odd) || !Algorithms.isPrime(value)) {
      let msg = LANGUAGE.enter + " ";
      msg += (odd ? LANGUAGE.odd + " " : "") + LANGUAGE.prime + ".";
      this.error(element, msg);
      return null;
    } else {
      element.style.backgroundColor = "";
      return value;
    }
  }

  /**
  * Checks if user input is a single positive integer.
  *
  * @param {Object} element Document element
  * @return Parsed number or null in case of error
  */
  static positiveNumberInput(element) {
      return this.numberInput(element, 1, UserInputChecker.MAX_INT, false);
  }

  /**
  * Checks if user input is a single non-negative integer.
  *
  * @param {Object} element Document element
  * @return Parsed number or null in case of error
  */
  static nonNegativeNumberInput(element) {
      return this.numberInput(element, 0, UserInputChecker.MAX_INT, true);
  }

  /**
  * Checks if user input is a single non-zero integer.
  *
  * @param {Object} element Document element
  * @return Parsed number or null in case of error
  */
  static nonZeroNumberInput(element) {
      return this.numberInput(element, UserInputChecker.MIN_INT, UserInputChecker.MAX_INT, false);
  }

  /**
  * Checks if user input is a single integer within range specified in UserInputChecker class.
  *
  * @param {Object} element Document element
  * @return Parsed number or null in case of error
  */
  static integerNumberInput(element) {
      return this.numberInput(element, UserInputChecker.MIN_INT, UserInputChecker.MAX_INT, true);
  }

  /**
  * Shortcut for parameter checking of several fields at once. Each parameter from user input is a single integer.
  *
  * @param {Number} count Amount of parameters given
  * @return Checked numbers in ArrayList or empty ArrayList in case of error
  */
  static checkIntegerParameters(count) {
    let result = [];
    for (let i = 1; i < count + 1; ++i) {
      let n = this.integerNumberInput(document.getElementById("parameterField" + i));
      if (n == null) {
        return [];
      }
      result.push(Number(n));
    }
    return result;
  }

  /**
  * Shortcut for parameter checking of several fields at once. Each parameter from user input is a single non-negative integer.
  *
  * @param {Number} count Amount of parameters given
  * @return Checked numbers in ArrayList or empty ArrayList in case of error
  */
  static checkNonNegativeParameters(count) {
    let result = []
    for (let i = 1; i < count + 1; ++i) {
      let n = this.nonNegativeNumberInput(document.getElementById("parameterField" + i));
      if (n == null) {
        return [];
      }
      result.push(Number(n));
    }
    return result;
  }

  /**
  * Shortcut for parameter checking of several fields at once. User input consists of 2 coprime integers.
  *
  * @param {Boolean} firstIsSmaller Requires that the first number is smaller
  * @return Checked numbers in ArrayList or empty ArrayList in case of error
  */
  static checkCoprimeParameters(firstIsSmaller) {
    let result = this.checkIntegerParameters(2);

    if (result.length > 0) {
      if (!Algorithms.isCoprime(result[0], result[1])) {
        this.error(document.getElementById("parameterField2"), LANGUAGE.coprime);
      } else if ((firstIsSmaller) && (result[0] >= result[1])) {
        this.error(document.getElementById("parameterField1"), LANGUAGE.smaller);
      } else {
        return result;
      }
    }
    return [];
  }

  /**
  * Checks if user input is a list of numbers separated by space within specified range.
  *
  * @param {Object} element Document element
  * @param {Integer} count Expected amount of numbers given
  * @param {Integer} min Lowest number allowed
  * @param {Boolean} zero Is zero allowed?
  * @param {String} errorMsg Error message text
  * @return Parsed numbers in List or empty ArrayList in case of error
  */
  static numberListInput(element, count, min, zero, errorMsg) {
    let result = this.parse(element, count);

    if (result.length > 0) {
      for (let i = 0; i < count; ++i) {
        if (result[i] < min || ((result[i] === 0) && !zero)) {
          this.error(element, errorMsg);
          return [];
        }
      }
    }
    return result;
  }

  /**
  * Checks if user input is a list of numbers separated by space forming a permutation.
  *
  * @param {Object} element Document element
  * @param {Integer} count Expected amount of numbers given
  * @return Parsed permutation in list or empty ArrayList in case of error
  */
  static permutationInput(element, count) {
    let msg = LANGUAGE.not_perm;
    let input = this.parse(element, count);
    try {
      Algorithms.permutationCheck(input);
    } catch (e) {
      this.error(element, msg);
      return [];
    }
    return input;
  }

  /**
  * Single linear congruence parameter checking.
  *
  * @return Checked numbers for linear congruence or empty ArrayList in case of error
  */
  static linearCongruenceNumberInput() {
    let a = this.integerNumberInput(document.getElementById("parameterField1"));
    let b = this.integerNumberInput(document.getElementById("parameterField2"));
    let n = this.positiveNumberInput(document.getElementById("parameterField3"));
    let result = [a, b, n];
    if (result.includes(null)) {
      return [];
    }
    return result;
  }

  /**
  * Linear congruence system parameter checking.
  *
  * @param {Integer} count number of congruences
  * @return Checked parameters for linear congruence system or empty ArrayList in case of error
  */
  static linearCongruenceSystemInput(count) {
    let aList = this.numberListInput(document.getElementById("parameterField2"), count,
    UserInputChecker.MIN_INT, true, LANGUAGE.only_integers);
    let bList = this.numberListInput(document.getElementById("parameterField3"), count,
    UserInputChecker.MIN_INT, true, LANGUAGE.only_integers);
    let nList = this.numberListInput(document.getElementById("parameterField4"), count,
    1, false, LANGUAGE.only_positive);
    let result = [];

    if (aList.length !== 0 && bList.length !== 0 && nList.length !== 0) {
      result.push(aList);
      result.push(bList);
      result.push(nList);
    }
    return result;
  }

  /**
  * Checking user answers from userAnswerField. Any positive integer is allowed.
  *
  * @param {Object} element Document element
  * @return List containing checked positive integer or empty ArrayList in case of error
  */
  static positiveNumberResult(element) {
    let actualResult = [];
    let userAnswer = this.positiveNumberInput(element);
    if (userAnswer !== null) {
      actualResult.push(userAnswer);
    }
    return actualResult;
  }

  /**
  * Checking user answers from userAnswerField. Any positive integer is allowed.
  *
  * @param {Object} element Document element
  * @return List containing checked positive integer or empty ArrayList in case of error
  */
  static nonNegativeNumberResult(element) {
    let actualResult = [];
    let userAnswer = this.nonNegativeNumberInput(element);
    if (userAnswer !== null) {
      actualResult.push(userAnswer);
    }
    return actualResult;
  }

  /**
  * Checking user answers from userAnswerField. Any positive integer within specified range is allowed.
  *
  * @param {Object} element Document element
  * @param {Number} min min
  * @param {Number} min max
  * @return List containing checked integer within specified range or empty ArrayList in case of error
  */
  static numberResult(element, min, max) {
    let actualResult = [];
    let userAnswer = this.numberInput(element, min, max, (min < 1));

    if (userAnswer !== null) {
      actualResult.push(userAnswer);
    }
    return actualResult;
  }

  /**
  * Checking user answers from userAnswerField. Any <count> integers are allowed.
  *
  * @param {Object} element Document element
  * @param {Number} count Required amount of integers in list, e.g. 2 for pair
  * @return List containing parsed coefficients or empty ArrayList in case of error
  */
  static listResult(element, count) {
    return this.parse(element, count);
  }

  static removeWhiteSpace(string) {
    return string.replace(/\s/g, "");
  }

  /**
  * Parses user input and checks if it is a list of integers separated by space or comma.
  *
  * @param {Object} element Document element
  * @param {Number} count Number of tokens
  * @return List containing parsed input or empty ArrayList
  */
  static parse(element, count) {
    try {
      let input = element.value;
      let tokens = this.removeWhiteSpace(input).split(","); // try to split on commas
      if (tokens.length != count) {
        tokens = input.trim();
        tokens = tokens.split(" "); // then on whitespace
        if (tokens.length != count) {
          throw new Error("Invalid number of arguments");
        }
      }
      let result = []

      for (let i = 0; i < count; ++i) {
        if (tokens[i].trim() === "" || isNaN(Number(tokens[i]))) {
          throw new Error("Invalid number.");
        }
        let number = Number(tokens[i]);
        result.push(number);

        if (number < UserInputChecker.MIN_INT || number > UserInputChecker.MAX_INT) {
          throw new RangeError("Invalid range.");
        }
      }
      element.style.backgroundColor = "";
      return result
    } catch (e) {
        let msg = "";
        if (count == 0) {
          msg = LANGUAGE.no_solution;
        } else {
          msg = LANGUAGE.enter + " " + count + LANGUAGE.integers;
        }
        this.error(element ,msg);
        return [];
      }
  }

  /**
  * Checks whether the solution given by the user is correct or not.
  */
  static checkSolution() {
    let solutionField = document.getElementById("checkSolutionField");
    let expectedResult = [MATHPROBLEM.getResult()];
    let actualResult = solutionField.value.split(" ").map(x => Number(x));
    solutionField.style.backgroundColor = "";

    if (Array.isArray(MATHPROBLEM.getResult())) {
      expectedResult = expectedResult[0];
    }

    switch (Number(getDropDownValue())) {
      case 0:
      case 2:
      case 3:
      case 6:
      case 12:
        actualResult = this.positiveNumberResult(solutionField);
        break;
      case 1:
      case 5:
      case 4:
      case 9:
      case 10:
      case 11:
        actualResult = this.listResult(solutionField, expectedResult.length);
        break;
      case 7:
        actualResult = this.nonNegativeNumberResult(solutionField);
        break;
      case 8:
        actualResult = this.numberResult(solutionField, -1, 1);
        break;
      default:
        return new Error("Unknown problem!");
    }
    if (actualResult.length !== 0) {
      document.getElementById("checkSolutionField").style.color = "black";
      document.getElementById("checkSolutionField").classList.remove("placeholderwhite");
      for (let i = 1; i < 5; i++) {
        document.getElementById("parameterField" + i).classList.remove("placeholderwhite");
        document.getElementById("parameterField" + i).style.color = "black";
      }
      if (arraysEqual(expectedResult, actualResult)) {
        document.getElementById("correctSolution").style.opacity = 1;
        document.getElementById("wrongSolution").style.opacity = 0;
      } else {
        document.getElementById("correctSolution").style.opacity = 0;
        document.getElementById("wrongSolution").style.opacity = 1;
      }
    }
    rightButtonsActivation(true);
  }

  /**
  * Opens a pop-up window with error message.
  *
  * @param {Object} element Document element
  * @param {String} msg Error message
  */
  static error(element, msg) {
    rightButtonsActivation(false);
    element.style.backgroundColor = "rgb(254, 0, 2)";
    element.style.color = "white";
    element.classList.add("placeholderwhite");
    setTimeout(function () {
      alert(msg);
    }, 5);
  }
}

UserInputChecker.MAX_INT = 999999;
UserInputChecker.MIN_INT = -999999;
