var givens = ["instruo", "instruere", "instruxi", "instructus"];
var roots = ["", "", "", ""];

var output = {
  PresActInd: ["", "", "", "", "", ""],
  PresPassInd: ["", "", "", "", "", ""],
  ImpActInd: ["", "", "", "", "", ""],
  ImpPassInd: ["", "", "", "", "", ""],
  FutActInd: ["", "", "", "", "", ""],
  FutPassInd: ["", "", "", "", "", ""],

  PerfActInd: ["", "", "", "", "", ""],
  PerfPassInd: ["", "", "", "", "", ""],
  PlupActInd: ["", "", "", "", "", ""],
  PlupPassInd: ["", "", "", "", "", ""],
  FutPActInd: ["", "", "", "", "", ""],
  FutPPassInd: ["", "", "", "", "", ""],


  PresActSubj: ["", "", "", "", "", ""],
  PresPassSubj: ["", "", "", "", "", ""],
  ImpActSubj: ["", "", "", "", "", ""],
  ImpPassSubj: ["", "", "", "", "", ""],
  FutActSubj: ["", "", "", "", "", ""],
  FutPassSubj: ["", "", "", "", "", ""],

  PerfActSubj: ["", "", "", "", "", ""],
  PerfPassSubj: ["", "", "", "", "", ""],
  PlupActSubj: ["", "", "", "", "", ""],
  PlupPassSubj: ["", "", "", "", "", ""],
  FutPActSubj: ["", "", "", "", "", ""],
  FutPPassSubj: ["", "", "", "", "", ""],
};

var ActEnds = ["m", "s", "t", "mus", "tis", "nt"]
var PassEnds = ["r", "ris", "tur", "mur", "mini", "ntur"];
var FutVowels = ["a", "e", "e", "e", "e", "e"];
var PerfEnds = ["i", "isti", "it", "imus", "istis", "erunt"];


var FutPEnds = ["", "", "", "", "", ""];
var PlupEnds = ["", "", "", "", "", ""];
var EstConj = ["sum", "es", "est", "sumus", "estis", "sunt"];
var blank_array = ["", "", "", "", "", ""];


var vowels = ["e", "i", "i", "i", "i", ""];
var ba = ["ba", "ba", "ba", "ba", "ba", "ba"]

var txt;

function setup() {
  var i;
  // for (i = 0; i < 4; i++) {
  //   givens[i] = prompt("enter the " + ordinal_suffix_of(i + 1) + " principal part")
  // }

  /*Indicative*/
  /*page1*/
  roots[0] = givens[0].slice(0, -1); //get the root by dropping the last char of the string.

  /*Present Active Indicative*/
  output.PresActInd = join_parts(roots[0], vowels, ActEnds);
  output.PresActInd[0] = roots[0] + "o"; //deal with 1st sing cause it's weird
  /*Present Passive Indicative*/
  output.PresPassInd = join_parts(roots[0], vowels, PassEnds);

  /*Imperfect Active Indicative*/
  output.ImpActInd = join_parts(roots[0], "ba", ActEnds);
  /*Imperfect Passive Indicative*/
  output.ImpPassInd = join_parts(roots[0], "ba", PassEnds);

  /*Future Active Indicative*/
  output.FutActInd = join_parts(roots[0], FutVowels, ActEnds);
  /*Future Passive Indicative*/
  output.FutPassInd = join_parts(roots[0], FutVowels, PassEnds);

  /*page2*/
  roots[2] = givens[2].slice(0, -1); //get the root by dropping the last char of the string.
  roots[3] = givens[3].slice(0, -2) + "i"; //get the root by dropping the last char of the string.

  /*Perfect Active Indicative*/
  output.PerfActInd = join_parts(roots[2], PerfEnds);
  /*Perfect Passive Indicative*/
  output.PerfPassInd = conj_with_est(" ", EstConj);

  /*Pluperfect Active Indicative*/
  console.log("look here")
  PlupEnds = add_string_to_array("era", ActEnds);
  output.PlupActInd = join_parts(roots[2], "", PlupEnds);
  /*Pluperfect Passive Indicative*/
  output.PlupPassInd = conj_with_est(" ", PlupEnds)

  /*FutPerfect Active Indicative*/
  FutPEnds = add_string_to_array("eri", ActEnds)
  output.FutPActInd = join_parts(roots[2], FutPEnds);
  output.FutPActInd[0] = roots[2] + "ero"; //1st sing is annoying
  /*FutPerfect Passive Indicative*/
  output.FutPPassInd = conj_with_est(" ", FutPEnds)

  /*Indicative*/
  /*page3*/
  roots[1] = givens[1];

  /*Present Active Subjunctive*/
  output.PresActSubj = join_parts(roots[0], "e", ActEnds);
  /*Present Passive Subjunctive*/
  output.PresPassSubj = join_parts(roots[0], "a", PassEnds);

  /*Imperfect Active Subjunctive*/
  output.ImpActSubj = join_parts(roots[1], ActEnds);
  /*Imperfect Passive Subjunctive*/
  output.ImpPassSubj = join_parts(roots[1], PassEnds);


  /*Perfect Active Subjunctive*/
  output.PerfActSubj = join_parts(roots[2], FutPEnds);
  output.PerfActSubj[0] = roots[2] + "erem"; //1st sing is annoying
  /*Perfect Passive Subjunctive*/
  output.PerfPassSubj = conj_with_est(" si", ActEnds);

  /*Pluperfect Active Subjunctive*/
  PlupEnds = add_string_to_array("isse", ActEnds);
  output.PlupActSubj = join_parts(roots[2], PlupEnds);
  /*Pluperfect Passive Subjunctive*/
  output.PlupPassSubj = conj_with_est(" esse", ActEnds);

  /*Output the stuffs*/
  txt = JSON.stringify(output, null, 2);
  txt = txt.replace(/\n/g, "<br/>")
  txt = createP(txt)
}

function join_parts(root, vowel, ending) {
  var vowel_array; //amazingly, we will need this.
  var output = ["", "", "", "", "", ""]; // 
  console.log(ending)
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