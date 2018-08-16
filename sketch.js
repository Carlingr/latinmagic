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

var ActEnds = ["m", "s", "t", "mus", "tis", "nt"]
var PassEnds = ["r", "ris", "tur", "mur", "mini", "ntur"];
var futureVowels = ["a", "e", "e", "e", "e", "e"];
var perfectEnds = ["i", "isti", "it", "imus", "istis", "erunt"];


var futureperfectEnds = ["", "", "", "", "", ""];
var pluperfectEnds = ["", "", "", "", "", ""];
var EstConj = ["sum", "es", "est", "sumus", "estis", "sunt"];


var vowels = ["e", "i", "i", "i", "i", ""];
var ba = ["ba", "ba", "ba", "ba", "ba", "ba"]

var txt;

function setup() {
  // var i;
  // for (i = 0; i < 4; i++) {
  //   givens[i] = prompt("enter the " + ordinal_suffix_of(i + 1) + " principal part")
  // }

  /*Indicative*/
  /*page1*/
  roots[0] = givens[0].slice(0, -1); //get the root by dropping the last char of the string.

  /*present.ent Active Indicative*/
  output.indicative.present.active = join_parts(roots[0], vowels, ActEnds);
  output.indicative.present.active[0] = roots[0] + "o"; //deal with 1st sing cause it's weird
  /*present.ent Passive Indicative*/
  output.indicative.present.passive = join_parts(roots[0], vowels, PassEnds);

  /*imperfect.erfect Active Indicative*/
  output.indicative.imperfect.active = join_parts(roots[0], "ba", ActEnds);
  /*imperfect.erfect Passive Indicative*/
  output.indicative.imperfect.passive = join_parts(roots[0], "ba", PassEnds);

  /*future.ure Active Indicative*/
  output.indicative.future.active = join_parts(roots[0], futureVowels, ActEnds);
  /*future.ure Passive Indicative*/
  output.indicative.future.passive = join_parts(roots[0], futureVowels, PassEnds);

  /*page2*/
  roots[2] = givens[2].slice(0, -1); //get the root by dropping the last char of the string.
  roots[3] = givens[3].slice(0, -2) + "i"; //get the root by dropping the last char of the string.

  /*perfect.ect Active Indicative*/
  output.indicative.perfect.active = join_parts(roots[2], perfectEnds);
  /*perfect.ect Passive Indicative*/
  output.indicative.perfect.passive = conj_with_est(" ", EstConj);

  /*pluperfect.erfect.ect Active Indicative*/
  pluperfectEnds = add_string_to_array("era", ActEnds);
  output.indicative.pluperfect.active = join_parts(roots[2], "", pluperfectEnds);
  /*pluperfect.erfect.ect Passive Indicative*/
  output.indicative.pluperfect.passive = conj_with_est(" ", pluperfectEnds)

  /*futurePerfect.erfect.ect Active Indicative*/
  futureperfectEnds = add_string_to_array("eri", ActEnds)
  output.indicative.futurePerfect.active = join_parts(roots[2], futureperfectEnds);
  output.indicative.futurePerfect.active[0] = roots[2] + "ero"; //1st sing is annoying
  /*futurePerfect.erfect.ect Passive Indicative*/
  output.indicative.futurePerfect.passive = conj_with_est(" ", futureperfectEnds)

  /*Indicative*/
  /*page3*/
  roots[1] = givens[1];

  /*present.ent Active Subjunctive*/
  output.subjunctive.present.active = join_parts(roots[0], "e", ActEnds);
  /*present.ent Passive Subjunctive*/
  output.subjunctive.present.passive = join_parts(roots[0], "a", PassEnds);

  /*imperfect.erfect Active Subjunctive*/
  output.subjunctive.imperfect.active = join_parts(roots[1], ActEnds);
  /*imperfect.erfect Passive Subjunctive*/
  output.subjunctive.imperfect.passive = join_parts(roots[1], PassEnds);


  /*perfect.ect Active Subjunctive*/
  output.subjunctive.perfect.active = join_parts(roots[2], futureperfectEnds);
  output.subjunctive.perfect.active[0] = roots[2] + "erem"; //1st sing is annoying
  /*perfect.ect Passive Subjunctive*/
  output.subjunctive.perfect.passive = conj_with_est(" si", ActEnds);

  /*pluperfect.erfect.ect Active Subjunctive*/
  pluperfectEnds = add_string_to_array("isse", ActEnds);
  output.subjunctive.pluperfect.active = join_parts(roots[2], pluperfectEnds);
  /*pluperfect.erfect.ect Passive Subjunctive*/
  output.subjunctive.pluperfect.passive = conj_with_est(" esse", ActEnds);

  /*Output the stuffs*/
  txt = JSON.stringify(output, null, 2);
  txt = txt.replace(/\n/g, "<br/>")
  txt = createP(txt)
}

function roots_0_join() {}

function join_parts(root, vowel, ending) {
  var vowel_array; //amazingly, we will need this.
  var output = ["", "", "", "", "", ""]; // 
  if (ending === undefined) {
    for (i = 0; i < 6; i++) { //deal with the regular rules
      output[i] = root + vowel[i];
    }
  } else {
    if (vowel.constructor !== Array) { //shit
      vowel_array = new Array(6).fill(vowel); // make an array with all one value
    } else { //vowel
      vowel_array = vowel; //copypasta
    }
    for (i = 0; i < 6; i++) { //deal with the regular rules
      output[i] = root + vowel_array[i] + ending[i];
    }
  }
  return output;
}

function conj_with_est(middle, ending) {
  var output = new Array(6);
  for (i = 0; i < 3; i++) { //deal with the singular
    output[i] = givens[3] + middle + ending[i]
  }
  for (i = 3; i < 6; i++) { //deal with the plurals
    output[i] = roots[3] + middle + ending[i]
  }
  return output;
}

function add_string_to_array(add_this, to_this) {
  var output = ["", "", "", "", "", ""];
  for (i = 0; i < to_this.length; i++) { //deal with the regular rules
    output[i] = add_this + to_this[i]
  }
  return output;
}

function ordinal_suffix_of(i) {
  var j = i % 10,
    k = i % 100;
  if (j == 1 && k != 11) {
    return i + "st";
  }
  if (j == 2 && k != 12) {
    return i + "nd";
  }
  if (j == 3 && k != 13) {
    return i + "rd";
  }
  return i + "th";
}