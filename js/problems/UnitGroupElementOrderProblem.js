/**
 * Finding order of an element in a group Zn^×.
 *
 * @author Valdemar Svabensky - Original code in Java. <395868(at)mail(dot)muni(dot)cz>
 * @author Mario Zak - Rewritten and modified code in JavaScript. <441270(at)mail(dot)muni(dot)cz>
 */
class UnitGroupElementOrderProblem {
  /**
  * Instantiate with pseudo-randomly generated parameters or with user provided parameters.
  *
  * @param {String} difficulty One of LANGUAGE.difficulties
  * @param {Number} element Positive integer
  * @param {Number} n Integer > 1
  */
  constructor(difficulty, element, n) {
    let element1 = 0;
    let n1 = 0;

    if (element === undefined && n === undefined && difficulty !== undefined) {
      this.difficultyBounds = [{first: 5, second: 11}, {first: 11, second: 37}, {first: 37, second: 97}];
      let bounds = this.difficultyBounds[initBounds(difficulty)];
      let lowerBound = bounds.first;
      let upperBound = bounds.second;

      while ((!Algorithms.isCoprime(element1, n1)) || (element1 > n1)) {
        element1 = Algorithms.randInt(2, 9);
        n1 = Algorithms.randInt(lowerBound, upperBound);
      }
    } else if (difficulty === undefined && element !== undefined && n !== undefined) {
      element1 = element;
      n1 = n;
    } else {
      throw new Error("Invalid call of constructor");
    }
    this.setVariables(element1, n1);
  }

  setVariables(element1, n1) {
    this.element = element1;
    this.n = n1;
    this.result = [];
    this.result.push(Algorithms.unitGroupElementOrder(this.element, this.n));

    this.prepareProblemPlainText();
    this.prepareProblemLaTeX();
    this.prepareSolutionPlainText();
    this.prepareSolutionLaTeX();
  }

  prepareProblemPlainText() {
    let sb = LANGUAGE.determine_order_elem + " [";
    sb += this.element + "] " + LANGUAGE.in_group + " Z";
    sb += this.n + "×." + AlgorithmSteps.NEWLINE;
    this.problemPlainText = sb;
  }

  prepareProblemLaTeX() {
    let sb = "\\text{" + LANGUAGE.determine_order_elem + " }[";
    sb += this.element + "]\\\\ \\text{ " + LANGUAGE.in_group + " }\\mathbb{Z}_{";
    sb += this.n + "}^\\times \\text{.}" + AlgorithmSteps.NEWLINE;
    this.problemLaTeX = sb;
  }

  prepareSolutionPlainText() {
    this.solutionPlainText = AlgorithmSteps.unitGroupElementOrderSteps(this.element, this.n);
  }

  prepareSolutionLaTeX() {
    this.solutionLaTeX = this.solutionPlainText.replaceAll("φ", "\\varphi");
    let f = this.solutionLaTeX.indexOf('{');

    for (let i = f; this.solutionLaTeX[i] !== '}'; ++i) {
      if (this.solutionLaTeX[i] === '\n') {
        let a = this.solutionLaTeX.substring(0, i);
        let b = "\\\\&";
        let c = this.solutionLaTeX.substring(i + 1, this.solutionLaTeX.length);
        this.solutionLaTeX = a + b + c;
      }
    }

    this.solutionLaTeX = this.prepareSetsMath(this.solutionLaTeX);
    this.solutionLaTeX = DisplayUtils.prepareCongruencesMath(this.solutionLaTeX);
    this.solutionLaTeX = DisplayUtils.prepareAlignMath(this.solutionLaTeX);
    this.solutionLaTeX = replaceLast(this.solutionLaTeX, "&=", "=");
    let sb = this.solutionLaTeX;
    this.fitToLine(sb, sb.indexOf(", "), sb.indexOf(LANGUAGE.group_order), 8);
    this.fitToLine(sb, sb.indexOf(LANGUAGE.possible_orders), sb.indexOf(LANGUAGE.element_order), 9);
    this.solutionLaTeX = sb.replaceAll("\\\\not &\\\\equiv", "\\not\\equiv");
    this.solutionLaTeX = sb.replaceAll("&\\\\equiv", "\\equiv");
    this.solutionLaTeX = this.solutionLaTeX.replaceAll("\\\\\\\\", "\\\\\n");
  }

  getProblemPlainText() {
    return this.problemPlainText;
  }

  getProblemLaTeX() {
    return this.problemLaTeX;
  }

  getSolutionPlainText() {
    return this.solutionPlainText;
  }

  getSolutionLaTeX() {
    return this.solutionLaTeX;
  }

  getResult() {
    return this.result;
  }

  prepareSetsMath(input) {
    let tmp = input.replaceAll("Z", "\\mathbb{Z}_{");
    //tmp = tmp.replaceAll("\\{", "\\\\{");
    //tmp = tmp.replaceAll("\\}", "\\\\}");
    tmp = tmp.replaceAll("\\×", "}^\\times");
    tmp = tmp.replaceAll("\\*", "}^\*");
    if (tmp.includes(LANGUAGE.order)) {
      tmp = tmp.replaceAll(LANGUAGE.group_order, "\\text{" + LANGUAGE.group_order + "}");
      tmp = tmp.replaceAll(LANGUAGE.possible_orders, "\\text{" + LANGUAGE.possible_orders + "}");
      tmp = tmp.replaceAll(LANGUAGE.element_order, "\\text{" + LANGUAGE.element_order + " }");
      tmp = tmp.replaceAll(LANGUAGE.is, "&\\text{ " + LANGUAGE.is + " }");
      tmp = tmp.replaceAll(":", "&\\colon");
    }
    return tmp;
  }

  fitToLine(sb, startIndex, stopIndex, itemsOnLine) {
    let counter = 1;
    while ((startIndex != -1) && (startIndex < stopIndex)) {
      if (counter % itemsOnLine === 0) {
        sb.replace(startIndex, startIndex + 2, ",\\\\&");
      }
      startIndex += 2;
      startIndex = sb.indexOf(", ", startIndex);
      counter++;
    }
  }
}
