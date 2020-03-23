/**
 * Modular exponentiation.
 *
 * @author Valdemar Svabensky - Original code in Java. <395868(at)mail(dot)muni(dot)cz>
 * @author Mario Zak - Rewritten and modified code in JavaScript. <441270(at)mail(dot)muni(dot)cz>
 */
class ModularPowerProblem {
  /**
  * Instantiate with pseudo-randomly generated parameters or with user provided parameters.
  *
  * @param {String} difficulty One of LANGUAGE.difficulties
  * @param {Number} bC Integer
  * @param {Number} eC Non-negative integer
  * @param {Number} mC Positive integer
  */
  constructor(difficulty, bC, eC, mC) {
    let b, e, m;

    if (bC === undefined && eC === undefined && mC === undefined && difficulty !== undefined) {
      this.difficultyBounds = [{first: 5, second: 11}, {first: 191, second: 257}, {first: 530, second: 881}];
      let bounds = this.difficultyBounds[initBounds(difficulty)];
      let lowerBound = bounds.first;
      let upperBound = bounds.second;

      b = Algorithms.randInt(lowerBound, upperBound);
      e = Algorithms.randInt(lowerBound, upperBound);
      m = Algorithms.randInt(lowerBound, upperBound);

      if (Algorithms.randInt(1, 5) === 1) {
        m = 100;
      }

    } else if (bC !== undefined && eC !== undefined && mC !== undefined && difficulty === undefined) {
      b = bC;
      e = eC;
      m = mC;
    } else {
      throw new Error("Invalid call of constructor");
    }
    this.setVariables(b, e, m);
  }

  setVariables(b, e, m) {
    this.base = b;
    this.exp = e;
    this.mod = m;
    this.result = [];
    this.result.push(Algorithms.modPow(b, e, m));

    this.prepareProblemPlainText();
    this.prepareProblemLaTeX();
    this.prepareSolutionPlainText();
    this.prepareSolutionLaTeX();
  }

  prepareProblemPlainText() {
    let lineStart = AlgorithmSteps.buildModPowLineStart(this.base, this.exp);
    let lineEnd = AlgorithmSteps.buildModLineEnd(this.mod);
    this.problemPlainText = lineStart += "x" + lineEnd;
  }

  prepareProblemLaTeX() {
    let tmp = DisplayUtils.prepareCongruencesMath(this.problemPlainText);
    this.problemLaTeX = DisplayUtils.prepareDisplayMath(tmp);
  }

  prepareSolutionPlainText() {
    let sb = this.problemPlainText;
    sb += AlgorithmSteps.SEPARATOR;
    sb += AlgorithmSteps.modPowSteps(this.base, this.exp, this.mod);
    this.solutionPlainText = sb;
  }

  prepareSolutionLaTeX() {
    this.solutionLaTeX = DisplayUtils.prepareBasicMath(this.solutionPlainText);
    this.solutionLaTeX = DisplayUtils.prepareCongruencesMath(this.solutionLaTeX);
    this.solutionLaTeX = DisplayUtils.prepareAlignMath(this.solutionLaTeX);
    this.solutionLaTeX = DisplayUtils.prepareAlignatMath(this.solutionLaTeX);
    this.solutionLaTeX = this.solutionLaTeX.replaceAll("\\\\\\\\", "\\\\\n");
    this.solutionLaTeX = this.solutionLaTeX.replaceAll("\\\\hline", "\\hline \\\\[-2.6ex]");
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
}
