/**
 * Solving Bezout's identity: finding d = gcd(a,b) and x, y such that ax + by = d.
 * Based on GCDProblem. Basis for InverseModProblem.
 *
 * @author Valdemar Svabensky - Original code in Java. <395868(at)mail(dot)muni(dot)cz>
 * @author Mario Zak - Rewritten and modified code in JavaScript. <441270(at)mail(dot)muni(dot)cz>
 */
class BezoutProblem {
  /**
  * Instantiate with pseudo-randomly generated parameters or with user provided parameters.
  *
  * @param {String} difficulty One of LANGUAGE.difficulties
  * @param {Boolean} coprimeNumbers Require generating coprime a, b (Used by InverseModProblem)
  * @param {Number} first Non-negative integer, first >= second
  * @param {Number} second Non-negative integer
  */
  constructor(difficulty, coprimeNumbers, first, second) {
    if (first === undefined && second === undefined && difficulty !== undefined) {
      this.gcdProblem = new GCDProblem(difficulty, coprimeNumbers, undefined, undefined);
    } else if (difficulty === undefined && coprimeNumbers === undefined && first !== undefined && second !== undefined) {
      this.gcdProblem = new GCDProblem(undefined, undefined, first, second);
    } else {
      throw new Error("Invalid call of constructor!");
    }
    this.setVariables();
  }

  setVariables() {
    this.a = this.gcdProblem.getA();
    this.b = this.gcdProblem.getB();
    this.result = Algorithms.bezout(this.a, this.b);

    this.prepareProblemPlainText();
    this.prepareProblemLaTeX();
    this.prepareSolutionPlainText();
    this.prepareSolutionLaTeX();
  }

  prepareProblemPlainText() {
    let sb = "";
    sb += LANGUAGE.bezout_1 + " d, x, y, " + LANGUAGE.bezout_2 + "\n";
    sb += this.a + "x + " + this.b + "y = d" + "\n";
    this.problemPlainText = sb;
  }

  prepareProblemLaTeX() {
    let sb = "";
    sb += "\\text{" + LANGUAGE.bezout_1 + " } d, x, y, \\text{" + LANGUAGE.bezout_2 + " } \\\\";
    sb += this.a + "x + " + this.b + "y = d\\\\";
    this.problemLaTeX = sb;
  }

  prepareSolutionPlainText() {
    let solutionGCD = this.gcdProblem.getSolutionPlainText();
    this.solutionBezout = AlgorithmSteps.bezoutSteps(this.a, this.b);
    this.solutionPlainText = solutionGCD + this.solutionBezout;
  }

  prepareSolutionLaTeX() {
    let solutionBezout = AlgorithmSteps.bezoutSteps(this.a, this.b);
    solutionBezout = DisplayUtils.prepareBasicMath(solutionBezout);
    solutionBezout = solutionBezout.replaceAll("=", "&=");
    solutionBezout = replaceLast(solutionBezout, "&=", "=");

    let solutionGCD = this.gcdProblem.getSolutionLaTeX();
    let newLineReplacementPosition = solutionGCD.lastIndexOf("{aligned}") + 9;
    solutionGCD = replaceLast(solutionGCD, "\\\\\n" + "\\end{aligned}", "\\\\" + AlgorithmSteps.NEWLINE);
    let sb = "";
    sb += solutionGCD + solutionBezout.replaceAll("\n", "\\\\\n");
    let newlineIndex = sb.indexOf(AlgorithmSteps.NEWLINE, newLineReplacementPosition);
    while (newlineIndex < sb.lastIndexOf(AlgorithmSteps.NEWLINE)) {
        sb.insert(newlineIndex, "\\\\\n");
        newlineIndex = sb.indexOf(AlgorithmSteps.NEWLINE, newlineIndex + 3);
    }
    this.solutionLaTeX = sb + "\\end{aligned}";
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

  getGcdProblem() {
    return this.gcdProblem;
  }

  getA() {
    return this.a;
  }

  getB() {
    return this.b;
  }
}
