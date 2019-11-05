/**
 * System of 'i' linear congruences of type a_i*x ≡ b_i (mod n_i).
 * System of 1 congruence is a basis for LinearCongruenceProblem.
 *
 * @author Valdemar Svabensky - Original code in Java. <395868(at)mail(dot)muni(dot)cz>
 * @author Mario Zak - Rewritten and modified code in JavaScript. <441270(at)mail(dot)muni(dot)cz>
 */
class LinearCongruenceSystemProblem {
  /**
  * Instantiate with pseudo-randomly generated parameters or with user provided parameters.
  *
  * @param {String} difficulty One of LANGUAGE.difficulties
  * @param {Number} eC1 Number of equations, positive integer
  * @param {Array} aL1 List of integers
  * @param {Array} bL1 List of integers
  * @param {Array} nL1 List of positive integers
  */
  constructor(difficulty, eC1, aL1, bL1, nL1) {
    let aList1, bList1, nList1, equationCount1;

    if (eC1 === undefined && aL1 === undefined && bL1 === undefined && nL1 === undefined) {
      this.difficultyBounds = [{first: 2, second: 15}, {first: 15, second: 25}, {first: 10, second: 30}];
      let bounds = this.difficultyBounds[initBounds(difficulty)];
      let lowerBound = bounds.first;
      let upperBound = bounds.second;

      equationCount1 = (upperBound === 30) ? 3 : 2;

      while (true) {
        aList1 = [];
        bList1 = [];
        nList1 = [];
        for (let i = 0; i < equationCount1; ++i) {
          let aa = Algorithms.randInt(lowerBound, upperBound);
          if (difficulty === LANGUAGE.difficulties[0]) aa = 1;
          let bb = Algorithms.randInt(lowerBound, upperBound);
          let nn = Algorithms.randInt(lowerBound, upperBound);
          aList1.push(aa);
          bList1.push(bb);
          nList1.push(nn);
        }
        let solution = Algorithms.linearCongruenceSystem(equationCount1, aList1, bList1, nList1);
        if (solution.length !== 0) break;
      }
    } else if (difficulty === undefined) {
      aList1 = aL1;
      bList1 = bL1;
      nList1 = nL1;
      equationCount1 = eC1;
    } else {
      throw new Error("Invalid call of constructor");
    }
    this.setVariables(equationCount1, aList1, bList1, nList1);
  }

  setVariables(equationCount1, aList1, bList1, nList1) {
    this.equationCount = equationCount1;
    this.aList = [...aList1];
    this.bList = [...bList1];
    this.nList = [...nList1];
    this.result = [];
    this.regularSolution = false;

    let solution = Algorithms.linearCongruenceSystem(this.equationCount, this.aList, this.bList, this.nList);
    if (solution.length !== 0) {
      this.result.push(solution[0]);
      this.result.push(solution[1]);
      if (arraysEqual(solution, [0, 1]))
        this.regularSolution = true;
    }

    this.prepareProblemPlainText();
    this.prepareProblemLaTeX();
    this.prepareSolutionPlainText();
    this.prepareSolutionLaTeX();
  }

  prepareProblemPlainText() {
    let sb = "";
    for (let i = 0; i < this.equationCount; ++i) {
      let a = this.aList[i];
      let b = this.bList[i];
      let n = this.nList[i];
      let lineEnd = AlgorithmSteps.buildModLineEnd(n);
      sb += AlgorithmSteps.buildLinearCongruence(a, 'x', b, lineEnd);
    }
    this.problemPlainText = sb;
  }

  prepareProblemLaTeX() {
    this.problemLaTeX = DisplayUtils.prepareCongruencesMath(this.problemPlainText);
    this.problemLaTeX = DisplayUtils.prepareAlignMath(this.problemLaTeX);
  }

  prepareSolutionPlainText() {
    this.solutionPlainText = AlgorithmSteps.linearCongruenceSystemSteps(this.equationCount, this.aList, this.bList, this.nList);
  }

  prepareSolutionLaTeX() {
    this.solutionLaTeX = DisplayUtils.prepareBasicMath(this.solutionPlainText);
    this.solutionLaTeX = DisplayUtils.prepareCongruencesMath(this.solutionLaTeX);
    this.solutionLaTeX = DisplayUtils.prepareAlignMath(this.solutionLaTeX);
    this.solutionLaTeX = this.solutionLaTeX.replace("|", "\\mid");
    this.solutionLaTeX = this.solutionLaTeX.replace("∤", "\\nmid");
    if ((this.regularSolution) && ((this.equationCount != 1) || (!this.solutionLaTeX.contains("&=")))) {
      this.solutionLaTeX = DisplayUtils.prepareAlignatMath(this.solutionLaTeX);
    }
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
