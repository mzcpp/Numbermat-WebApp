/**
* Object with values in the English language.
*
* @author Mario Zak <441270(at)mail(dot)muni(dot)cz>
*/

en = {
  title: "Numbermat: Math Problem Generator",

  difficulties: ["Easy", "Medium", "Hard"],

  exercises: [
    "Greatest common divisor",
    "Bézout's identity",
    "Modular multiplicative inverse",
    "Euler's totient function",
    "Linear congruence",
    "System of linear congruences",
    "Order of an element in a group",
    "Modular exponentiation",
    "Legendre symbol",
    "Quadratic congruence (binomial)",
    "Quadratic congruence (general)",
    "Binomial congruence",
    "Order of permutation"
  ],

  logo_image: '<img src="images/logoEN.png"></div>',
  difficulty_image: '<img src="images/difficultyEN.png"></div>',
  type_image: '<img src="images/typeEN.png"></div>',

  bezout_1: "Find numbers",
  bezout_2: "such that",
  legendre_1: "Because",
  legendre_2: "is a power of 2, we get:",

  generate_random: "Generate</br>randomly",
  set_parameters: "Set</br>parameters",
  parameter_1: "Parameter #1",
  parameter_2: "Parameter #2",
  parameter_3: "Parameter #3",
  parameter_4: "Parameter #4",
  help: "Help",
  restart: "Restart",
  restart_2: "Restart Confirmation",
  restart_3: "Would you like to restart the application?",
  restart_4: "Cancel",
  generate_parameters: "Generate</br>with parameters",
  show_latex: "Show solution (LaTeX)",
  show_text: "Show solution (text)",
  copy: "Copy solution",
  export: "Export to PDF",
  check_answer: "Check",
  placeholder: "Field for answer",

  description: "Description of math problems",
  definition: "Definitions",
  keys: "Keyboard Shortcuts",
  about: "About",
  close: "Close",

  input: "Input:",
  output: "Output:",
  format: "Format of solution:",

  please_integer: "Please enter integer in range",
  no_zero: "Zero is not allowed.",
  coprime: "The numbers must be coprime!",
  smaller: "The first number must be smaller than the second!",
  enter: "Please, enter",
  odd: "odd",
  even: "even",
  prime: "prime number",
  not_perm: "The entered sequence is not a permutation",
  only_integers: "Array must contain only integers.",
  only_positive: "Array must contain only positive numbers.",
  integers: " integer coefficients separated by space",
  no_solution: "The assignment does not have a solution.",
  solution: "solution",
  solutions: "solutions",
  not_exists: "There is no",
  exists: "There is",

  order: "Order",
  group_order: "Order of group",
  possible_orders: "Possible orders of elements",
  element_order: "Order of element",
  determine_order_elem: "Determine order of element",
  in_group: "in group",
  determine_order_perm: "Determine order of permutation",
  in_group: "in group",
  is: "is",
  solution_not_exists: "No solution exists.",
  infinite_solutions: "There are infinitely many solutions.",

  definitions: [
    "Basic properties of divisibility",
    "Greatest common divisor",
    "Least common multiple",
    "Prime number",
    "Fundamental theorem of arithmetic",
    "Modular inverse m",
    "Perfect number",
    "Euler's totient function",
    "Euler's theorem",
    "Congruence",
    "Fermat's little theorem",
    "Multiplicative order",
    "Primitive root modulo m",
    "Chinese remainder theorem",
    "Quadratic and power residue",
    "Legendre symbol"
  ],

  params: [
    ["Integer (a)", "Integer (b)"],
    ["Non negative integer (a)", "Non negative integer (b)"],
    ["Positive integer (a)", "Positive integer (n)"],
    ["Positive integer (n)"],
    ["Integer (a)", "Integer (b)", "Positive integer (n)"],
    ["Number of equations (max. 4)", "Integers (a_i)", "Integers (b_i)", "Positive integers (n_i)"],
    ["Positive integer (element)", "Modulus (min. 2)"],
    ["Integer (b)", "Non negative integer (e)", "Positive integer (m)"],
    ["Integer (a)", "Odd prime number (p)"],
    ["Integer (a)", "Positive integer (m)"],
    ["Non zero integer (a)", "Integer (b)", "Integer (c)", "Positive integer, (a, m) = 1"],
    ["Positive integer (n)", "Integer (a)", "Positive integer (m)"],
    ["Number of elements (max. 10))", "Permutation"]
  ],

  results: [
    "(<i>a</i>, <i>b</i>).",
    "Numbers <i>d</i>, <i>x</i>, <i>y</i>, such that <i>ax</i> + <i>by</i> = <i>d</i> = (<i>a</i>, <i>b</i>).",
    "Number <i>x</i>, such that <i>ax</i> ≡ 1 (mod <i>n</i>).",
    "φ(<i>n</i>).",
    "Two numbers <i>r</i>, <i>t</i>, such that <i>x</i> ≡ <i>r</i> (mod <i>t</i>) is the solution to congruence <i>ax</i> ≡ <i>b</i> (mod <i>n</i>).",
    "Two numbers <i>r</i>, <i>t</i>, such that <i>x</i> ≡ <i>r</i> (mod <i>t</i>) is the solution to congruences <i>a_i</i> <i>x</i> ≡ <i>b_i</i> (mod <i>n_i</i>).",
    "Order <i>k</i> of element <i>e</i> of a group, i.e. such number, that <i>e</i>^<i>k</i> = 1.",
    "Number <i>x</i>, such that <i>b</i>^<i>e</i> ≡ <i>x</i> (mod <i>m</i>).",
    "Legendre symbol (<i>a</i> / <i>p</i>).",
    "List of non negative numbers <i>r1</i>, <i>r2</i>, ..., <i>rn</i>, <i>t</i> such that <i>x</i> ≡ <i>r_i</i> (mod <i>t</i>) is the solution to congruence<br><i>x</i>^2 ≡ <i>a</i> (mod <i>m</i>).",
    "List of non negative numbers <i>r1</i>, <i>r2</i>, ..., <i>rn</i>, <i>t</i> such that <i>x</i> ≡ <i>r_i</i> (mod <i>t</i>) is the solution to congruence<br><i>ax</i>^2 + <i>bx</i> + <i>c</i> ≡ 0 (mod <i>m</i>).",
    "List of non negative numbers <i>r1</i>, <i>r2</i>, ..., <i>rn</i>, <i>t</i> such that <i>x</i> ≡ <i>r_i</i> (mod <i>t</i>) is the solution to congruence<br><i>x</i>^<i>n</i> ≡ <i>a</i> (mod <i>m</i>).",
    "Order of permutation σ, i.e. such number, that σ^<i>k</i> = id."
  ],

  definitions_text: [
    "Integer <i>a</i> divides integer <i>b</i> (or <i>b</i> is divisible by <i>a</i>, also <i>b</i> is a multiple of <i>a</i>), if there exists an"
    + " integer <i>c</i>, such that <i>a</i> * <i>c</i> = <i>b</i> holds. We denote <i>a</i> | <i>b</i>." +
    "<br>If <i>a</i> is an arbitrary number, then <i>a</i> | <i>a</i>; for arbitrary numbers <i>a</i>, <i>b</i>, <i>c</i>, the following 4 implications hold:"
    + "<br><br><i>a</i> | <i>b</i> ∧ <i>b</i> | <i>c</i> ⇒ <i>a</i> | <i>c</i><br>" +
    "<i>a</i> | <i>b</i> ∧ <i>b</i> | <i>c</i> ⇒ <i>a</i> | <i>b</i> + <i>c</i> ∧ <i>a</i> | <i>b</i> - <i>c</i><br>" +
    "<i>c</i> ≠ 0 ⇒ (<i>a</i> | <i>b</i> ⇔ <i>a</i> * <i>c</i> | <i>b</i> * <i>c</i>)<br>" +
    "<i>a</i> | <i>b</i> ∧ <i>b</i> > 0 ⇒ <i>a</i> ≤ <i>b</i>",

    "Let <i>a</i>, <i>b</i> be integers. Arbitrary integer <i>m</i>, such that <i>m</i> | <i>a</i>, <i>m</i> | <i>b</i>, is called common divisor of <i>a</i>, <i>b</i>.<br>" +
    " Common divisor <i>m</i> ≥ 0 of <i>a</i>, <i>b</i> which is divisible by arbitrary common divisor of <i>a</i>, <i>b</i> is called " +
    "greatest common divisor of <i>a</i>, <i>b</i>. We denote (<i>a</i>, <i>b</i>) (sometimes also gcd(<i>a</i>, <i>b</i>) or nsd(<i>a</i>, <i>b</i>)).<br><br>" +
    "Integers <i>a_1</i>, <i>a_2</i>, ..., <i>a_n</i> are called co-prime, if (<i>a_1</i>, <i>a_2</i>, ..., <i>a_n</i>) = 1 holds.<br>" +
    "From definition we can deduce, that for arbitrary integers <i>a</i>, <i>b</i> these properties hold:<br><br>" +
    "(<i>a</i>, <i>b</i>) = (<i>b</i>, <i>a</i>)<br>(<i>a</i>, 1) = 1<br>(<i>a</i>, 0) = |<i>a</i>|",

    "Let <i>a</i>, <i>b</i> be integers. Least common multiple is the smallest natural number, that is divisible by both <i>a</i>, <i>b</i>. We denote [<i>a</i>, <i>b</i>] (also lcm(<i>a</i>, <i>b</i>) or nsn(<i>a</i>, <i>b</i>)).<br>"
    + "From definition we can deduce, that for arbitrary integers <i>a</i>, <i>b</i> these properties hold:<br><br>" + "[<i>a</i>, <i>b</i>] = [<i>b</i>, <i>a</i>]<br>[<i>a</i>, 1] = |<i>a</i>|<br>[<i>a</i>, 0] = 0",

    "Every natural number <i>n</i> ≥ 2 has at least two positive divisors: 1 and <i>n</i>. If these two are the only divisors, the number is called Prime number. In the opposite case, the number is called composite number.",

    "Arbitrary natural number <i>n</i> can be represented as the product of prime numbers and this representation is unique, if we do not take the order of factors into account.<br>" +
    "(If <i>n</i> is a prime number, then it is a ''product'' of one prime number, <i>n</i> = 1 is a product of empty set of prime numbers)",

    "Integer <i>x</i> is a modular inverse <i>m</i> of integer <i>a</i>, if <i>a</i> * <i>x</i> = 1 (mod <i>m</i>) holds. Modular inverse <i>m</i> exists if and only if (<i>a</i>, <i>m</i>) = 1 holds. Also, <i>a</i> * <i>a</i>^-1 = 1 (mod <i>m</i>) holds, where <i>a</i>^1 is a modular inverse <i>m</i> of number <i>a</i>.",

    "<i>a</i> is a perfect number, if the sum of all positive divisors of number <i>a</i> smaller than <i>a</i> itself is equal to <i>a</i>.<br><br>E.g. 28 = 1 + 2 + 4 + 7 + 14",

    "Euler function φ for natural number <i>m</i> gives the number of natural numbers that are co-prime with <i>m</i>, not exceeding <i>m</i>.<br>" +
    "If <i>p</i> is a prime number and <i>n</i> ≥ 1, then φ(<i>p</i>^<i>n</i>) = (<i>p</i> - 1) * <i>p</i> ^ (<i>n</i> - 1) holds.<br>" +
    "For (<i>m</i>, <i>n</i>) = 1, the property φ(<i>m</i>, <i>n</i>) = φ(<i>m</i>) * φ(<i>n</i>) holds.",

    "Let <i>a</i> be an integer, <i>m</i> a natural number, and the property (<i>a</i>, <i>m</i>) = 1 holds. Then <i>a</i>^φ(<i>m</i>) ≡ 1 (mod <i>m</i>) where φ is the Euler function.",

    "If two integers <i>a</i>, <i>b</i> have the same remainder <i>r</i> after dividing by natural number <i>m</i>, where 0 ≤ <i>r</i> < <i>m</i>, numbers <i>a</i>, <i>b</i> are called congruent modulo <i>m</i>. We denote <i>a</i> ≡ <i>b</i> (mod <i>m</i>) or <i>a</i> ≡ <i>b</i> (<i>m</i>). " +
    "In the opposite case, we say <i>a</i>, <i>b</i> are not congruent modulo <i>m</i>. We denote <i>a</i> ≢ <i>b</i> (mod <i>m</i>) or <i>a</i> ≢ <i>b</i> (<i>m</i>). " +
    "For integers <i>a</i>, <i>b</i> and a natural number <i>m</i>, the following properties are equivalent:<br><br>" +

    "(1) <i>a</i> ≡ <i>b</i> (mod <i>m</i>)<br>" +
    "(2) <i>a</i> = <i>b</i> + <i>mt</i> for suitable integer <i>t</i><br>" +
    "(3) <i>m</i> | <i>a</i> - b<br><br>" +

    "Properties of congruences:<br><br>" +

    "(1) Congruences with the same modulo can be added together. Arbitrary multiple of modulo can be added to either side of the congruence.<br>" +
    "(2) Congruences with the same modulo can be multiplied together.<br>" +
    "(3) Both sides of congruence can be exponentiated with the same natural number as the exponent.<br>" +
    "(4) Both sides of congruence can be divided by their common divisor, if the divisor is co-prime with modulo. Both sides of congruence can be divided by their common positive divisor.<br>" +
    "(5) If congruence modulo <i>m</i> holds, then it also holds for arbitrary modulo <i>d</i>, if <i>d</i> is a divisor of number <i>m</i>.<br>" +
    "(6) If one side of congruence and the modulo are divisible by an integer, the other side of the congruence must be also divisible by the same integer.<br>" +
    "(7) If congruence modulo <i>m_1</i>, ...., <i>m_k</i> holds, it also holds for modulo <i>n</i>, if <i>n</i> is the least common multiple of numbers [<i>m_1</i>, ...., <i>m_k</i>].",

    "If <i>a</i> is an integer, <i>p</i> is a prime number and <i>p</i> does not divide <i>a</i>, then <i>a</i>^(<i>p</i> - 1) ≡ 1 (mod <i>p</i>) holds.",

    "Let <i>a</i> be an arbitrary integer, let <i>m</i> be arbitrary natural number and (<i>a</i>, <i>m</i>) = 1 holds. Multiplicative order of <i>a</i> modulo <i>m</i> is the smallest natural number <i>n</i> if <i>a</i>^<i>n</i> ≡ 1 (mod <i>m</i>) holds.",

    "Let <i>m</i> be an arbitrary natural number. Integer <i>g</i>, such that (<i>g</i>, <i>m</i>) = 1 holds, is called primitive root modulo <i>m</i>, if its multiplicative order is equal to φ(<i>m</i>). " +
    "Let <i>m</i> be an arbitrary natural number and <i>m</i> > 1. Primitive roots modulo <i>m</i> exist if and only if any of these properties hold for <i>m</i>:<br><br>" +
    "(1) <i>m</i> = 2 or <i>m</i> = 4<br>" +
    "(2) <i>m</i> is a power of an odd prime number<br>" +
    "(3) <i>m</i> is a double power of an odd prime number",

    "If <i>m_1</i>, <i>m_2</i>, ..., <i>m_n</i> are pairwise co-prime natural numbers and <i>a_1</i>, <i>a_2</i>, ..., <i>a_r</i> arbitrary integers, then the following system of congruences:<br><br>" +
    "<i>x</i> ≡ <i>a_1</i> (mod <i>m_1</i>)<br>" +
    "<i>x</i> ≡ <i>a_2</i> (mod <i>m_2</i>)<br>" +
    "&emsp;&emsp;.<br>" +
  	"&emsp;&emsp;.<br>" +
  	"&emsp;&emsp;.<br>" +
    "<i>x</i> ≡ <i>m_r</i> (mod <i>m_r</i>)<br><br>" +

    "with unknown <i>x</i>, has exactly one solution which belongs to {1, 2, ..., <i>m_1</i>, <i>m_2</i>, ..., <i>m_r</i>}.",

    "Let <i>m</i> be natural number, let <i>a</i> be an integer and (<i>a</i>, <i>m</i>) = 1 holds. Number <i>a</i> is an <i>n</i>-th power residue modulo <i>m</i>, if the congruence <i>x</i>^<i>n</i> = <i>a</i> (mod <i>m</i>) is solvable. " +
    "In the opposite case, <i>a</i> is called <i>n</i>-th power non-residue modulo <i>m</i>. For <i>n</i> = 2, 3, 4 we use terms quadratic, cubic and biquadratic (non) residue modulo <i>m</i>.",

    "Let <i>p</i> be an odd prime number, let <i>a</i> be an integer. We define Legendre symbol as:<br><br>" +
    "(<i>a</i> / <i>p</i>) = &nbsp;_ &nbsp;1 if <i>p</i> ∤ <i>a</i>, <i>a</i> is a quadratic residue modulo <i>p</i><br>" +
  	"&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;|_   &nbsp;0 if <i>p</i> | <i>a</i><br>" +
  	"&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;|_  -1 if <i>a</i> is a quadratic non-residue modulo <i>p</i><br><br>" +

    "We often denote Legendre symbol as (<i>a</i> / <i>p</i>)."
  ],

  keys_text: '<img src="images/shortcutsEN.png"></div>',

  about_text:
  "This application is the result of bachelor's thesis at the Faculty of Informatics, Masaryk University in Brno. Its purpose is to generate math problems from number theory and algebra. " +
  "The web application is based on the original <a href='https://github.com/svabensky/numbermat' target='_blank'> Java application Numbermat</a>, the foundations of which were laid by <a href='https://www.fi.muni.cz/~xsvabens/index-en.html' target='_blank'> Valdemar Švábenský</a> in his bachelor's thesis in 2014.<br><br>" + 
  "The user can choose from 13 types of math problems. The user can choose from 3 difficulties for each type of problem, or set custom parameters. The application provides help in a form of description of each problem and mathematical definitions. The application can also export assignments and solutions to PDF files. The application supports 3 languages - Slovak, Czech and English." +
  "<br><br>The source code can be found at <a href='https://github.com/maarioz/Numbermat-WebApp' target='_blank'> GitHub</a>." +
  " The user can report any bug at <a href='https://github.com/maarioz/Numbermat-WebApp/issues' target='_blank'> GitHub Issues</a> or by clicking the Issue button in the bottom left of this help modal.<br><br>",

  result_formats: [
    "Non negative integer.",
    "List of integers <i>d</i>, <i>x</i>, <i>y</i> separated by space or comma.",
    "Positive integer.",
    "Positive integer.",
    "Two non negative numbers <i>r</i>, <i>t</i> separated by space or comma.",
    "Two non negative numbers <i>r</i>, <i>t</i> separated by space or comma.",
    "Positive integer.",
    "Non negative integer.",
    "One of numbers 1, 0, -1.",
    "List of non negative numbers <i>r1</i>, <i>r2</i>, ..., <i>xn</i>, <i>t</i> separated by space or comma.",
    "List of non negative numbers <i>r1</i>, <i>r2</i>, ..., <i>xn</i>, <i>t</i> separated by space or comma.",
    "List of non negative numbers <i>r1</i>, <i>r2</i>, ..., <i>xn</i>, <i>t</i> separated by space or comma.",
    "Permutation of positive numbers in range 1, ..., <i>n</i> separated by space or comma."
  ]
}
