/**
 * Various utility functions.
 *
 * @author Mario Zak <441270(at)mail(dot)muni(dot)cz>
 */

 /**
 * Disables dragging on webpage.
 */
window.ondragstart = function() {
  return false;
}

/**
* Replaces all occurences of a token in a string.
*
* @param {String} search Token(s) to be replaced
* @param {String} replacement Replacement string
* @return Modified string
*/
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

/**
* Inserts string at a given index
*
* @param {Number} index Non negative Integer
* @param {String} string Inserted string
* @return Modified string
*/
String.prototype.insert = function (index, string) {
  if (index > 0) {
    return this.substring(0, index) + string + this.substring(index, this.length);
  }
  return string + this;
};

/**
* Replaces string at a given index
*
* @param {Number} index Non negative Integer
* @param {String} string Inserted string
* @return Modified string
*/
String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

/**
* Function used to get value from exercise drop down.
*
* @return Drop down list value
*/
function getDropDownValue() {
  let e = document.getElementById("dropDownId");
  return e.options[e.selectedIndex].value;
}

/**
* Function used to get value from radio buttons.
*
* @return Radio button value
*/
function getRadioValue() {
  let radios = document.getElementById("radio").children;

  for (var i = 0, length = radios.length; i < length; i++) {
    let label = document.getElementById("option" + (i + 1));
    if (label.checked) {
      return radios[i].value;
    }
  }
}

/**
* Removes all characters from string up to the last occurence of character 'x'
*
* @param {String} string String to be modified
* @return Modified string
*/
function getXLine(string) {
  let index = 0;
  let replacement = ""
  for (let i = string.length - 1; i > 0; --i) {
    if (string[i] == 'x') {
      index = i;
      break;
    }
  }
  for (let i = index; i < string.length; ++i) {
    replacement += string[i];
  }
  return replacement;
}

/**
* Function used to replace last occurance of a substring in a string.
*
* @param {String} string String to be modified
* @param {String} substring Substring to be replaced
* @param {String} replacement Replacement string
* @return Modified string
*/
function replaceLast(string, substring, replacement) {
    let index = string.lastIndexOf(substring);
    if (index == -1) {
      return string;
    }

    let sb = string.substring(0, index);
    sb += replacement + string.substring(index + substring.length);
    return sb;
}

/**
* Function used to remove last '\n' in given string.
*
* @param {String} string Input string
* @return Input string without last '\n'
*/
function removeLastNewLine(string) {
    let result = "";
    let index = string.lastIndexOf("\n");
    result += string.substring(0, index);
    return result;
}

/**
* Checks whether or not the two given arrays are equal.
*
* @param {Array} array1 The first array
* @param {Array} array2 The second array
* @return True if the arrays are the same, false otherwise
*/
function arraysEqual(array1, array2) {
  return array1.length === array2.length && array1.every((value, index) => Number(value) === Number(array2[index]))
}

/**
* @param {Number} i Cycle counter
* @param {Number} terminator Cycle stop value
* @return True e.g. when i == 9 in cycle: for (int i = 0; i < 10; ++i)
*/
function lastForCycle(i, terminator) {
  return i == terminator - 1;
}

/**
* Determines the chosen difficulty by the user.
*
* @param {String} difficulty Chosen difficulty by the user
* @return 0 if the difficulty is easy, 1 for medium and 2 for hard
*/
function initBounds(difficulty) {
  switch (difficulty) {
    case LANGUAGE.difficulties[0]: return 0;
    case LANGUAGE.difficulties[1]: return 1;
    case LANGUAGE.difficulties[2]: return 2;
    default:
      return new Error("Unknown difficulty.")
  }
}

/**
* Copies exercise solution to clipboard.
*/
function copyToClipboard() {
  var doc = document.createElement("textarea");
  doc.innerHTML = MATHPROBLEM.getSolutionPlainText();
  document.body.appendChild(doc);
  var from = doc;
  var range = document.createRange();
  window.getSelection().removeAllRanges();
  range.selectNode(from);
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  document.body.removeChild(doc);
}

