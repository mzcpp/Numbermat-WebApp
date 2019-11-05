/**
 * Finding an inverse to a number modulo n. Based on BezoutProblem.
 *
 * @author Valdemar Svabensky - Original code in Java. <395868(at)mail(dot)muni(dot)cz>
 * @author Mario Zak - Rewritten and modified code in JavaScript. <441270(at)mail(dot)muni(dot)cz>
 */
class InverseModProblem {
  /**
  * Instantiate with pseudo-randomly generated parameters or with user provided parameters.
  *
  * @param {String} difficulty One of LANGUAGE.difficulties
  * @param {Number} first Positive integer
  * @param {Number} second Positive integer, (first, second) = 1
  */
  constructor(difficulty, first, second) {
    if (first === undefined && second === undefined) {
      this.bezoutProblem = new BezoutProblem(difficulty, true, undefined, undefined);
    } else if (difficulty === undefined) {
      this.bezoutProblem = new BezoutProblem(undefined, undefined, first, second);
    } else {
      throw new Error("Invalid call of constructor!");
    }
    this.setVariables();
  }

  setVariables() {
    this.a = this.bezoutProblem.getGcdProblem().getA();
    this.b = this.bezoutProblem.getGcdProblem().getB();
    let bezout = this.bezoutProblem.getResult();
    this.result = []
    this.result.push(Algorithms.normalizeIntModulo(bezout[2], this.a));

    this.prepareProblemPlainText();
    this.prepareProblemLaTeX();
    this.prepareSolutionPlainText();
    this.prepareSolutionLaTeX();
  }

  prepareProblemPlainText() {
    let sb = "[" + this.b + "]^(-1)";
    sb += AlgorithmSteps.buildModLineEnd(this.a) + " = ";
    this.problemPlainText = sb;
  }

  prepareProblemLaTeX() {
    let sb = "\[" + this.b + "\]^{-1}_{" + this.a + "} = ";
    this.problemLaTeX = sb;
  }

  prepareSolutionPlainText() {
    let solutionBezout = this.bezoutProblem.getSolutionPlainText();
    let replacement = getXLine(solutionBezout);
    let sb = removeLastNewLine(this.problemPlainText);
    sb += " = " + this.result[0] + AlgorithmSteps.NEWLINE;
    this.solutionPlainText = replaceLast(solutionBezout, replacement, sb);
  }

  prepareSolutionLaTeX() {
    let solutionBezout = this.bezoutProblem.getSolutionLaTeX();
    let replacement = getXLine(solutionBezout);
    let sb = "\[" + this.b + "\]^{-1}_{" + this.a + "} &= " + this.result[0] + "\\\\\n\\end{aligned}";
    this.solutionLaTeX = replaceLast(solutionBezout, replacement, sb);
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

  getBezoutProblem() {
    return this.bezoutProblem;
  }

  getResult() {
    return this.result;
  }

  getA() {
    return this.a;
  }

  getB() {
    return this.b;
  }
}
