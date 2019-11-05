/**
 * Quadratic congruence of form ax^2 + bx + c ≡ 0 (mod m).
 *
 * @author Valdemar Svabensky - Original code in Java. <395868(at)mail(dot)muni(dot)cz>
 * @author Mario Zak - Rewritten and modified code in JavaScript. <441270(at)mail(dot)muni(dot)cz>
 */
class QuadraticCongruenceGeneralProblem {
  /**
  * Instantiate with pseudo-randomly generated parameters or with user provided parameters.
  *
  * @param {String} difficulty One of LANGUAGE.difficulties
  * @param {Number} aaC Integer
  * @param {Number} bbC Integer
  * @param {Number} ccC Integer
  * @param {Number} mmC Positive integer coprime with a
  */
  constructor(difficulty, aaC, bbC, ccC, mmC) {
    let aa, bb, cc, mm;

    if (aaC === undefined && bbC === undefined && ccC === undefined && mmC === undefined && difficulty !== undefined) {
      this.difficultyBounds = [{first: 2, second: 39}, {first: 11, second: 99}, {first: 11, second: 199}];
      let bounds = this.difficultyBounds[initBounds(difficulty)];
      let lowerBound = bounds.first;
      let upperBound = bounds.second;

      while (true) {
        aa = Algorithms.randInt(lowerBound, upperBound);
        bb = Algorithms.randInt(lowerBound, upperBound);
        cc = Algorithms.randInt(lowerBound, upperBound);
        if (lowerBound === 2) {
          mm = Algorithms.randPrime(lowerBound, upperBound);
        } else {
          mm = Algorithms.generateModulus(true);
        }
        if (!Algorithms.isCoprime(aa, mm)) {
          continue;
        }
        if (Algorithms.quadraticCongruenceGeneral(aa, bb, cc, mm).length !== 0) {
          break;
        }
      }
    } else if (difficulty === undefined && aaC !== undefined && bbC !== undefined && ccC !== undefined && mmC !== undefined) {
      aa = aaC;
      bb = bbC;
      cc = ccC;
      mm = mmC;
    } else {
      throw new Error("Invalid call of constructor");
    }
    this.setVariables(aa, bb, cc, mm);
  }

  setVariables(aa, bb, cc, mm) {

    this.a = aa;
    this.b = bb;
    this.c = cc;
    this.m = mm;
    this.result = Algorithms.quadraticCongruenceGeneral(this.a, this.b, this.c, this.m);

    this.prepareProblemPlainText();
    this.prepareProblemLaTeX();
    this.prepareSolutionPlainText();
    this.prepareSolutionLaTeX();
  }

  prepareProblemPlainText() {
    let lineEnd = AlgorithmSteps.buildModLineEnd(this.m);
    this.problemPlainText = AlgorithmSteps.buildBinomialCongruence(this.a, 'x', 2, this.b, this.c, lineEnd);
    this.problemPlainText = this.problemPlainText.replace("(mod", "\\quad(");
  }

  prepareProblemLaTeX() {
    let tmp = DisplayUtils.prepareCongruencesMath(this.problemPlainText);
    this.problemLaTeX = DisplayUtils.prepareDisplayMath(tmp);
  }

  prepareSolutionPlainText() {
    this.solutionPlainText = AlgorithmSteps.quadraticCongruenceGeneralSteps(this.a, this.b, this.c, this.m);
  }

  prepareSolutionLaTeX() {
    this.solutionLaTeX = DisplayUtils.prepareBasicMath(this.solutionPlainText);
    this.solutionLaTeX = DisplayUtils.prepareCongruencesMath(this.solutionLaTeX);
    this.solutionLaTeX = DisplayUtils.prepareFractionsMath(this.solutionLaTeX);
    this.solutionLaTeX = DisplayUtils.prepareAlignMath(this.solutionLaTeX);
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
