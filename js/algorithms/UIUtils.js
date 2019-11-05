/**
 * Various utility functions that affect the UI.
 *
 * @author Mario Zak <441270(at)mail(dot)muni(dot)cz>
 */

 /**
 * Activates or deactivates parameter fields so the user can or can't submit parameters.
 *
 * @param {Boolean} boolean Fields active?
 * @param {Number} opacity Opacity of the labels
 * @param {Number} n Number of fields
 */
function parametersActivation(boolean, opacity, n) {
  let e = document.getElementById("dropDownId");
  for (let i = 1; i < n + 1; ++i) {
    if (boolean) {
      document.getElementById("parameterField" + i).value = LANGUAGE.params[e.selectedIndex][i - 1];
    } else {
      document.getElementById("parameterField" + i).value = "";
      document.getElementById("parameterField" + i).style.backgroundColor = "";
    }
    document.getElementById("parameterField" + i).disabled = !boolean;
    document.getElementById("parameterText" + i).style.opacity = opacity;
  }
  document.getElementById("generateWithParametersButton").disabled = !boolean;
}

/**
* Cleans both output windows.
*/
function cleanWindows() {
  document.getElementById("firstOutput").innerHTML = "";
  document.getElementById("secondOutput").innerHTML = "";
  document.getElementById("checkSolutionField").value = "";
  document.getElementById("checkSolutionField").style.backgroundColor = "";
  document.getElementById("correctSolution").style.opacity = 0;
  document.getElementById("wrongSolution").style.opacity = 0;
}

/**
* Activates or deactivates right buttons.
*
* @param {Boolean} boolean Buttons active?
*/
function rightButtonsActivation(boolean) {
  document.getElementById("showSolutionLatexButton").disabled = !boolean;
  document.getElementById("showSolutionTextButton").disabled = !boolean;
  document.getElementById("copySolutionButton").disabled = !boolean;
  document.getElementById("exportPDFButton").disabled = !boolean;
  document.getElementById("checkSolutionField").disabled = !boolean;
  document.getElementById("checkSolutionButton").disabled = !boolean;
}

/**
* Cleans output and input contents (windows, parameter and answer fields).
*/
function cleanBothSides() {
  document.getElementById("checkSolutionField").style.color = "black";
  document.getElementById("checkSolutionField").classList.remove("placeholderwhite");

  for (let i = 1; i < 5; i++) {
    document.getElementById("parameterField" + i).classList.remove("placeholderwhite");
    document.getElementById("parameterField" + i).style.color = "black";
  }
  parametersActivation(false, 0.3, 4);
  rightButtonsActivation(false);
  cleanWindows();
}

/**
* Checks whether the given solution is correct or not.
*
* @param {element} element DOM element into which the problem is rendered
*/
function renderProblem(element) {
  katex.render(MATHPROBLEM.getProblemLaTeX(), element, {
      throwOnError: false
  });
}

/**
* Checks whether the given solution is correct or not.
*
* @param {element} element DOM element into which the solution is rendered
*/
function renderSolution(element) {
  katex.render(MATHPROBLEM.getSolutionLaTeX(), element, {
      throwOnError: false
  });
}

/**
* Shows text solution to the user.
*/
function showTextSolution() {
  if (document.getElementById("firstOutput").innerHTML !== "") {
    document.getElementById("secondOutput").onselectstart = new Function ("return true;");
    document.getElementById("secondOutput").style.cursor = "auto";
    document.getElementById("secondOutput").style.marginTop = "0px";
    document.getElementById("secondOutput").style.marginLeft = "0px";
    document.getElementById("secondOutput").innerHTML = MATHPROBLEM.getSolutionPlainText();
  }
}

