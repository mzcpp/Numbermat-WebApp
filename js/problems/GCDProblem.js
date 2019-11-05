/**
 * Greatest common divisor of 2 integers. Basis for BezoutProblem and InverseModProblem
 *
 * @author Valdemar Svabensky - Original code in Java. <395868(at)mail(dot)muni(dot)cz>
 * @author Mario Zak - Rewritten and modified code in JavaScript. <441270(at)mail(dot)muni(dot)cz>
 */
class GCDProblem {
  /**
  * Instantiate with pseudo-randomly generated parameters or with user provided parameters.
  *
  * @param {String} difficulty One of LANGUAGE.difficulties
  * @param {Number} coprimeNumbers Require generating coprime a, b (Used by InverseModProblem)
  * @param {Number} first Integer
  * @param {Number} second Integer
  */
  constructor(difficulty, coprimeNumbers, first, second) {
    let aa, bb;

    if (first === undefined && second === undefined && difficulty !== undefined) {
      this.difficultyBounds = [{first: 1, second: 127}, {first: 128, second: 1023}, {first: 512, second: 4095}];
      let bounds = this.difficultyBounds[initBounds(difficulty)];
      let lowerBound = bounds.first;
      let upperBound = bounds.second;

      if (coprimeNumbers) {
        let coprimes = Algorithms.randCoprime(lowerBound, upperBound);
        aa = coprimes[0];
        bb = coprimes[1];
      } else {
        aa = Algorithms.randInt(lowerBound, upperBound);
        bb = Algorithms.randInt(lowerBound, upperBound);
      }
    } else if (difficulty === undefined && coprimeNumbers === undefined) {
      aa = first;
      bb = second;
    } else {
      throw new Error("Invalid call of constructor");
    }
    this.setVariables(aa, bb);
  }

  setVariables(aa, bb) {
    if (bb < aa) {
      this.a = aa;
      this.b = bb;
    } else {
      this.a = bb;
      this.b = aa;
    }
    this.result = Algorithms.gcd(this.a, this.b);

    this.prepareProblemPlainText();
    this.prepareProblemLaTeX();
    this.prepareSolutionPlainText();
    this.prepareSolutionLaTeX();
  }

  prepareProblemPlainText() {
    this.problemPlainText = AlgorithmSteps.buildGCDEquals(this.a, this.b);
  }

  prepareProblemLaTeX() {
    this.problemLaTeX = DisplayUtils.prepareDisplayMath(this.problemPlainText);
  }

  prepareSolutionPlainText() {
    this.solutionPlainText = AlgorithmSteps.gcdSteps(this.a, this.b);
  }

  prepareSolutionLaTeX() {
    this.solutionLaTeX = DisplayUtils.prepareBasicMath(this.solutionPlainText);
    this.solutionLaTeX = DisplayUtils.prepareAlignMath(this.solutionLaTeX);
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

  getA() {
    return this.a;
  }

  getB() {
    return this.b;
  }
}
