/**
 * Linear congruence of type ax ≡ b (mod n).
 * Based on LinearCongruenceSystemProblem.
 *
 * @author Valdemar Svabensky - Original code in Java. <395868(at)mail(dot)muni(dot)cz>
 * @author Mario Zak - Rewritten and modified code in JavaScript. <441270(at)mail(dot)muni(dot)cz>
 */
class LinearCongruenceProblem {
  /**
  * Instantiate with pseudo-randomly generated parameters or with user provided parameters.
  *
  * @param {String} difficulty One of LANGUAGE.difficulties
  * @param {Number} a Integer
  * @param {Number} b Integer
  * @param {Number} c Positive integer
  */
  constructor(difficulty, a, b, c) {
    let aa, bb, nn;

    if (a === undefined && b === undefined && c === undefined && difficulty !== undefined) {
      this.difficultyBounds = [{first: 11, second: 50}, {first: 50, second: 300}, {first: 300, second: 700}];
      let bounds = this.difficultyBounds[initBounds(difficulty)];
      let lowerBound = bounds.first;
      let upperBound = bounds.second;

      while (true) {
        aa = Algorithms.randInt(lowerBound, upperBound);
        bb = Algorithms.randInt(lowerBound, upperBound);
        nn = Algorithms.randInt(lowerBound, upperBound);
        let solution = Algorithms.linearCongruence(aa, bb, nn);
        if (solution.length !== 0) break;
      }
    } else if (difficulty === undefined) {
        aa = a;
        bb = b;
        nn = c;
    } else {
      throw new Error("Invalid call of constructor");
    }
    this.setVariables(aa, bb, nn);
  }

  setVariables(aa, bb, nn) {
    let aList = [aa];
    let bList = [bb];
    let nList = [nn];
    this.lcsProblem = new LinearCongruenceSystemProblem(undefined, 1, aList, bList, nList);
    this.result = this.lcsProblem.getResult();

    this.prepareProblemPlainText();
    this.prepareProblemLaTeX();
    this.prepareSolutionPlainText();
    this.prepareSolutionLaTeX();
  }

  prepareProblemPlainText() {
    this.problemPlainText = this.lcsProblem.getProblemPlainText();
  }

  prepareProblemLaTeX() {
    this.problemLaTeX = this.lcsProblem.getProblemLaTeX();
  }

  prepareSolutionPlainText() {
    this.solutionPlainText = this.lcsProblem.getSolutionPlainText();
  }

  prepareSolutionLaTeX() {
    this.solutionLaTeX = this.lcsProblem.getSolutionLaTeX();
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
