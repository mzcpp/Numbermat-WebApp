/**
 * Finding order of a permutation.
 *
 * @author Valdemar Svabensky - Original code in Java. <395868(at)mail(dot)muni(dot)cz>
 * @author Mario Zak - Rewritten and modified code in JavaScript. <441270(at)mail(dot)muni(dot)cz>
 */
class PermutationOrderProblem {
  /**
  * Instantiate with pseudo-randomly generated parameters or with user provided parameters.
  *
  * @param {String} difficulty One of LANGUAGE.difficulties
  * @param {Array} permutationC Permutation (a subgroup of Sn for n >= 1)
  */
  constructor(difficulty, permutationC) {
    let perm;
    if (permutationC === undefined && difficulty !== undefined) {
      this.difficultyBounds = [{first: 2, second: 5}, {first: 6, second: 8}, {first: 9, second: 9}];
      let bounds = this.difficultyBounds[initBounds(difficulty)];
      let lowerBound = bounds.first;
      let upperBound = bounds.second;

      let size = Algorithms.randInt(lowerBound, upperBound);
      perm = Algorithms.randPermutation(size);
    } else if (difficulty === undefined && permutationC !== undefined) {
      perm = permutationC;
    } else {
      throw new Error("Invalid call of constructor");
    }
    this.setVariables(perm);
  }

  setVariables(perm) {
    this.permutation = [...perm];
    this.result = [];
    this.result.push(Algorithms.permutationOrderList(this.permutation));

    this.prepareProblemPlainText();
    this.prepareProblemLaTeX();
    this.prepareSolutionPlainText();
    this.prepareSolutionLaTeX();
  }

  prepareProblemPlainText() {
    let sb = "";
    sb += LANGUAGE.determine_order_perm + " " + AlgorithmSteps.SIGMA + " = ";
    let matrix = AlgorithmSteps.permutationToMatrix(this.permutation);
    sb += AlgorithmSteps.NEWLINE + matrix;
    this.problemPlainText = sb;
  }

  prepareProblemLaTeX() {
    let sb = "";
    sb += "\\text{" + LANGUAGE.determine_order_perm + " }\\sigma = \\\\";
    let matrix = AlgorithmSteps.permutationToMatrix(this.permutation);
    matrix = DisplayUtils.prepareMatrix(matrix);
    sb += AlgorithmSteps.NEWLINE + DisplayUtils.prepareDisplayMath(matrix);
    this.problemLaTeX = sb;
  }

  prepareSolutionPlainText() {
    this.solutionPlainText = AlgorithmSteps.permutationOrderSteps(this.permutation);
  }

  prepareSolutionLaTeX() {
    let solution = this.solutionPlainText.replaceAll(AlgorithmSteps.CIRC, "\\circ");
    this.solutionLaTeX = DisplayUtils.prepareAlignMath("\\sigma = " + solution);
    let t = Algorithms.permutationCycles(this.permutation);
    if (Algorithms.permutationCycles(this.permutation).size > 1) {
        this.solutionLaTeX = replaceLast(this.solutionLaTeX, "&=", "=");
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
