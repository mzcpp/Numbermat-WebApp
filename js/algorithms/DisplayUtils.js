/**
 * Methods for manipulating strings containing math, converting them to LaTeX format.
 *
 * @author Valdemar Svabensky - Original code in Java. <395868(at)mail(dot)muni(dot)cz>
 * @author Mario Zak - Rewritten and modified code in JavaScript. <441270(at)mail(dot)muni(dot)cz>
 */

class DisplayUtils {
  constructor() {
    throw Error("This class should not be instantiated!");
  }

  /**
  * Replaces ASCII symbols commonly used in this program for their LaTeX equivalents.
  *
  * @param {String} input Text
  * @return Text with "\cdot" instead of "*" and "\varphi" instead of "φ".
  */
  static prepareBasicMath(input) {
    let tmp = input.replaceAll("\\*", "\\cdot");
    return tmp.replaceAll("φ", "\\varphi");
  }

  /**
  * Changes ASCII math congruences symbols for their LaTeX equivalents.
  *
  * @param {String} input Text
  * @return Text with e.g. "\equiv" instead of "≡" or \pmod{n} instead of "(mod n)"
  */
  static prepareCongruencesMath(input) {
    let tmp = input.replaceAll(AlgorithmSteps.CONG, " \\equiv ");
    tmp = tmp.replaceAll(AlgorithmSteps.NOT_CONG, " \\not\\equiv ");
    tmp = tmp.replaceAll(AlgorithmSteps.SEPARATOR, "\\hline ");
    tmp = tmp.replaceAll("   ", "\\quad ");
    if (tmp.includes("riešení") || tmp.includes("riešenie")) {
      tmp = tmp.replaceAll("Neexistuje", "&\\text{Neexistuje ");
      tmp = tmp.replaceAll("Existuje", "&\\text{Existuje ");
      tmp = tmp.replaceAll(" riešení.", " riešení.}");
      tmp = tmp.replaceAll(" riešenie.", " riešenie.}");
    } else if (tmp.includes("řešení")) {
      tmp = tmp.replaceAll("Neexistuje", "&\\text{Neexistuje ");
      tmp = tmp.replaceAll("Existuje", "&\\text{Existuje ");
      tmp = tmp.replaceAll(" řešení.", " řešení.}");
    } else if (tmp.includes("solutions") || tmp.includes("solution")) {
      tmp = tmp.replaceAll("There are", "&\\text{There are ");
      tmp = tmp.replaceAll(" solutions.", " solutions.}");
      tmp = tmp.replaceAll("No", "&\\text{No ");
      tmp = tmp.replaceAll(" exists.", " exists.}");
    }

    let numbers = this.matchNumbers(input);
    for (let i = 0; i < numbers.length; ++i) {
      let n = numbers[i];
      tmp = tmp.replaceAll("\\(mod " + n + "\\)", "\\pmod{" + n + "}");
    }
    return tmp;
  }

  static matchNumbers(input) {
    return input.match(/\d+/g).map(Number);
  }

  /**
  * Searches for substrings of type "(a/b)" and replaces them with LaTeX fractions.
  * Can be called only after prepareCongruencesMath()!
  *
  * @param {String} input Text with substrings of type "(a/b)"
  * @return Text with "\frac{a}{b}" instead of "(a/b)"
  */
  static prepareFractionsMath(input) {
    if (!input.includes("/")) {
        return input;
    }
    let fracBegin = "\\left(\\tfrac{";
    let fracEnd = "}\\right)";
    let tmp = input;
    let numbers = this.matchNumbers(tmp);

    for (let i = 0; i < numbers.length; i += 2) {
      if (i + 1 < numbers.length) {
        let n1 = numbers[i];
        let n2 = numbers[i + 1];
        tmp = tmp.replaceAll("\\(" + n1 + "\\/" + n2 + "\\)", fracBegin + n1 + "}{" + n2 + fracEnd);
      }
    }
    return tmp;
  }

  /**
  * Prepares LaTeX align environment.
  *
  * @param input Text
  * @return String "\begin{align} Text \end{align}" with added & operators
  */
  static prepareAlignMath(input) {
    let tmp = input.replaceAll("=", "&=");
    tmp = tmp.replaceAll("\\\\equiv", " &\\equiv");
    tmp = tmp.replaceAll("\\\\pmod", " &\\pmod");
    tmp = tmp.replaceAll("\\\\quad", " &\\quad");
    tmp = tmp.replaceAll("\\\\not&\\\\equiv", " &\\not\\equiv");

    let sb = "";
    sb += "\\begin{aligned}" + AlgorithmSteps.NEWLINE + tmp;

    // Insert LaTeX newline symbol: "\\"  at the position of NEWLINE
    let newLineReplacementBeginning = sb.lastIndexOf("{aligned}") + 9;
    let newlineIndex = sb.indexOf(AlgorithmSteps.NEWLINE, newLineReplacementBeginning);
    while (newlineIndex < sb.lastIndexOf(AlgorithmSteps.NEWLINE)) {
      sb.insert(newlineIndex, "\\\\");
      newlineIndex = sb.indexOf(AlgorithmSteps.NEWLINE, newlineIndex + 3);
    }
    sb = sb.replaceAll("\n", "\\\\");
    return sb + "\\end{aligned}";
  }

  /**
  * Prepares LaTeX align environment.
  *
  * @param input Text
  * @return String "\begin{align} Text \end{align}" with added & operators
  */
  static prepareAlignatMath(input) {
    let tmp = input.replace("\\begin{aligned}", "\\begin{alignedat}{2}");
    tmp = tmp.replace("\\end{aligned}", "\\end{alignedat}");
    //tmp = tmp.replaceAll("\\pmod", "&\\pmod");
    tmp = tmp.replaceAll("÷", "\\div");
    let sb = "";
    let lines = tmp.split("\n");

    for (var i = 0; i < lines.length; i++) {
      if (lines[i].split("&").length === 2) {
        lines[i] = lines[i].replace("\\\\", " &\\\\");
      }
      sb += lines[i] + AlgorithmSteps.NEWLINE;
    }
    return sb;
  }

  /**
  * Prepares LaTeX matrix environment from ArrayList.toString().
  *
  * @param input Text
  * @return String "\begin{pmatrix} Text \end{pmatrix}" with added & operators.
  */
  static prepareMatrix(input) {
    let tmp = input.replaceAll(",", " &");
    tmp = tmp.replaceAll("\\(", "").replaceAll("\\)", "");
    tmp = tmp.replaceAll(AlgorithmSteps.NEWLINE, "\\\\\\\\" + AlgorithmSteps.NEWLINE);

    let sb = "";
    sb += "\\begin{pmatrix}" + AlgorithmSteps.NEWLINE;
    sb += tmp + AlgorithmSteps.NEWLINE;
    sb += "\\end{pmatrix}" + AlgorithmSteps.NEWLINE;
    return sb;
  }

  static prepareDisplayMath(input) {
    return this.prepareBasicMath(input);
  }
}
