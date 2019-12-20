/**
* Object with values in the Czech language.
*
* @author Mario Zak <441270(at)mail(dot)muni(dot)cz>
*/

cz = {
  title: "Numbermat: Generátor Příkladů",

  difficulties: ["Lehká", "Střední", "Ťěžká"],

  exercises: [
    "Největší společný dělitel",
    "Bezoutova rovnost",
    "Inverze modulo n",
    "Eulerova funkce φ",
    "Lineární kongruence",
    "Soustava lineárních kongruencí",
    "Řád prvku grupy jednotek",
    "Modulární umocňování",
    "Legendreův symbol",
    "Kvadratická kongruence (binomická)",
    "Kvadratická kongruence (obecná)",
    "Binomická kongruence",
    "Řád permutace",
  ],

  logo_image: '<img src="images/logoCZ.png"></div>',
  difficulty_image: '<img src="images/difficultyCZ.png"></div>',
  type_image: '<img src="images/typeCZ.png"></div>',

  bezout_1: "Najděte čísla",
  bezout_2: "aby",
  legendre_1: "Protože",
  legendre_2: "je mocnicou čísla 2, dostáváme:",

  generate_random: "Generovat</br>náhodně",
  set_parameters: "Nastavit</br>parametry",
  parameter_1: "Parametr #1&nbsp;&nbsp;",
  parameter_2: "Parametr #2&nbsp;&nbsp;",
  parameter_3: "Parametr #3&nbsp;&nbsp;",
  parameter_4: "Parametr #4&nbsp;&nbsp;",
  help: "Nápověda",
  restart: "Restart",
  generate_parameters: "Generovat</br>s parametrami",
  show_latex: "Zobrazit řešení (LaTeX)",
  show_text: "Zobrazit řešení (text)",
  copy: "Kopírovat řešení",
  export: "Export do PDF",
  check_answer: "Skontrolovat",
  placeholder: "Pole pro výsledek",

  description: "Popis příkladů",
  definition: "Definice",
  keys: "Klávesové skratky",
  about: "O Aplikaci",
  close: "Zavřít",

  input: "Vstup:",
  output: "Výstup:",
  format: "Formát výsledku:",

  please_integer: "Prosím zadejte celé číslo v rozsahu",
  no_zero: "Nula není povolená.",
  coprime: "Čísla musí být nesoudělné!",
  smaller: "První číslo musí být menší než druhé!",
  enter: "Prosím, zadejte",
  odd: "liché",
  even: "sudé",
  prime: "prvočíslo",
  not_perm: "Zadaná sekvence není permutací.",
  only_integers: "Pole musí obsahovat jenom celá čísla.",
  only_positive: "Pole musí obsahovat jenom kladné čísla.",
  integers: " celočíselné koeficienty oddělené mezerou",
  no_solution: "Příklad nemá řešení.",
  solution: "řešení",
  solutions: "řešení",
  not_exists: "Neexistuje",
  exists: "Existuje",

  order: "Řád",
  group_order: "Řád grupy",
  possible_orders: "Možné řády prvků",
  element_order: "Řád prvku",
  determine_order_elem: "Určete řád prvku",
  in_group: "v grupě",
  determine_order_perm: "Určete řád permutace",
  in_group: "v grupě",
  is: "je",
  solution_not_exists: "Neexistuje žádné řešení.",
  infinite_solutions: "Existuje nekonečně mnoho řešení.",

  definitions: [
    "Základní vlastnosti dělitelnosti",
    "Největší společný dělitel",
    "Nejmenší společný násobek",
    "Prvočíslo",
    "Základní věta aritmetiky",
    "Inverze modulo m",
    "Dokonalé číslo",
    "Eulerova funkce φ",
    "Eulerova věta",
    "Kongruence",
    "Malá Fermátova věta",
    "Řád čísla",
    "Primitivní kořen modulo m",
    "Čínska zbytková věta",
    "Kvadratický a mocninný zbytek",
    "Legendreův symbol"
  ],

  params: [
    ["Celé číslo (a)", "Celé číslo (b)"],
    ["Nezáporné celé číslo (a)", "Nezáporné celé číslo (b)"],
    ["Kladné celé číslo (a)", "Kladné celé číslo (n)"],
    ["Kladné celé číslo (n)"],
    ["Celé číslo (a)", "Celé číslo (b)", "Kladné celé číslo (n)"],
    ["Počet rovnic (max. 4)", "Celá čísla (a_i)", "Celá čísla (b_i)", "Kladná celá čísla (n_i)"],
    ["Kladné celé číslo (prvek)", "Modulo (min. 2)"],
    ["Celé číslo (b)", "Nezáporné celé číslo (e)", "Kladné celé číslo (m)"],
    ["Celé číslo (a)", "Liché prvočíslo (p)"],
    ["Celé číslo (a)", "Kladné celé číslo (m)"],
    ["Nenulové celé číslo (a)", "Celé číslo (b)", "Celé číslo (c)", "Kladné celé číslo, (a, m) = 1"],
    ["Kladné celé číslo (n)", "Celé číslo (a)", "Kladné celé číslo (m)"],
    ["Počet prvků (max. 10))", "Permutace"]
  ],

  results: [
    "(<i>a</i>, <i>b</i>).",
    "Čísla <i>d</i>, <i>x</i>, <i>y</i> taková, že <i>ax</i> + <i>by</i> = <i>d</i> = (<i>a</i>, <i>b</i>).",
    "Číslo <i>x</i> takové, že <i>ax</i> ≡ 1 (mod <i>n</i>).",
    "φ(<i>n</i>).",
    "Dvojice čísel <i>r</i>, <i>t</i> takových, že <i>x</i> ≡ <i>r</i> (mod <i>t</i>) je řešením kongruence <i>ax</i> ≡ <i>b</i> (mod <i>n</i>).",
    "Dvojice čísel <i>r</i>, <i>t</i> takových, že <i>x</i> ≡ <i>r</i> (mod <i>t</i>) je řešením kongruencí <i>a_i</i> <i>x</i> ≡ <i>b_i</i> (mod <i>n_i</i>).",
    "Řád <i>k</i> prvku <i>e</i> dané grupy, t.j. číslo takové, že <i>e</i>^<i>k</i> = 1.",
    "Číslo <i>x</i> takové, že <i>b</i>^<i>e</i> ≡ <i>x</i> (mod <i>m</i>).",
    "Legendreův symbol (<i>a</i> / <i>p</i>).",
    "Seznam nezáporných čísel <i>r1</i>, <i>r2</i>, ..., <i>rn</i>, <i>t</i> takých, že <i>x</i> ≡ <i>r_i</i> (mod <i>t</i>) je řešením kongruence<br><i>x</i>^2 ≡ <i>a</i> (mod <i>m</i>).",
    "Seznam nezáporných čísel <i>r1</i>, <i>r2</i>, ..., <i>rn</i>, <i>t</i> takých, že <i>x</i> ≡ <i>r_i</i> (mod <i>t</i>) je řešením kongruence<br><i>ax</i>^2 + <i>bx</i> + <i>c</i> ≡ 0 (mod <i>m</i>).",
    "Seznam nezáporných čísel <i>r1</i>, <i>r2</i>, ..., <i>rn</i>, <i>t</i> takých, že <i>x</i> ≡ <i>r_i</i> (mod <i>t</i>) je řešením kongruence<br><i>x</i>^<i>n</i> ≡ <i>a</i> (mod <i>m</i>).",
    "Řád <i>k</i> dané permutace σ, t.j. číslo takové, že σ^<i>k</i> = id.",
  ],

  definitions_text: [
    "Celé číslo <i>a</i> dělí celé číslo <i>b</i> (neboli číslo <i>b</i> je dělitelné číslem <i>a</i>, též <i>b</i> je násobkem <i>a</i>), pokud existuje celé"
    + " číslo <i>c</i> tak, že platí <i>a</i> * <i>c</i> = <i>b</i>. Píšeme pak <i>a</i> | <i>b</i>." +
    "<br>Pro libovolné číslo <i>a</i> platí <i>a</i> | <i>a</i>; pro libovolná čísla <i>a</i>, <i>b</i>, <i>c</i> platí tyto 4 implikace:"
    + "<br><br><i>a</i> | <i>b</i> ∧ <i>b</i> | <i>c</i> ⇒ <i>a</i> | <i>c</i><br>" +
    "<i>a</i> | <i>b</i> ∧ <i>b</i> | <i>c</i> ⇒ <i>a</i> | <i>b</i> + <i>c</i> ∧ <i>a</i> | <i>b</i> - <i>c</i><br>" +
    "<i>c</i> ≠ 0 ⇒ (<i>a</i> | <i>b</i> ⇔ <i>a</i> * <i>c</i> | <i>b</i> * <i>c</i>)<br>" +
    "<i>a</i> | <i>b</i> ∧ <i>b</i> > 0 ⇒ <i>a</i> ≤ <i>b</i>",

    "Mějme celá čísla <i>a</i>, <i>b</i>. Libovolné celé číslo <i>m</i> takové, že <i>m</i> | <i>a</i>, <i>m</i> | <i>b</i> se nazývá společný dělitel čísel <i>a</i>, <i>b</i>.<br>" +
     " Společný dělitel <i>m</i> ≥ 0 čísel <i>a</i>, <i>b</i>, který je dělitelný libovolným společným dělitelem čísel <i>a</i>, <i>b</i>, se nazývá" +
     "největší společný dělitel čísel <i>a</i>, <i>b</i> a značí se (<i>a</i>, <i>b</i>) (někdy též gcd(<i>a</i>, <i>b</i>) nebo nsd(<i>a</i>, <i>b</i>)).<br><br>" +
     "Celá čísla <i>a_1</i>, <i>a_2</i>, ..., <i>a_n</i> se nazývají nesoudělné, jestli platí (<i>a_1</i>, <i>a_2</i>, ..., <i>a_n</i>) = 1.<br>" +
     "Z definice plyne, že pro libovolná celá čísla <i>a</i>, <i>b</i>, platí:<br><br>" +
     "(<i>a</i>, <i>b</i>) = (<i>b</i>, <i>a</i>)<br>(<i>a</i>, 1) = 1<br>(<i>a</i>, 0) = |<i>a</i>|",

    "Mějme celá čísla <i>a</i>, <i>b</i>. Nejmenší společný násobek je najmenší přirozené číslo, které je dělitelné oběma číslami <i>a</i>, <i>b</i>. Značí se [<i>a</i>, <i>b</i>] (případne lcm(<i>a</i>, <i>b</i>) nebo nsn(<i>a</i>, <i>b</i>)).<br>"
    + "Z definice plyne, že pro libovolná celá čísla <i>a</i>, <i>b</i>, platí:<br><br>" + "[<i>a</i>, <i>b</i>] = [<i>b</i>, <i>a</i>]<br>[<i>a</i>, 1] = |<i>a</i>|<br>[<i>a</i>, 0] = 0",

    "Každé přirozené číslo <i>n</i> ≥ 2 má aspoň dva kladné dělitele: 1 a <i>n</i>. Pokud kromě těchto dvou jiné kladné dělitele nemá, nazývá se prvočíslo. V opačném případe hovoříme o složeném čísle.",

    "Libovolné přirozené číslo <i>n</i> je možné vyjádřit jako součin prvočísel, přičemž je toto vyjádření jediné, nebereme-li v úvahu pořadí činitelů.<br>" +
    "(Je-li <i>n</i> prvočíslo, pak jde o ,,součin'' jednoho prvočísla, <i>n</i> = 1 je součinem prázdné množiny prvočísel)",

    "Celé číslo <i>x</i> je inverzí modulo <i>m</i> celého čísla <i>a</i> tehdy, když platí <i>a</i> * <i>x</i> ≡ 1 (mod <i>m</i>). Inverze modulo <i>m</i> existuje jenom tehdy, když platí (<i>a</i>, <i>m</i>) = 1. Zároveň platí <i>a</i> * <i>a</i>^-1 ≡ 1 (mod <i>m</i>) kde <i>a</i>^-1 je inverze modulo <i>m</i> čísla <i>a</i>.",

    "<i>a</i> je dokonalé, pokud součet všech kladných dělitelů čísla <i>a</i> menších než <i>a</i> samotné je roven číslu <i>a</i>.<br><br>např. 28 = 1 + 2 + 4 + 7 + 14",

    "Eulerova funkce φ pro přirozené číslo <i>m</i> udává počet přirozených čísel nesoudělných s <i>m</i> a nepřevyšujících <i>m</i>.<br>" +
    "Jestli je <i>p</i> prvočíslo a <i>n</i> ≥ 1, pak platí φ(<i>p</i>^<i>n</i>) = (<i>p</i> - 1) * <i>p</i> ^ (<i>n</i> - 1)<br>" +
    "Pro (<i>m</i>, <i>n</i>) = 1 platí φ(<i>m</i>, <i>n</i>) = φ(<i>m</i>) * φ(<i>n</i>)",

    "Nechť <i>a</i> je celé číslo, <i>m</i> přirozené číslo a zároveň (<i>a</i>, <i>m</i>) = 1. Potom platí <i>a</i>^φ(m) ≡ 1 (mod <i>m</i>) kde φ je Eulerova funkce.",

    "Jestliže dvě celá čísla <i>a</i>, <i>b</i> mají při dělení přirozeným číslem <i>m</i> týž zbytek <i>r</i>, kde 0 ≤ <i>r</i> < <i>m</i>, nazývají sa <i>a</i>, <i>b</i> kongruentní modulo <i>m</i>. Zapisujeme <i>a</i> ≡ <i>b</i> (mod <i>m</i>) nebo <i>a</i> ≡ <i>b</i> (<i>m</i>). " +
    "V opačném případe řekneme, že <i>a</i>, <i>b</i> nejsou kongruentní modulo <i>m</i>, a píšeme <i>a</i> ≢ <i>b</i> (mod <i>m</i>) nebo <i>a</i> ≢ <i>b</i> (<i>m</i>). " +
    "Pro celé čísla <i>a</i>, <i>b</i> a přirozené číslo <i>m</i> jsou následující podmínky ekvivalentní:<br><br>" +

    "(1) <i>a</i> ≡ <i>b</i> (mod <i>m</i>)<br>" +
    "(2) <i>a</i> = <i>b</i> + <i>mt</i> pro vhodné celé číslo <i>t</i><br>" +
    "(3) <i>m</i> | <i>a</i> - <i>b</i><br><br>" +

    "Vlastnosti kongruencí:<br><br>" +

    "(1) Konguence podle téhož modulu můžeme sčítat. K některé straně kongruence můžeme přičítat libovolný násobek modulu.<br>" +
    "(2) Konguence podle téhož modulu můžeme násobit.<br>" +
    "(3) Obě strany kongruence je možné umocnit na totéž přirozené číslo.<br>" +
    "(4) Obě strany kongruence můžeme vydělit jejich společným dělitelem, jestliže je tento dělitel nesoudělný s modulem. Obě strany kongruence i její modul můžeme vydělit jejich společným kladným dělitelem.<br>" +
    "(5) Jestliže kongruence platí podle modulu <i>m</i>, platí podle libovolného modulu <i>d</i>, který je dělitelem čísla <i>m</i>.<br>" +
    "(6) Jestliže je jedna strana kongruence a modul dělitelný nějakým celým číslem, musí být tímto číslem dělitelná i druhá strana kongruence.<br>" +
    "(7) Jestliže kongruence platí podle modulu <i>m_1</i>, ...., <i>m_k</i>, platí i podle modulu, kterým je nejmenší společný násobek [<i>m_1</i>, ...., <i>m_k</i>] těchto čísel.",

    "Jestli <i>a</i> je celé číslo a <i>p</i> je prvočíslo nedělící <i>a</i>, potom platí <i>a</i>^(<i>p</i> - 1) ≡ 1 (mod <i>p</i>).",

    "Nechť je <i>a</i> libovolné celé číslo, nechť je <i>m</i> libovolné přirozené číslo a platí (<i>a</i>, <i>m</i>) = 1. Řádem čísla <i>a</i> modulo <i>m</i> rozumíme nejmenší přirozené číslo <i>n</i> splňující <i>a</i>^<i>n</i> ≡ 1 (mod <i>m</i>).",

    "Nechť je <i>m</i> libovolné přirozené číslo. Celé číslo <i>g</i>, takové že (<i>g</i>, <i>m</i>) = 1, nazveme primitívnym kořenem modulo <i>m</i>, jestli je jeho řád modulo m rovný φ(<i>m</i>). " +
    "Nechť je <i>m</i> libovolné přirozené číslo a <i>m</i> > 1. Pak primitivní koreňe modulo <i>m</i> existují právě tehdy, když <i>m</i> splňuje některou z následujících podmínek: <br><br>" +
    "(1) <i>m</i> = 2 nebo <i>m</i> = 4<br>" +
    "(2) <i>m</i> je mocnina lichého prvočísla<br>" +
    "(3) <i>m</i> je dvojnásobek mocniny lichého prvočísla",

    "Jsou-li <i>m_1</i>, <i>m_2</i>, ..., <i>m_n</i> po dvou nesoudělné přirozené čísla a <i>a_1</i>, <i>a_2</i>, ..., <i>a_r</i> libovolná celá čísla, pak má soustava kongruencí:<br><br>" +
    "<i>x</i> ≡ <i>a_1</i> (mod <i>m_1</i>)<br>" +
    "<i>x</i> ≡ <i>a_2</i> (mod <i>m_2</i>)<br>" +
    "&emsp;&emsp;.<br>" +
  	"&emsp;&emsp;.<br>" +
  	"&emsp;&emsp;.<br>" +
    "<i>x</i> ≡ <i>a_r</i> (mod <i>m_r</i>)<br><br>" +

    "o neznámé <i>x</i> právě jedno řešení patřící do množiny {1, 2, ..., <i>m_1</i>, <i>m_2</i>, ..., <i>m_r</i>}.",

    "Nechť je <i>m</i> prirodzené číslo, <i>a</i> celé číslo a (<i>a</i>, <i>m</i>) = 1. Číslo <i>a</i> nazveme <i>n</i>-tým mocninným zbytkem modulo <i>m</i>, pokud je kongruencie <i>x</i>^<i>n</i> ≡ <i>a</i> (mod <i>m</i>) řešitelná. " +
    "V opačném případe <i>a</i> nazveme <i>n</i>-tým mocninným nezbytkem modulo <i>m</i>. Pro <i>n</i> = 2, 3, 4 používame termíny kvadratický, kubický a bikvadratický zbytek, resp. nezbytek modulo <i>m</i>.",

    "Nechť je <i>p</i> liché prvočíslo, <i>a</i> celé číslo. Legendreův symbol definujeme předpisem:<br><br>" +
    "(<i>a</i> / <i>p</i>) = &nbsp;_ &nbsp;1 pro  <i>p</i> ∤ <i>a</i>, <i>a</i> je kvadratický zbytek modulo <i>p</i><br>" +
  	"&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;|_   &nbsp;0 pro <i>p</i> | <i>a</i><br>" +
  	"&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;|_  -1 je-li <i>a</i> kvadratický nezbytek modulo <i>p</i><br><br>" +

    "Legendreův symbol často zapisujeme jako (<i>a</i> / <i>p</i>) a symbol čteme jako ,,<i>a</i> vzhledem k <i>p</i>''."
  ],

  keys_text: '<img src="images/shortcutsCZ.png"></div>',

  about_text:
  "Tato webová aplikace je výstupem bakalářské práce na Fakulte informatiky Masarykovy univerzity v Brne. Slouží na generování zadání a řešení úloh z teorie čísel a algebry.<br><br>" +
  "Uživatel má na výběr z 13 typů příkladů. Pro každý typ příkladu má uživatel na výběr jednu z 3 obtížností, nebo si může nastavit vlastní parametry. Aplikace obsahuje nápovědu ve formě popisu příkladů a matematických definicí. Aplikace dále poskytuje možnost exportu zadání a řešení do souboru ve formátu PDF. Zároveň je možné si vybrat jazyk aplikace - Slovenský, Český nebo Anglický." +
  "<br><br>Zdrojový kód aplikace je dostupný na <a href='https://github.com/maarioz/Numbermat-WebApp' target='_blank'> GitHube</a>." +
  " Nahlásit jakýkoliv bug může uživatel na <a href='https://github.com/maarioz/Numbermat-WebApp/issues' target='_blank'> GitHub Issues</a> nebo kliknutím na tlačítko Issue v levém dolním rohu nápovědy.<br><br>",

  result_formats: [
    "Nezáporné celé číslo.",
    "Seznam celých čísel <i>d</i>, <i>x</i>, <i>y</i> oddělených mezerou nebo čárkou.",
    "Kladné celé číslo.",
    "Kladné celé číslo.",
    "Dvojice nezáporných čísel <i>r</i>, <i>t</i> oddělených mezerou nebo čárkou.",
    "Dvojice nezáporných čísel <i>r</i>, <i>t</i> oddělených mezerou nebo čárkou.",
    "Kladné celé číslo.",
    "Nezáporné celé číslo.",
    "Jedno z čísel 1, 0, -1.",
    "Seznam nezáporných čísel <i>r1</i>, <i>r2</i>, ..., <i>xn</i>, <i>t</i> oddělených mezerou nebo čárkou.",
    "Seznam nezáporných čísel <i>r1</i>, <i>r2</i>, ..., <i>xn</i>, <i>t</i> oddělených mezerou nebo čárkou.",
    "Seznam nezáporných čísel <i>r1</i>, <i>r2</i>, ..., <i>xn</i>, <i>t</i> oddělených mezerou nebo čárkou.",
    "Permutace kladných čísel v rozsahu 1, ..., <i>n</i> oddělených mezerou nebo čárkou."
  ]
}
