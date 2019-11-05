/**
 * Quadratic congruence of form x^2 ≡ a (mod m).
 * Useful to find quadratic residues.
 *
 * @author Valdemar Svabensky - Original code in Java. <395868(at)mail(dot)muni(dot)cz>
 * @author Mario Zak - Rewritten and modified code in JavaScript. <441270(at)mail(dot)muni(dot)cz>
 */
class QuadraticCongruenceSimpleProblem {
  /**
  * Instantiate with pseudo-randomly generated parameters or with user provided parameters.
  *
  * @param {String} difficulty One of LANGUAGE.difficulties
  * @param {Number} aaC Integer
  * @param {Number} mmC Positive integer
  */
  constructor(difficulty, aaC, mmC) {
    let aa, mm;
    if (aaC === undefined && mmC === undefined && difficulty !== undefined) {
      this.difficultyBounds = [{first: 2, second: 39}, {first: 11, second: 99}, {first: 11, second: 199}];
      let bounds = this.difficultyBounds[initBounds(difficulty)];
      let lowerBound = bounds.first;
      let upperBound = bounds.second;
      while (true) {
        aa = Algorithms.randInt(lowerBound, upperBound);
        if (lowerBound === 2) {
          mm = Algorithms.randPrime(lowerBound, upperBound);
        } else {
          mm = Algorithms.generateModulus(false);
        }
        if (Algorithms.quadraticCongruenceSimple(aa, mm).length !== 0) {
          break;
        }
      }
    } else if (aaC !== undefined && mmC !== undefined && difficulty === undefined) {
      aa = aaC;
      mm = mmC;
    } else {
      throw new Error("Invalid call of constructor");
    }
    this.setVariables(aa, mm);
  }

  setVariables(aa, mm) {
    this.a = aa;
    this.m = mm;
    this.result = Algorithms.quadraticCongruenceSimple(this.a, this.m);

    this.prepareProblemPlainText();
    this.prepareProblemLaTeX();
    this.prepareSolutionPlainText();
    this.prepareSolutionLaTeX();
  }

  prepareProblemPlainText() {
    let lineEnd = AlgorithmSteps.buildModLineEnd(this.m);
    this.problemPlainText = AlgorithmSteps.buildBinomialCongruence(1, 'x', 2, 0, -this.a, lineEnd);
  }

  prepareProblemLaTeX() {
    let tmp = DisplayUtils.prepareCongruencesMath(this.problemPlainText);
    this.problemLaTeX = DisplayUtils.prepareDisplayMath(tmp);
  }

  prepareSolutionPlainText() {
    this.solutionPlainText = AlgorithmSteps.quadraticCongruenceSimpleSteps('x', this.a, this.m);
  }

  prepareSolutionLaTeX() {
    this.solutionLaTeX = DisplayUtils.prepareBasicMath(this.solutionPlainText);
    this.solutionLaTeX = DisplayUtils.prepareCongruencesMath(this.solutionLaTeX);
    this.solutionLaTeX = DisplayUtils.prepareFractionsMath(this.solutionLaTeX);
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