/**
* Shows LaTeX solution to the user.
*/
function showLaTeXSolution() {
  if (document.getElementById("firstOutput").innerHTML !== "") {
    document.getElementById("secondOutput").onselectstart = new Function ("return false;");
    document.getElementById("secondOutput").style.cursor = "default";
    document.getElementById("secondOutput").style.marginTop = "10px";
    document.getElementById("secondOutput").style.marginLeft = "5px";
    renderSolution(document.getElementById("secondOutput"));
  }
}

/**
* Cleans output and input contents (windows, parameter and answer fields) and activates the left side.
*/
function activateLeftSide() {
  cleanBothSides();
  let e = document.getElementById("dropDownId");
  parametersActivation(true, 1, LANGUAGE.params[e.selectedIndex].length);
}

/**
* Cleans output and input contents (windows, parameter and answer fields) and activates the right side.
*/
function activateRightSide() {
  cleanBothSides();
  parametersActivation(false, 0.3, 4);
  rightButtonsActivation(true);
}

/**
* Shows help text about an exercise in the tutorial window.
*
* @param {Number} index index of the exercise in array
* @param {Number} numberOfParams Number of parameters the exercise requires
*/
function showHelpText(index, numberOfParams) {
  let dropDown = document.getElementById("exercisesDropDown").children;
  document.getElementById("tutorialOutput").innerHTML = "<p style='font-size: 20px;'><br><b>" + dropDown[index].innerHTML + "</b><br><br></p>";
  document.getElementById("tutorialOutput").innerHTML += "<b>" + LANGUAGE.input + "</b><br>";
  let kth = 0;
  let nth = 1;

  for (let j = 0; j < numberOfParams; ++j) {
    document.getElementById("tutorialOutput").innerHTML += nth + ".) " + LANGUAGE.params[index][kth] + "<br>";
    ++nth;
    ++kth;
  }
  document.getElementById("tutorialOutput").innerHTML += "<br><b>" + LANGUAGE.output + "</b><br>";
  document.getElementById("tutorialOutput").innerHTML += LANGUAGE.results[index] + "<br>";
  document.getElementById("tutorialOutput").innerHTML += "<br><b>" + LANGUAGE.format + "</b><br>";
  document.getElementById("tutorialOutput").innerHTML += LANGUAGE.result_formats[index] + "<br><br>";
}

/**
* Shows help text about an definition in the tutorial window.
*
* @param {Number} index index of the definition in array
*/
function showDefinition(index) {
  let dropDown = document.getElementById("definitionsDropDown").children;
  document.getElementById("tutorialOutput").innerHTML = "<p style='font-size: 20px;'><br><b>" + dropDown[index].innerHTML + "</b><br><br></p>";
  document.getElementById("tutorialOutput").innerHTML += LANGUAGE.definitions_text[index] + "<br><br>";
}

/**
* Shows help text about an definition in the tutorial window.
*/
function about() {
  document.getElementById("tutorialOutput").innerHTML = "<p style='font-size: 20px;'><br><b>" + LANGUAGE.about + "</b><br><br></p>";
  document.getElementById("tutorialOutput").innerHTML += LANGUAGE.about_text;
}

/**
* Changes the tick symbol on the radio button.
*
* @param {Object} rad Button element
* @param {Object} opt Input element
* @param {Object} dyn Div element
*/
function changeTick(rad, opt, dyn) {
  for (var i = 1; i < 4; i++) {
    let radio = document.getElementById(rad + i);
    let option = document.getElementById(opt + i);
    let dynamic = document.getElementById(dyn + i);
    let checked = !(dynamic.innerHTML === radio.value);

    if (option.checked && !checked) {
      dynamic.innerHTML = "<i class=\"fa fa-check fa-lg\"></i>&nbsp;&nbsp;" + radio.value;
    }

    if (option.checked && checked) {
      dynamic.innerHTML = radio.value;
      option.checked = false;
    }
  }
}

function showKeyShortcuts() {
  document.getElementById("tutorialOutput").innerHTML = "<p style='font-size: 20px;'><br><b>" + LANGUAGE.keys + "</b><br><br></p>";
  document.getElementById("tutorialOutput").innerHTML += LANGUAGE.keys_text;
}