/**
* Pauses the execution for given milliseconds.
*
* @param {Number} ms milliseconds
*/
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
* Generates PDF by taking screenshot of the output window and exporting it to PDF file.
*/
async function generatePDF() {
  document.getElementById("exportPDFButton").disabled = true;
  document.getElementById("PDFLabel").innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" style="width: 1.15rem; height: 1.15rem;"></span>' + '&nbsp;&nbsp;&nbsp;' + LANGUAGE.export;
  await sleep(100);
  let d = new Date();
  let time = d.toLocaleTimeString();
  let date = d.toLocaleDateString();
  let problemHeight = document.getElementById("firstOutput").clientHeight;
  let solutionHeight = document.getElementById("secondOutput").clientHeight;

  let fit = (problemHeight + solutionHeight) < 842;
  let pdf = new jsPDF("portrait", "mm", fit ? "a4" : [595.28, problemHeight + solutionHeight]);
  var result = MATHPROBLEM.getProblemLaTeX() + "\\\\\\\\\\text{\n}\\\\\\\\\\\\\\\\" + MATHPROBLEM.getSolutionLaTeX();

  katex.render(result, document.getElementById("tmpOutput"), {
      throwOnError: false
  });
  htmlToCanvasToPDF(pdf, "tmpOutput", date, time);
  document.getElementById("tmpOutput").innerHTML = "";
  document.getElementById("PDFLabel").innerHTML = '<i class="fa fa-file-pdf-o fa-lg"></i>&nbsp;&nbsp;&nbsp;' + LANGUAGE.export;
  document.getElementById("exportPDFButton").disabled = false;
}

/**
* Utility function used for generating PDF by generatePDF() function.
*
* @param {Object} pdf jsPDF Object
* @param {Object} id id of the output window element
* @param {String} date date in String
* @param {String} time time in String
*/
function htmlToCanvasToPDF(pdf, id, date, time) {
  window.scrollTo(0, 0);
  html2canvas(document.querySelector("#" + id), {scale: 1, scrollX: 0, scrollY: 0}).then(canvas => {
    var img = canvas.toDataURL("image/jpeg", 1.0);
    pdf.addImage(img, 'JPEG', 10, 10);
    pdf.save("numbermat-" + date + "-" + time + ".pdf");
  });
}

/**
* Keyboard shortcuts on key up event.
*/
document.onkeyup = function(e) {
  var e = e || window.event;
  if (e.altKey && e.which == 76) {
    document.getElementById("radio1").click();
  } else if (e.altKey && e.which == 83) {
    document.getElementById("radio2").click();
  } else if (e.altKey && e.which == 84) {
    document.getElementById("radio3").click();
  } else if (e.altKey && e.which == 71) {
    generate(true);
  } else if (e.altKey && e.which == 78) {
    activateLeftSide();
  } else if (e.altKey && e.which == 86) {
    generate(false);
  } else if (e.altKey && e.which == 72) {
    document.getElementById("helpButton").click();
  } else if (e.which == 13) {
    document.getElementById("checkSolutionButton").click();
  } else if (e.altKey && e.which == 88) {
    document.getElementById("showSolutionLatexButton").click();
  } else if (e.altKey && e.which == 66) {
    document.getElementById("showSolutionTextButton").click();
  } else if (e.altKey && e.which == 75) {
    document.getElementById("copySolutionButton").click();
  } else if (e.altKey && e.which == 69) {
    document.getElementById("exportPDFButton").click();
  } else if (e.altKey && e.which == 82) {
    document.getElementById("restartButton").click();
  }
  return false;
}

/**
* Retrieves fragment identifier (two characters after the symbol '#') from URI.
*/
function getLanguageObject() {
  let hash = window.location.hash;
  if (hash.length === 0) {
    return sk;
  }
  return eval(hash.slice(1, 3));
}
