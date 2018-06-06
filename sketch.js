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


var vowels = ["e", "i", "i", "i", "i", ""];

var txt;

function setup() {
  var i;
  for (i = 0; i < 4; i++) {
    givens[i] = prompt("enter the " + ordinal_suffix_of(i + 1) + " principal part")
  }

  /*Indicative*/
  /*page1*/
  roots[0] = givens[0].slice(0, -1); //get the root by dropping the last char of the string.

  /*Present Active Indicative*/
  for (i = 0; i < output.PresActInd.length; i++) { //deal with the regular rules
    output.PresActInd[i] = roots[0] + vowels[i] + ActEnds[i]
  }
  output.PresActInd[0] = roots[0] + "o"; //deal with 1st sing cause it's weird
  /*Present Passive Indicative*/
  for (i = 0; i < output.PresPassInd.length; i++) { //deal with the regular rules
    output.PresPassInd[i] = roots[0] + vowels[i] + PassEnds[i]
  }

  /*Imperfect Active Indicative*/
  output.ImpActInd[0] = roots[0] + "o"; //deal with 1st sing cause it's weird
  for (i = 0; i < output.ImpActInd.length; i++) { //deal with the regular rules
    output.ImpActInd[i] = roots[0] + "ba" + ActEnds[i]
  }
  /*Imperfect Passive Indicative*/
  for (i = 0; i < output.ImpPassInd.length; i++) { //deal with the regular rules
    output.ImpPassInd[i] = roots[0] + "ba" + PassEnds[i]
  }

  /*Future Active Indicative*/
  output.FutActInd[0] = roots[0] + "o"; //deal with 1st sing cause it's weird
  for (i = 0; i < output.FutActInd.length; i++) { //deal with the regular rules
    output.FutActInd[i] = roots[0] + FutVowels[i] + ActEnds[i]
  }
  /*Future Passive Indicative*/
  for (i = 0; i < output.FutPassInd.length; i++) { //deal with the regular rules
    output.FutPassInd[i] = roots[0] + FutVowels[i] + PassEnds[i]
  }

  /*page2*/
  roots[2] = givens[2].slice(0, -1); //get the root by dropping the last char of the string.
  roots[3] = givens[3].slice(0, -2) + "i"; //get the root by dropping the last char of the string.

  /*Perfect Active Indicative*/
  for (i = 0; i < output.PerfActInd.length; i++) { //deal with the regular rules
    output.PerfActInd[i] = roots[2] + PerfEnds[i]
  }
  /*Perfect Passive Indicative*/
  for (i = 0; i < output.PerfPassInd.length; i++) { //deal with the singular
    output.PerfPassInd[i] = givens[3] + " " + EstConj[i]
  }
  for (i = 3; i < output.PerfPassInd.length; i++) { //deal with the plurals
    output.PerfPassInd[i] = roots[3] + " " + EstConj[i]
  }

  /*Pluperfect Active Indicative*/
  for (i = 0; i < output.PlupActInd.length; i++) { //deal with the regular rules
    PlupEnds[i] = "era" + ActEnds[i]
    output.PlupActInd[i] = roots[2] + PlupEnds[i]
  }
  /*Pluperfect Passive Indicative*/
  for (i = 0; i < output.PlupPassInd.length; i++) { //deal with the singular
    output.PlupPassInd[i] = givens[3] + " " + PlupEnds[i]
  }
  for (i = 3; i < output.PlupPassInd.length; i++) { //deal with the plurals
    output.PlupPassInd[i] = roots[3] + " " + PlupEnds[i]
  }

  /*FutPerfect Active Indicative*/
  for (i = 0; i < output.FutPActInd.length; i++) { //deal with the regular rules
    FutPEnds[i] = "eri" + ActEnds[i]
    output.FutPActInd[i] = roots[2] + FutPEnds[i]
  }
  output.FutPActInd[0] = roots[2] + "ero"; //1st sing is annoying
  /*FutPerfect Passive Indicative*/
  for (i = 0; i < output.FutPPassInd.length; i++) { //deal with the singular
    output.FutPPassInd[i] = givens[3] + " " + FutPEnds[i]
  }
  for (i = 3; i < output.FutPPassInd.length; i++) { //deal with the plurals
    output.FutPPassInd[i] = roots[3] + " " + FutPEnds[i]
  }

  /*Indicative*/
  /*page3*/
  roots[1] = givens[1];

  /*Present Active Subjunctive*/
  for (i = 0; i < output.PresActSubj.length; i++) { //deal with the regular rules
    output.PresActSubj[i] = roots[0] + "e" + ActEnds[i]
  }
  /*Present Passive Subjunctive*/
  for (i = 0; i < output.PresPassSubj.length; i++) { //deal with the regular rules
    output.PresPassSubj[i] = roots[0] + "a" + PassEnds[i]
  }

  /*Present Active Subjunctive*/
  for (i = 0; i < output.PresActSubj.length; i++) { //deal with the regular rules
    output.PresActSubj[i] = roots[0] + "e" + ActEnds[i]
  }
  /*Present Passive Subjunctive*/
  for (i = 0; i < output.PresPassSubj.length; i++) { //deal with the regular rules
    output.PresPassSubj[i] = roots[0] + "a" + PassEnds[i]
  }

  /*Imperfect Active Subjunctive*/
  for (i = 0; i < output.ImpActSubj.length; i++) { //deal with the regular rules
    output.ImpActSubj[i] = roots[1] + ActEnds[i]
  }
  /*Imperfect Passive Subjunctive*/
  for (i = 0; i < output.ImpPassSubj.length; i++) { //deal with the regular rules
    output.ImpPassSubj[i] = roots[1] + PassEnds[i]
  }

  /*Perfect Active Subjunctive*/
  for (i = 0; i < output.PerfActSubj.length; i++) { //deal with the regular rules
    output.PerfActSubj[i] = roots[2] + FutPEnds[i]
  }
  output.PerfActSubj[0] = roots[2] + "erem"; //1st sing is annoying
  /*Perfect Passive Subjunctive*/
  for (i = 0; i < output.FutPassSubj.length; i++) { //deal with the singular
    output.PerfPassSubj[i] = givens[3] + " si" + ActEnds[i]
  }
  for (i = 3; i < output.FutActSubj.length; i++) { //deal with the plurals
    output.PerfPassSubj[i] = roots[3] + " si" + ActEnds[i]
  }

  /*Pluperfect Active Subjunctive*/
  for (i = 0; i < output.PlupActSubj.length; i++) { //deal with the regular rules
    PlupEnds[i] = "isse" + ActEnds[i]
    output.PlupActSubj[i] = roots[2] + PlupEnds[i]
  }
  /*Pluperfect Passive Subjunctive*/
  for (i = 0; i < output.PlupPassSubj.length; i++) { //deal with the singular
    output.PlupPassSubj[i] = givens[3] + " esse" + ActEnds[i]
  }
  for (i = 3; i < output.PlupPassSubj.length; i++) { //deal with the plurals
    output.PlupPassSubj[i] = roots[3] + " esse" + ActEnds[i]
  }


  txt = JSON.stringify(output, null, 2);
  txt = txt.replace(/\n/g, "<br/>")
  txt = createP(txt)
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