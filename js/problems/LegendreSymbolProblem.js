/**
 * Legendre symbol.
 *
 * @author Valdemar Svabensky - Original code in Java. <395868(at)mail(dot)muni(dot)cz>
 * @author Mario Zak - Rewritten and modified code in JavaScript. <441270(at)mail(dot)muni(dot)cz>
 */
class LegendreSymbolProblem {
  /**
  * Instantiate with pseudo-randomly generated parameters or with user provided parameters.
  *
  * @param {String} difficulty One of LANGUAGE.difficulties
  * @param {Number} aaC Integer
  * @param {Number} ppC Odd prime
  */
  constructor(difficulty, aaC, ppC) {
    let aa, pp;

    if (aaC === undefined && ppC === undefined && difficulty !== undefined) {
      this.difficultyBounds = [{first: 31, second: 79}, {first: 411, second: 979}, {first: 3912, second: 8190}];
      let bounds = this.difficultyBounds[initBounds(difficulty)];
      let lowerBound = bounds.first;
      let upperBound = bounds.second;
      
      pp = Algorithms.randPrime(lowerBound, upperBound);
      aa = Algorithms.randInt(lowerBound, pp);

    } else if (difficulty === undefined && aaC !== undefined && ppC !== undefined) {
      aa = aaC;
      pp = ppC;
    } else {
      throw new Error("Invalid call of constructor");
    }
    this.setVariables(aa, pp);
  }

  setVariables(aa, pp) {
    this.a = aa;
    this.p = pp;
    this.result = [];
    this.result.push(Algorithms.legendreSymbol(this.a, this.p));

    this.prepareProblemPlainText();
    this.prepareProblemLaTeX();
    this.prepareSolutionPlainText();
    this.prepareSolutionLaTeX();
  }

  prepareProblemPlainText() {
    this.problemPlainText = AlgorithmSteps.buildLegendreSymbolEquals(this.a, this.p);
  }

  prepareProblemLaTeX() {
    let tmp = DisplayUtils.prepareFractionsMath(this.problemPlainText);
    this.problemLaTeX = DisplayUtils.prepareDisplayMath(tmp);
  }

  prepareSolutionPlainText() {
    this.solutionPlainText = AlgorithmSteps.legendreSymbolSteps(this.a, this.p);
  }

  prepareSolutionLaTeX() {
    this.solutionLaTeX = DisplayUtils.prepareBasicMath(this.solutionPlainText);
    this.solutionLaTeX = DisplayUtils.prepareFractionsMath(this.solutionLaTeX);
    this.solutionLaTeX = DisplayUtils.prepareAlignMath(this.solutionLaTeX);
    if (this.a && (this.a & (this.a - 1)) === 0) {
      let placeholder = "\\begin{aligned} \\text{" + LANGUAGE.legendre_1 + " }a\\text{ " + LANGUAGE.legendre_2 + "} \\end{aligned}\\\\";
      this.solutionLaTeX = placeholder + this.solutionLaTeX;
    }
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
}
