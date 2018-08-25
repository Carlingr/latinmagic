var givens = ["instruo", "instruere", "instruxi", "instructus"];
var roots = ["", "", "", ""];

var output = {
  indicative: {
    present: {
      active: ["", "", "", "", "", ""],
      passive: ["", "", "", "", "", ""],
    },
    imperfect: {
      active: ["", "", "", "", "", ""],
      passive: ["", "", "", "", "", ""],
    },
    future: {
      active: ["", "", "", "", "", ""],
      passive: ["", "", "", "", "", ""],
    },

    perfect: {
      active: ["", "", "", "", "", ""],
      passive: ["", "", "", "", "", ""],
    },
    pluperfect: {
      active: ["", "", "", "", "", ""],
      passive: ["", "", "", "", "", ""],
    },
    futurePerfect: {
      active: ["", "", "", "", "", ""],
      passive: ["", "", "", "", "", ""],
    },
  },
  subjunctive: {
    present: {
      active: ["", "", "", "", "", ""],
      passive: ["", "", "", "", "", ""],
    },
    imperfect: {
      active: ["", "", "", "", "", ""],
      passive: ["", "", "", "", "", ""],
    },
    future: {
      active: ["", "", "", "", "", ""],
      passive: ["", "", "", "", "", ""],
    },

    perfect: {
      active: ["", "", "", "", "", ""],
      passive: ["", "", "", "", "", ""],
    },
    pluperfect: {
      active: ["", "", "", "", "", ""],
      passive: ["", "", "", "", "", ""],
    },
    futurePerfect: {
      active: ["", "", "", "", "", ""],
      passive: ["", "", "", "", "", ""],
    }
  }
};

var endings = {
  active: ["m", "s", "t", "mus", "tis", "nt"],
  passive: ["r", "ris", "tur", "mur", "mini", "ntur"],
  perfect: ["i", "isti", "it", "imus", "istis", "erunt"],
  futureperfect: ["", "", "", "", "", ""],
  pluperfect: ["", "", "", "", "", ""]
};

var EstConj = ["sum", "es", "est", "sumus", "estis", "sunt"];

var vowels = {
  main: ["e", "i", "i", "i", "i", ""],
  future: ["a", "e", "e", "e", "e", "e"]
};

var txt;

function setup() {
  for (i = 0; i < endings.active.length; i++) { //make the endings
    endings.pluperfect[i] = "era" + endings.active[i];
    endings.futureperfect[i] = "eri" + endings.active[i];
    endings.pluperfect[i] = "isse" + endings.active[i];
  }
  // var i;
  // for (i = 0; i < 4; i++) {
  //   givens[i] = prompt("enter the " + ordinal_suffix_of(i + 1) + " principal part")
  // }
  roots[0] = givens[0].slice(0, -1); //get the root by dropping the last char of the string.
  roots[1] = givens[1];
  roots[2] = givens[2].slice(0, -1); //get the root by dropping the last char of the string.
  roots[3] = givens[3].slice(0, -2) + "i"; //get the root by dropping the last char of the string and adding i

  /*Indicative*/
  /*page1*/
  output.indicative.present.active = join_parts(roots[0], vowels.main, endings.active);
  output.indicative.present.active[0] = roots[0] + "o"; //deal with 1st sing cause it's weird
  output.indicative.present.passive = join_parts(roots[0], vowels.main, endings.passive);

  output.indicative.imperfect.active = join_parts(roots[0], "ba", endings.active);
  output.indicative.imperfect.passive = join_parts(roots[0], "ba", endings.passive);

  output.indicative.future.active = join_parts(roots[0], vowels.future, endings.active);
  output.indicative.future.passive = join_parts(roots[0], vowels.future, endings.passive);

  /*page2*/
  output.indicative.perfect.active = join_parts(roots[2], endings.perfect);
  output.indicative.perfect.passive = conj_with_est(" ", EstConj);

  output.indicative.pluperfect.active = join_parts(roots[2], "", endings.pluperfect);
  output.indicative.pluperfect.passive = conj_with_est(" ", endings.pluperfect)

  output.indicative.futurePerfect.active = join_parts(roots[2], endings.futureperfect);
  output.indicative.futurePerfect.active[0] = roots[2] + "ero"; //1st sing is annoying
  output.indicative.futurePerfect.passive = conj_with_est(" ", endings.futureperfect)

  /*Indicative*/
  /*page3*/
  output.subjunctive.present.active = join_parts(roots[0], "e", endings.active);
  output.subjunctive.present.passive = join_parts(roots[0], "a", endings.passive);

  output.subjunctive.imperfect.active = join_parts(roots[1], endings.active);
  output.subjunctive.imperfect.passive = join_parts(roots[1], endings.passive);

  output.subjunctive.perfect.active = join_parts(roots[2], endings.futureperfect);
  output.subjunctive.perfect.active[0] = roots[2] + "erem"; //1st sing is annoying
  output.subjunctive.perfect.passive = conj_with_est(" si", endings.active);

  output.subjunctive.pluperfect.active = join_parts(roots[2], endings.pluperfect);
  output.subjunctive.pluperfect.passive = conj_with_est(" esse", endings.active);

  /*Output the stuffs*/
  txt = JSON.stringify(output, null, 2);
  txt = txt.replace(/\n/g, "<br/>")
  txt = createP(txt)
}