/**
 * Euler's totient (phi) function.
 *
 * @author Valdemar Svabensky - Original code in Java. <395868(at)mail(dot)muni(dot)cz>
 * @author Mario Zak - Rewritten and modified code in JavaScript. <441270(at)mail(dot)muni(dot)cz>
 */
class EulerPhiProblem {
  /**
  * Instantiate with pseudo-randomly generated parameters or with user provided parameters.
  *
  * @param {String} difficulty One of LANGUAGE.difficulties
  * @param {Number} number Positive integer
  */
  constructor(difficulty, number) {
    let nn;

    if (number === undefined && difficulty !== undefined) {
      this.difficultyBounds = [{first: 1, second: 99}, {first: 100, second: 999}, {first: 1000, second: 2999}];
      let bounds = this.difficultyBounds[initBounds(difficulty)];
      let lowerBound = bounds.first;
      let upperBound = bounds.second;

      nn = Algorithms.randInt(lowerBound, upperBound);
    } else if (difficulty === undefined) {
      nn = number;
    } else {
      throw new Error("Invalid call of constructor");
    }
    this.setVariables(nn);
  }

  setVariables(nn) {
    this.n = nn;
    this.result = [];
    this.result.push(Algorithms.eulerPhi(this.n));
    this.prepareProblemPlainText();
    this.prepareProblemLaTeX();
    this.prepareSolutionPlainText();
    this.prepareSolutionLaTeX();
  }

  prepareProblemPlainText() {
    this.problemPlainText = AlgorithmSteps.buildPhiEquals(this.n);
  }

  prepareProblemLaTeX() {
    this.problemLaTeX = DisplayUtils.prepareDisplayMath(this.problemPlainText);
  }

  prepareSolutionPlainText() {
    this.solutionPlainText = AlgorithmSteps.eulerPhiSteps(this.n);
  }

  prepareSolutionLaTeX() {
    if (this.n == 1) {
      this.solutionLaTeX = "\\begin{aligned}" + AlgorithmSteps.NEWLINE + "\\varphi(1) &= 1" + "\\end{aligned}";
    } else {
      this.solutionLaTeX = DisplayUtils.prepareBasicMath(this.solutionPlainText);
      this.solutionLaTeX = DisplayUtils.prepareAlignMath(this.solutionLaTeX);
      this.solutionLaTeX = this.solutionLaTeX.replaceAll("\\\\\\\\", "\\\\\n");
    }
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

  getN() {
    return this.n;
  }
}
