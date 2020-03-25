var MATHPROBLEM;

/**
 * The main function used for creating math problems.
 *
 * @author Valdemar Svabensky - Original code in Java. <395868(at)mail(dot)muni(dot)cz>
 * @author Mario Zak - Rewritten and modified code in JavaScript. <441270(at)mail(dot)muni(dot)cz>
 */

/**
* The main function that generates problems randomly or with parameters and renders it to the output window.
*
* @param {Boolean} random Determines whether the problem should be generated randomly or not
*/
function generate(random) {
  MATHPROBLEM = null;
  document.getElementById("checkSolutionField").style.color = "black";
  document.getElementById("checkSolutionField").classList.remove("placeholderwhite");

  for (let i = 1; i < 5; i++) {
    document.getElementById("parameterField" + i).classList.remove("placeholderwhite");
    document.getElementById("parameterField" + i).style.color = "black";
  }
  if (random) {
    activateRightSide();
  } else {
    rightButtonsActivation(true);
    cleanWindows();
  }
  var diff = getRadioValue();
  let params = []
  switch (Number(getDropDownValue())) {
    case 0:
      if (random) {
        MATHPROBLEM = new GCDProblem(diff, false, undefined, undefined);
      } else {
        params = UserInputChecker.checkIntegerParameters(2);
        if (params.length !== 0) {
          MATHPROBLEM = new GCDProblem(undefined, undefined, params[0], params[1]);
        }
      }
      break;
    case 1:
      if (random) {
        MATHPROBLEM = new BezoutProblem(diff, false, undefined, undefined);
      } else {
        params = UserInputChecker.checkNonNegativeParameters(2);
        if (params.length !== 0) {
          MATHPROBLEM = new BezoutProblem(undefined, undefined, params[0], params[1]);
        }
      }
      break;
    case 2:
      if (random) {
        MATHPROBLEM = new InverseModProblem(diff, undefined, undefined);
      } else {
        params.push(UserInputChecker.positiveNumberInput(document.getElementById("parameterField1")));
        params.push(UserInputChecker.positiveNumberInput(document.getElementById("parameterField2")));
        if (!params.includes(null)) {
          params = UserInputChecker.checkCoprimeParameters(true);
          if (params.length !== 0) {
            MATHPROBLEM = new InverseModProblem(undefined, params[0], params[1]);
          }
        }
      }
      break;
    case 3:
      if (random) {
        MATHPROBLEM = new EulerPhiProblem(diff, undefined, undefined);
      } else {
        params.push(UserInputChecker.positiveNumberResult(document.getElementById("parameterField1")));

        if (!params.includes(null)) {
          MATHPROBLEM = new EulerPhiProblem(undefined, params[0]);
        }
      }
      break;
    case 4:
      if (random) {
        MATHPROBLEM = new LinearCongruenceProblem(diff, undefined, undefined, undefined);
      } else {
        params = UserInputChecker.linearCongruenceNumberInput();
        if (params !== 0) {
          MATHPROBLEM = new LinearCongruenceProblem(undefined, params[0], params[1], params[2]);
        }
      }
      break;
    case 5:
      if (random) {
        MATHPROBLEM = new LinearCongruenceSystemProblem(diff, undefined, undefined, undefined, undefined);
      } else {
        let count = UserInputChecker.numberInput(document.getElementById("parameterField1"), 1, 4, false);
        if (count === null) {
            break;
        }
        let lParams = UserInputChecker.linearCongruenceSystemInput(count);
        if (lParams.length !== 0) {
          MATHPROBLEM = new LinearCongruenceSystemProblem(undefined, count, lParams[0], lParams[1], lParams[2]);
        }
      }
      break;
    case 6:
      if (random) {
        MATHPROBLEM = new UnitGroupElementOrderProblem(diff, undefined, undefined);
      } else {
        params.push(UserInputChecker.positiveNumberInput(document.getElementById("parameterField1")));
        params.push(UserInputChecker.numberInput(document.getElementById("parameterField2")));
        if (!params.includes(null)) {
          params = UserInputChecker.checkCoprimeParameters(true);
          if (params.length !== 0) {
            MATHPROBLEM = new UnitGroupElementOrderProblem(undefined, params[0], params[1]);
          }
        }
      }
      break;
    case 7:
      if (random) {
        MATHPROBLEM = new ModularPowerProblem(diff, undefined, undefined, undefined);
      } else {
        params.push(UserInputChecker.integerNumberInput(document.getElementById("parameterField1")));
        params.push(UserInputChecker.nonNegativeNumberInput(document.getElementById("parameterField2")));
        params.push(UserInputChecker.positiveNumberInput(document.getElementById("parameterField3")));
        if (!params.includes(null)) {
          MATHPROBLEM = new ModularPowerProblem(undefined, params[0], params[1], params[2]);
        }
      }
      break;
    case 8:
      document.getElementById("firstWindow").style.font = "26px/26px Georgia, Garamond, Serif";
      document.getElementById("secondWindow").style.font = "26px/26px Georgia, Garamond, Serif";
      document.getElementById("thirdWindow").style.font = "26px/26px Georgia, Garamond, Serif";
      if (random) {
        MATHPROBLEM = new LegendreSymbolProblem(diff, undefined, undefined);
      } else {
        params.push(UserInputChecker.integerNumberInput(document.getElementById("parameterField1")));
        params.push(UserInputChecker.primeInput(document.getElementById("parameterField2"), true));
        if (!params.includes(null)) {
          MATHPROBLEM = new LegendreSymbolProblem(undefined, params[0], params[1]);
        }
      }
      break;
    case 9:
      if (random) {
        MATHPROBLEM = new QuadraticCongruenceSimpleProblem(diff, undefined, undefined);
      } else {
        params.push(UserInputChecker.integerNumberInput(document.getElementById("parameterField1")));
        params.push(UserInputChecker.positiveNumberInput(document.getElementById("parameterField2")));
        if (!params.includes(null)) {
          MATHPROBLEM = new QuadraticCongruenceSimpleProblem(undefined, params[0], params[1]);
        }
      }
      break;
    case 10:
      if (random) {
        MATHPROBLEM = new QuadraticCongruenceGeneralProblem(diff, undefined, undefined, undefined, undefined);
      } else {
        params.push(UserInputChecker.nonZeroNumberInput(document.getElementById("parameterField1")));
        params.push(UserInputChecker.positiveNumberInput(document.getElementById("parameterField4")));
        if (Algorithms.isCoprime(params[0], params[1])) {
          params.push(UserInputChecker.integerNumberInput(document.getElementById("parameterField2")));
          params.push(UserInputChecker.integerNumberInput(document.getElementById("parameterField3")));
          if (!params.includes(null)) {
            MATHPROBLEM = new QuadraticCongruenceGeneralProblem(undefined, params[0], params[2], params[3], params[1]);
          }
        } else {
          UserInputChecker.error(document.getElementById("parameterField2"), LANGUAGE.coprime);
        }
      }
      break;
    case 11:
      if (random) {
        MATHPROBLEM = new BinomialCongruenceProblem(diff, undefined, undefined, undefined);
      } else {
        params.push(UserInputChecker.positiveNumberInput(document.getElementById("parameterField1")));
        params.push(UserInputChecker.integerNumberInput(document.getElementById("parameterField2")));
        params.push(UserInputChecker.positiveNumberInput(document.getElementById("parameterField3")));
        if (!params.includes(null)) {
          MATHPROBLEM = new BinomialCongruenceProblem(undefined, params[0], params[1], params[2]);
        }
      }
      break;
    case 12:
      if (random) {
        MATHPROBLEM = new PermutationOrderProblem(diff, undefined);
      } else {
        let size = UserInputChecker.numberInput(document.getElementById("parameterField1"), 1, 999, false);
        if (size == null) {
          break;
        }
        params = UserInputChecker.permutationInput(document.getElementById("parameterField2"), size);
        if (params.length !== 0) {
          MATHPROBLEM = new PermutationOrderProblem(undefined, params);
        }
      }
      break;
    default:
      return new Error("Unknown problem!");
  }
  if (MATHPROBLEM) {
    renderProblem(document.getElementById("firstOutput"));
  }
}
