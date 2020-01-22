/**
* Object with values in the Slovak language.
*
* @author Mario Zak <441270(at)mail(dot)muni(dot)cz>
*/

sk = {
  title: "Numbermat: Generátor Príkladov",

  difficulties: ["Ľahká", "Stredná", "Ťažká"],

  exercises: [
    "Najväčší spoločný deliteľ",
    "Bezoutova rovnosť",
    "Inverzia modulo n",
    "Eulerova funkcia",
    "Lineárna kongruencia",
    "Sústava lineárnych kongruencií",
    "Rád prvku grupy jednotiek",
    "Modulárne umocňovanie",
    "Legendrov symbol",
    "Kvadratická kongruencia (binomická)",
    "Kvadratická kongruencia (obecná)",
    "Binomická kongruencia",
    "Rád permutácie"
  ],

  logo_image: '<img src="images/logoSK.png"></div>',
  difficulty_image: '<img src="images/difficultySK.png"></div>',
  type_image: '<img src="images/typeSK.png"></div>',

  bezout_1: "Nájdite čísla",
  bezout_2: "aby",
  legendre_1: "Pretože",
  legendre_2: "je mocnicou čísla 2, dostávame:",

  generate_random: "Generovať</br>náhodne",
  set_parameters: "Nastaviť</br>parametre",
  parameter_1: "Parameter #1",
  parameter_2: "Parameter #2",
  parameter_3: "Parameter #3",
  parameter_4: "Parameter #4",
  help: "Nápoveda",
  restart: "Reštart",
  restart_2: "Potvrdenie Reštartu",
  restart_3: "Prajete si reštartovať aplikáciu?",
  restart_4: "Zrušiť",
  generate_parameters: "Generovať</br>s parametrami",
  show_latex: "Zobraziť riešenie (LaTeX)",
  show_text: "Zobraziť riešenie (text)",
  copy: "Kopírovať riešenie",
  export: "Export do PDF",
  check_answer: "Skontrolovať",
  placeholder: "Pole pre výsledok",

  description: "Popis príkladov",
  definition: "Definície",
  keys: "Klávesové skratky",
  about: "O Aplikácii",
  close: "Zatvoriť",

  input: "Vstup:",
  output: "Výstup:",
  format: "Formát výsledku:",

  please_integer: "Prosím zadajte celé číslo v rozsahu",
  no_zero: "Nula nie je povolená.",
  coprime: "Čísla musia byť nesúdelné!",
  smaller: "Prvé číslo musí byť menšie ako druhé!",
  enter: "Prosím, zadajte",
  odd: "nepárne",
  even: "párne",
  prime: "prvočíslo",
  not_perm: "Zadaná sekvencia nie je permutáciou.",
  only_integers: "Pole musí obsahovať iba celé čísla.",
  only_positive: "Pole musí obsahovať iba kladné čísla.",
  integers: " celočíselné koeficienty oddelené medzerou",
  no_solution: "Príklad nemá riešenie.",
  solution: "riešenie",
  solutions: "riešení",
  not_exists: "Neexistuje",
  exists: "Existuje",

  order: "Rád",
  group_order: "Rád grupy",
  possible_orders: "Možné rády prvkov",
  element_order: "Rád prvku",
  determine_order_elem: "Určite rád prvku",
  in_group: "v grupe",
  determine_order_perm: "Určite rád permutácie",
  in_group: "v grupe",
  is: "je",
  solution_not_exists: "Neexistuje žiadne riešenie.",
  infinite_solutions: "Existuje nekonečne mnoho riešení.",

  definitions: [
    "Základné vlastnosti deliteľnosti",
    "Najväčší spoločný deliteľ",
    "Najmenší spoločný násobok",
    "Prvočíslo",
    "Základná veta aritmetiky",
    "Inverzia modulo m",
    "Dokonalé číslo",
    "Eulerova funkcia φ",
    "Eulerova veta",
    "Kongruencia",
    "Malá Fermátova veta",
    "Rád čísla",
    "Primitívny koreň modulo m",
    "Čínska zvyšková veta",
    "Kvadratický a mocninný zvyšok",
    "Legendreov symbol"
  ],

  params: [
    ["Celé číslo (a)", "Celé číslo (b)"],
    ["Nezáporné celé číslo (a)", "Nezáporné celé číslo (b)"],
    ["Kladné celé číslo (a)", "Kladné celé číslo (n)"],
    ["Kladné celé číslo (n)"],
    ["Celé číslo (a)", "Celé číslo (b)", "Kladné celé číslo (n)"],
    ["Počet rovníc (max. 4)", "Celé čísla (a_i)", "Celé čísla (b_i)", "Kladné celé čísla (n_i)"],
    ["Kladné celé číslo (prvok)", "Modulo (min. 2)"],
    ["Celé číslo (b)", "Nezáporné celé číslo (e)", "Kladné celé číslo (m)"],
    ["Celé číslo (a)", "Nepárne prvočíslo (p)"],
    ["Celé číslo (a)", "Kladné celé číslo (m)"],
    ["Nenulové celé číslo (a)", "Celé číslo (b)", "Celé číslo (c)", "Kladné celé číslo, (a, m) = 1"],
    ["Kladné celé číslo (n)", "Celé číslo (a)", "Kladné celé číslo (m)"],
    ["Počet prvkov (max. 10)", "Permutácia"]
  ],

  results: [
    "(<i>a</i>, <i>b</i>).",
    "Čísla <i>d</i>, <i>x</i>, <i>y</i> také, že <i>ax</i> + <i>by</i> = <i>d</i> = (<i>a</i>, <i>b</i>).",
    "Číslo <i>x</i> také, že <i>ax</i> ≡ 1 (mod <i>n</i>).",
    "φ(<i>n</i>).",
    "Dvojica čísel <i>r</i>, <i>t</i> takých, že <i>x</i> ≡ <i>r</i> (mod <i>t</i>) je riešením kongruencie <i>ax</i> ≡ <i>b</i> (mod <i>n</i>).",
    "Dvojica čísel <i>r</i>, <i>t</i> takých, že <i>x</i> ≡ <i>r</i> (mod <i>t</i>) je riešením kongruencií <i>a_i</i> <i>x</i> ≡ <i>b_i</i> (mod <i>n_i</i>).",
    "Rád <i>k</i> prvku <i>e</i> danej grupy, t.j. číslo také, že <i>e</i>^<i>k</i> = 1.",
    "Číslo <i>x</i> také, že <i>b</i>^<i>e</i> ≡ <i>x</i> (mod <i>m</i>).",
    "Legendreov symbol (<i>a</i> / <i>p</i>).",
    "Zoznam nezáporných čísel <i>r1</i>, <i>r2</i>, ..., <i>rn</i>, <i>t</i> takých, že <i>x</i> ≡ <i>r_i</i> (mod <i>t</i>) je riešením kongruencie<br><i>x</i>^2 ≡ <i>a</i> (mod <i>m</i>).",
    "Zoznam nezáporných čísel <i>r1</i>, <i>r2</i>, ..., <i>rn</i>, <i>t</i> takých, že <i>x</i> ≡ <i>r_i</i> (mod <i>t</i>) je riešením kongruencie<br><i>ax</i>^2 + <i>bx</i> + <i>c</i> ≡ 0 (mod <i>m</i>).",
    "Zoznam nezáporných čísel <i>r1</i>, <i>r2</i>, ..., <i>rn</i>, <i>t</i> takých, že <i>x</i> ≡ <i>r_i</i> (mod <i>t</i>) je riešením kongruencie<br><i>x</i>^<i>n</i> ≡ <i>a</i> (mod <i>m</i>).",
    "Rád <i>k</i> danej permutacií σ, t.j. číslo také, že σ^<i>k</i> = id."
  ],

  definitions_text: [
    "Celé číslo <i>a</i> delí celé číslo <i>b</i> (alebo číslo <i>b</i> je deliteľné číslom <i>a</i>, tiež <i>b</i> je násobkom <i>a</i>), ak existuje celé"
    + " číslo <i>c</i> také, že platí <i>a</i> * <i>c</i> = <i>b</i>. Píšeme <i>a</i> | <i>b</i>." +
    "<br>Pre ľubovoľné číslo <i>a</i> platí <i>a</i> | <i>a</i>; pre ľubovoľné čísla <i>a</i>, <i>b</i>, <i>c</i> platia tieto 4 implikácie:"
    + "<br><br><i>a</i> | <i>b</i> ∧ <i>b</i> | <i>c</i> ⇒ <i>a</i> | <i>c</i><br>" +
    "<i>a</i> | <i>b</i> ∧ <i>b</i> | <i>c</i> ⇒ <i>a</i> | <i>b</i> + <i>c</i> ∧ <i>a</i> | <i>b</i> - <i>c</i><br>" +
    "<i>c</i> ≠ 0 ⇒ (<i>a</i> | <i>b</i> ⇔ <i>a</i> * <i>c</i> | <i>b</i> * <i>c</i>)<br>" +
    "<i>a</i> | <i>b</i> ∧ <i>b</i> > 0 ⇒ <i>a</i> ≤ <i>b</i>",

    "Majme celé čísla <i>a</i>, <i>b</i>. ľubovoľné celé číslo <i>m</i> také, že <i>m</i> | <i>a</i>, <i>m</i> | <i>b</i> sa nazýva spoločný deliteľ čísiel <i>a</i>, <i>b</i>.<br>" +
     " Spoločný deliteľ <i>m</i> ≥ 0 čísiel <i>a</i>, <i>b</i>, ktorý je deliteľný ľubovoľným spoločným deliteľom čísiel <i>a</i>, <i>b</i>, sa nazýva " +
     "najväčší spoločný deliteľ čísiel <i>a</i>, <i>b</i> a značí sa (<i>a</i>, <i>b</i>) (niekedy tiež gcd(<i>a</i>, <i>b</i>) alebo nsd(<i>a</i>, <i>b</i>)).<br><br>" +
     "Celé čísla <i>a_1</i>, <i>a_2</i>, ..., <i>a_n</i> sa nazývajú nesúdeľné, ak platí (<i>a_1</i>, <i>a_2</i>, ..., <i>a_n</i>) = 1.<br>" +
     "Z definície plynie, že pre ľubovoľné celé čísla <i>a</i>, <i>b</i>, platí:<br><br>" +
     "(<i>a</i>, <i>b</i>) = (<i>b</i>, <i>a</i>)<br>(<i>a</i>, 1) = 1<br>(<i>a</i>, 0) = |<i>a</i>|",

    "Majme celé čísla <i>a</i>, <i>b</i>. Najmenší spoločný násobok je najmenšie prirodzené číslo, ktoré je deliteľné oboma číslami <i>a</i>, <i>b</i>. Značí sa [<i>a</i>, <i>b</i>] (prípadne lcm(<i>a</i>, <i>b</i>) alebo nsn(<i>a</i>, <i>b</i>)).<br>"
    + "Z definície plynie, že pre ľubovoľné celé čísla <i>a</i>, <i>b</i>, platí:<br><br>" + "[<i>a</i>, <i>b</i>] = [<i>b</i>, <i>a</i>]<br>[<i>a</i>, 1] = |<i>a</i>|<br>[<i>a</i>, 0] = 0",

    "Každé prirodzené číslo <i>n</i> ≥ 2 má aspoň dva kladné deliteľe: 1 a <i>n</i>. Pokiaľ okrem týchto dvoch iné kladné deliteľe nemá, nazýva sa prvočíslo. V opačnom prípade hovoríme o zloženom čísle.",

    "Ľubovoľné prirodzené číslo <i>n</i> je možné vyjadriť ako súčin prvočísiel, pričom je toto vyjadrenie jediné, ak neberieme do úvahy poradie činiteľov.<br>" +
    "(Ak je <i>n</i> prvočíslo, potom ide o ,,súčin'' jednoho prvočísla, <i>n</i> = 1 je súčinom prázdnej množiny prvočísiel)",

    "Celé číslo <i>x</i> je inverziou modulo <i>m</i> celého čísla <i>a</i> vtedy, ak platí <i>a</i> * <i>x</i> ≡ 1 (mod <i>m</i>). Inverzia modulo <i>m</i> existuje iba vtedy, ak platí (<i>a</i>, <i>m</i>) = 1. Zároveň platí <i>a</i> * <i>a</i>^-1 ≡ 1 (mod <i>m</i>) kde <i>a</i>^-1 je inverzia modulo <i>m</i> čísla <i>a</i>.",

    "<i>a</i> je dokonalé, ak súčet všetkých kladných deliteľov čísla <i>a</i> menších než <i>a</i> samotné je rovný číslu <i>a</i>.<br><br>napr. 28 = 1 + 2 + 4 + 7 + 14",

    "Eulerova funkcia φ pre prirodzené číslo <i>m</i> udáva počet prirodzených čísiel nesúdelných s <i>m</i> a neprevyšujúcich <i>m</i>.<br>" +
    "Ak <i>p</i> je prvočíslo a <i>n</i> ≥ 1, potom platí φ(<i>p</i>^<i>n</i>) = (<i>p</i> - 1) * <i>p</i> ^ (<i>n</i> - 1)<br>" +
    "Pre (<i>m</i>, <i>n</i>) = 1 platí φ(<i>m</i>, <i>n</i>) = φ(<i>m</i>) * φ(<i>n</i>)",

    "Nech je <i>a</i> celé číslo, <i>m</i> prirodzené číslo a zároveň (<i>a</i>, <i>m</i>) = 1. Potom platí <i>a</i>^φ(<i>m</i>) ≡ 1 (mod <i>m</i>) kde φ je Eulerova funkcia.",

    "Ak dve celé čísla <i>a</i>, <i>b</i> majú pri delení prirodzeným číslom <i>m</i> rovnaký zvyšok <i>r</i>, kde 0 ≤ <i>r</i> < <i>m</i>, nazývajú sa <i>a</i>, <i>b</i> kongruentné modulo <i>m</i>. Zapisujeme <i>a</i> ≡ <i>b</i> (mod <i>m</i>) alebo <i>a</i> ≡ <i>b</i> (<i>m</i>). " +
    "V opačnom prípade hovoríme, že <i>a</i>, <i>b</i> niesú kongruentné modulo <i>m</i>, a píšeme <i>a</i> ≢ <i>b</i> (mod <i>m</i>) alebo <i>a</i> ≢ <i>b</i> (<i>m</i>). " +
    "Pre celé čísla <i>a</i>, <i>b</i> a prirodzené číslo <i>m</i> sú následujúce podmienky ekvivalentné:<br><br>" +

    "(1) <i>a</i> ≡ <i>b</i> (mod <i>m</i>)<br>" +
    "(2) <i>a</i> = <i>b</i> + <i>m</i><i>t</i> pre vhodné celé číslo <i>t</i><br>" +
    "(3) <i>m</i> | <i>a</i> - <i>b</i><br><br>" +

    "Vlastnosti kongruencií:<br><br>" +

    "(1) Konguencie podľa rovnakého modulu môžeme sčítať. K niektorej strane kongruencie môžeme pričítať ľubovolný násobok modulu.<br>" +
    "(2) Kongruencie podľa rovnakého modulu môžeme násobiť.<br>" +
    "(3) Obe strany kongruencie je možné umocniť na rovnaké prirodzené číslo.<br>" +
    "(4) Obe strany kongruencie môžeme vydeliť ich spoločným deliteľom, ak je tento deliteľ nesúdelný s modulom. Obe strany kongruencie aj jej modul môžeme vydeliť ich spoločným kladným deliteľom.<br>" +
    "(5) Ak kongruencia platí podľa modulu <i>m</i>, platí podľa ľubovolného modulu <i>d</i>, ktorý je deliteľom čísla <i>m</i>.<br>" +
    "(6) Ak je jedna strana kongruencie a modul deliteľný nejakým celým číslom, musí byť týmto číslom deliteľná aj druhá strana kongruencie.<br>" +
    "(7) Ak kongruencia platí podľa modulu <i>m_1</i>, ...., <i>m_k</i>, platí aj podľa modulu, ktorým je najmenší spoločný násobok [<i>m_1</i>, ...., <i>m_k</i>] týchto čísel.",

    "Ak <i>a</i> je celé číslo a <i>p</i> je prvočíslo nedeliace <i>a</i>, potom platí <i>a</i>^(<i>p</i> - 1) ≡ 1 (mod <i>p</i>).",

    "Nech je <i>a</i> ľubovolné celé číslo, nech je <i>m</i> ľubovolné prirodzené číslo a platí (<i>a</i>, <i>m</i>) = 1. Rádom čísla <i>a</i> modulo <i>m</i> rozumieme najmenšie prirodzené číslo <i>n</i> splňujúce <i>a</i>^<i>n</i> ≡ 1 (mod <i>m</i>).",

    "Nech je <i>m</i> ľubovolné prirodzené číslo. Celé číslo <i>g</i>, také že (<i>g</i>, <i>m</i>) = 1 nazveme primitívnym koreňom modulo <i>m</i>, ak je jeho rád modulo <i>m</i> rovný φ(<i>m</i>). " +
    "Nech je <i>m</i> ľubovolné prirodzené číslo a <i>m</i> > 1. Potom primitívne koreňe modulo <i>m</i> existujú práve vtedy, ked <i>m</i> splňuje niektorú z následujúcich podmienok: <br><br>" +
    "(1) <i>m</i> = 2 alebo <i>m</i> = 4<br>" +
    "(2) <i>m</i> je mocnina nepárneho prvočísla<br>" +
    "(3) <i>m</i> je dvojnásobok mocniny nepárneho prvočísla",

    "Ak sú <i>m_1</i>, <i>m_2</i>, ..., <i>m_2</i> po dvoch nesúdelné prirodzené čísla a <i>a_1</i>, <i>a_2</i>, ..., <i>a_r</i> ľubovolné celé čísla, potom má sústava kongruencií:<br><br>" +
    "<i>x</i> ≡ <i>a_1</i> (mod <i>m_1</i>)<br>" +
    "<i>x</i> ≡ <i>a_2</i> (mod <i>m_2</i>)<br>" +
    "&emsp;&emsp;.<br>" +
  	"&emsp;&emsp;.<br>" +
  	"&emsp;&emsp;.<br>" +
    "<i>x</i> ≡ <i>a_r</i> (mod <i>m_r</i>)<br><br>" +

    "o neznámej <i>x</i> práve jedno riešenie patriace do množiny {1, 2, ..., <i>m_1</i>, <i>m_2</i>, ..., <i>m_r</i>}.",

    "Nech je <i>m</i> prirodzené číslo, <i>a</i> celé číslo a (<i>a</i>, <i>m</i>) = 1. Číslo <i>a</i> nazveme <i>n</i>-tým mocninným zvyškom modulo <i>m</i>, pokiaľ je kongruencia <i>x</i>^<i>n</i> ≡ <i>a</i> (mod <i>m</i>) riešiteľná. " +
    "V opačnom prípade <i>a</i> nazveme <i>n</i>-tým mocninným nezvyškom modulo <i>m</i>. Pre <i>n</i> = 2, 3, 4 používame termíny kvadratický, kubický a bikvadratický zvyšok, resp. nezvyšok modulo <i>m</i>.",

    "Nech je <i>p</i> nepárne prvočíslo, <i>a</i> celé číslo. Legendreov symbol definujeme predpisom:<br><br>" +
    "(<i>a</i> / <i>p</i>) = &nbsp;_ &nbsp;1 pre  <i>p</i> ∤ <i>a</i>, <i>a</i> je kvadratický zvyšok modulo <i>p</i><br>" +
  	"&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;|_   &nbsp;0 pre <i>p</i> | <i>a</i><br>" +
  	"&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;|_  -1 ak je <i>a</i> kvadratický nezvyšok modulo <i>p</i><br><br>" +

    "Legendrov symbol často zapisujeme ako (<i>a</i> / <i>p</i>) a symbol čítame ako ,,<i>a</i> vzhľadom k <i>p</i>''."
  ],

  keys_text: '<img src="images/shortcutsSK.png"></div>',

  about_text:
  "Táto webová aplikácia je výstupom bakalárskej práce na Fakulte informatiky Masarykovej univerzity v Brne. Slúži na generovanie zadaní a riešení úloh z teórie čísel a algebry.<br><br>" +
  "Užívateľ má na výber z 13 typov príkladov. Pre každý typ príkladu si užívateľ môže zvoliť jednu z 3 obtiažností, alebo si nastaviť vlastné parametre. Aplikácia obsahuje nápovedu vo forme popisu príkladov a matematických definícií. Aplikácia ďalej poskytuje možnosť exportu zadania a riešenia do súboru vo formáte PDF. Zároveň si užívateľ môže jazyk aplikácie - Slovenský, Český alebo Anglický." +
  "<br><br>Zdrojový kód aplikácie je dostupný na <a href='https://github.com/maarioz/Numbermat-WebApp' target='_blank'> GitHube</a>." +
  " Nahlásiť akýkoľvek bug môže užívateľ na <a href='https://github.com/maarioz/Numbermat-WebApp/issues' target='_blank'> GitHub Issues</a> alebo kliknutím na tlačidlo Issue v ľavom dolnom rohu nápovedy.<br><br>",

  result_formats: [
    "Nezáporné celé číslo.",
    "Zoznam celých čísel <i>d</i>, <i>x</i>, <i>y</i> oddelených medzerou alebo čiarkou.",
    "Kladné celé číslo.",
    "Kladné celé číslo.",
    "Dvojica nezáporných čísel <i>r</i>, <i>t</i> oddelených medzerou alebo čiarkou.",
    "Dvojica nezáporných čísel <i>r</i>, <i>t</i> oddelených medzerou alebo čiarkou.",
    "Kladné celé číslo.",
    "Nezáporné celé číslo.",
    "Jedno z čísel 1, 0, -1.",
    "Zoznam nezáporných čísel <i>r1</i>, <i>r2</i>, ..., <i>xn</i>, <i>t</i> oddelených medzerou alebo čiarkou.",
    "Zoznam nezáporných čísel <i>r1</i>, <i>r2</i>, ..., <i>xn</i>, <i>t</i> oddelených medzerou alebo čiarkou.",
    "Zoznam nezáporných čísel <i>r1</i>, <i>r2</i>, ..., <i>xn</i>, <i>t</i> oddelených medzerou alebo čiarkou.",
    "Permutácia kladných čísel v rozsahu 1, ..., <i>n</i> oddelených medzerou alebo čiarkou."
  ]
}
