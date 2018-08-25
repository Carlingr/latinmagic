function join_parts(root, vowel, ending) {
  var vowel_array; //amazingly, we will need this.
  var output = ["", "", "", "", "", ""]; // 
  if (ending === undefined) {
    for (i = 0; i < 6; i++) { //deal with the regular rules
      output[i] = root + vowel[i];
    }
  } else {
    if (vowel.constructor === Array) { //Is it an array?
      vowel_array = vowel; //copypasta
    } else { //shit, it ain't
      vowel_array = new Array(6).fill(vowel); // make an array with all one value
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