/**
* Changes the language in the whole web application.
*
* @param {Object} language object that contains translations
*/
function applyLanguage(language) {
  LANGUAGE = language;
  cleanBothSides();
  document.title = language.title;
  document.getElementById("tutorialOutput").innerHTML = "";

  for (let i = 1; i < 4; i++) {
    document.getElementById("radio" + i).value = language.difficulties[i - 1];
    if (document.getElementById("option" + i).checked) {
      document.getElementById("dynamic" + i).innerHTML = '<i class="fa fa-check fa-lg"></i>&nbsp;&nbsp' + language.difficulties[i - 1];
    } else {
      document.getElementById("dynamic" + i).innerHTML = language.difficulties[i - 1];
    }
  }

  for (let i = 0; i < 13; i++) {
    document.getElementById("dropDownId").children[i].innerHTML = language.exercises[i];
    document.getElementById("exercisesDropDown").children[i].innerHTML = language.exercises[i];
  }

  for (let i = 0; i < 16; i++) {
    document.getElementById("definitionsDropDown").children[i].innerHTML = language.definitions[i];
  }

  document.getElementById("parameterText1").innerHTML = language.parameter_1;
  document.getElementById("parameterText2").innerHTML = language.parameter_2;
  document.getElementById("parameterText3").innerHTML = language.parameter_3;
  document.getElementById("parameterText4").innerHTML = language.parameter_4;

  document.getElementById("generateRandomButton").innerHTML = language.generate_random;
  document.getElementById("setParametersButton").innerHTML = language.set_parameters;
  document.getElementById("helpLabel").innerHTML = '<i class="fa fa-question fa-lg" style="font-size: 1.45rem;"></i>&nbsp;&nbsp;&nbsp;' + language.help;
  document.getElementById("restartLabel").innerHTML = '<i class="fa fa-refresh fa-lg" style="font-size: 1.3rem;"></i>&nbsp;&nbsp;&nbsp;' + language.restart;
  document.getElementById("generateWithParametersButton").innerHTML = language.generate_parameters;

  document.getElementById("latexLabel").innerHTML = '<i class="fa fa-lightbulb-o fa-lg" style="font-size: 1.7rem;"></i>&nbsp;&nbsp;&nbsp;' + language.show_latex;
  document.getElementById("textLabel").innerHTML = '<i class="fa fa-lightbulb-o fa-lg" style="font-size: 1.7rem;"></i>&nbsp;&nbsp;&nbsp;' + language.show_text;
  document.getElementById("copyLabel").innerHTML = '<i class="fa fa-clipboard fa-lg"></i>&nbsp;&nbsp;&nbsp;' + language.copy;
  document.getElementById("PDFLabel").innerHTML = '<i class="fa fa-file-pdf-o fa-lg"></i>&nbsp;&nbsp;&nbsp;' + language.export;
  document.getElementById("checkLabel").innerHTML = '<i class="fa fa-search fa-lg" style="font-size: 1.3rem;"></i>&nbsp;&nbsp;&nbsp;' + language.check_answer;

  document.getElementById("typeLabel").innerHTML = language.description;
  document.getElementById("definitionsLabel").innerHTML = language.definition;
  document.getElementById("keyShortCutsLabel").innerHTML = language.keys;
  document.getElementById("aboutLabel").innerHTML = language.about;
  document.getElementById("checkSolutionField").placeholder = language.placeholder;
  document.getElementById("closeModal").innerHTML = language.close;
  document.getElementById("helpModalLongTitle").innerHTML = language.help;

  document.getElementById("logoImage").innerHTML = language.logo_image;
  document.getElementById("diffImage").innerHTML = language.difficulty_image;
  document.getElementById("typeImage").innerHTML = language.type_image;

  return language;
}
