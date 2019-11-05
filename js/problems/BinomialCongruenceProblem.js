/**
 * Binomial congruence of form x^n ≡ a (mod m).
 *
 * @author Valdemar Svabensky - Original code in Java. <395868(at)mail(dot)muni(dot)cz>
 * @author Mario Zak - Rewritten and modified code in JavaScript. <441270(at)mail(dot)muni(dot)cz>
 */
class BinomialCongruenceProblem {
  /**
  * Instantiate with pseudo-randomly generated parameters or with user provided parameters.
  *
  * @param {String} difficulty One of LANGUAGE.difficulties
  * @param {Number} nnC Positive integer
  * @param {Number} aaC Integer
  * @param {Number} mmC Positive integer > 1 so that primitive roots mod m exist
  */
  constructor(difficulty, nnC, aaC, mmC) {
    let nn = Algorithms.randInt(3, 5);
    let aa, mm;
    if (nnC === undefined && aaC === undefined && mmC === undefined && difficulty !== undefined) {
      this.difficultyBounds = [{first: 2, second: 11}, {first: 9, second: 19}, {first: 2, second: 37}];
      let bounds = this.difficultyBounds[initBounds(difficulty)];
      let lowerBound = bounds.first;
      let upperBound = bounds.second;

      while (true) {
        aa = Algorithms.randInt(lowerBound, upperBound);
        if (lowerBound === 2) {
            mm = Algorithms.generateModulus(false);
        } else {
          mm = Algorithms.randPrime(lowerBound, upperBound);
        }
        if (Algorithms.binomialCongruence(nn, aa, mm).length !== 0) {
          break;
        }
      }
    } else if (difficulty === undefined && nnC !== undefined && aaC !== undefined && mmC !== undefined) {
      nn = nnC;
      aa = aaC;
      mm = mmC;
    } else {
      throw new Error("Invalid call of constructor");
    }
    this.setVariables(nn, aa, mm);
  }

  setVariables(nn, aa, mm) {
    this.n = nn;
    this.a = aa;
    this.m = mm;
    this.result = Algorithms.binomialCongruence(this.n, this.a, this.m);

    this.prepareProblemPlainText();
    this.prepareProblemLaTeX();
    this.prepareSolutionPlainText();
    this.prepareSolutionLaTeX();
  }

  prepareProblemPlainText() {
    let lineEnd = AlgorithmSteps.buildModLineEnd(this.m);
    this.problemPlainText = AlgorithmSteps.buildBinomialCongruence(1, 'x', this.n, 0, -this.a, lineEnd);
  }

  prepareProblemLaTeX() {
    let tmp = DisplayUtils.prepareCongruencesMath(this.problemPlainText);
    this.problemLaTeX = DisplayUtils.prepareDisplayMath(tmp);
  }

  prepareSolutionPlainText() {
    this.solutionPlainText = AlgorithmSteps.binomialCongruenceSteps(this.n, this.a, this.m);
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
