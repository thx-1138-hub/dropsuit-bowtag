//#region Info

/**
 * @file <h3>DropSuit</h3>
 * <p>
 *   DropSuit is a JavaScript(ES6) and Node.js(v14.x) module library
 *   created by Lado Oniani that offers a diverse collection of functions
 *   for natural language processing (NLP) and data manipulation.
 *   It provides a curated collection of original and classic techniques and methods
 *   for tasks such as text analysis, language understanding and generation,
 *   as well as for data manipulation tasks. Additionally,
 *   it includes unique tools and features for chatbot dialog flow logic
 *   and other specific use cases.
 *   The library is open-source and available under the Apache License 2.0.
 *   Whether you're a researcher, developer, or data scientist,
 *   DropSuit offers a range of tools to enhance your work,
 *   with a focus on diversity and experimentation.
 * </p>
 * @author Lado Oniani
 * {@link https://github.com/ladooniani GitHub}
 * @see mailto:ladooniani@gmail.com
 * @version 1.0.0
 * @see https://github.com/ladooniani/DropSuit/blob/main/DropSuit.md
 * @copyright 2016-2023 Lado Oniani - DropSuit. All Rights Reserved.
 * @license Apache License 2.0
 */

//#endregion

//#region Constructor

function Constructor(input) {
  this.input = input;
}

//#endregion

//#region clnstr

/**
 * @class clnstr
 * @description The clnstr class provides a set of methods for cleaning and
 * normalizing strings. The clnstr class accepts a raw string input and processes it
 * by removing marks, converting the trimmed string to lowercase, and removing extra punctuation marks.
 * @param {string} [input=null] - The raw string input. The input can be a sentence or word,
 * or it can be left null to process the input passed to the constructor.
 * @returns {object} - An object containing three methods:
 * - txt(): Trims the input, removes punctuation marks and numbers, and converts the input to lowercase.
 * - nmb(): Trims the input, removes punctuation marks and converts the input to lowercase.
 * - pnc(): Trims the input, converts the input to lowercase, and removes extra punctuation marks.
 */

Constructor.prototype.clnstr = function (input) {
  input = objOrFncInp(input, this.input);
  let out = clnstr_f(input);
  return out;
};

//#endregion

//#region clnstr_f

/**
 * Remove marks, and extra marks, and convert the trimmed string to lowercase.
 * @param {string} input - The raw string input. This parameter is mandatory.
 * @param {boolean} [dispout=false] - A boolean flag that controls whether the processing output
 * results are displayed in the terminal or not. This parameter is optional.
 * @returns {object} - An object containing three methods:
 * - txt(): Trims the input, removes punctuation marks and numbers, and converts the input to lowercase.
 * - nmb(): Trims the input, removes punctuation marks and converts the input to lowercase.
 * - pnc(): Trims the input, converts the input to lowercase, and removes extra punctuation marks.
 * @example
 * const clnstr = require('./clnstr');
 * const input = "Hello, World! !! How are you doing today?";
 * const result = clnstr(input, true);
 * console.log(result);
 * // Output: { txt: 'hello world how are you doing today', nmb: 'hello world how are you doing today', pnc: 'hello, world! how are you doing today?' }
 */

function clnstr_f(input) {
  let inp = input.toString().replace("'", "");
  let p1 = /[^a-zA]+/g;
  let p2 = /[^a-zA-Z0-9]+/g;
  let p3 = /\s+/g;
  let regexSet = [p1, p2, p3];
  let outList = [];
  for (let i = 0; i < regexSet.length; i++) {
    var output = inp.toString().toLowerCase().replace(regexSet[i], " ").trim();
    output = extraPunctuation(output);
    outList.push(output);
  }
  let outret = return_clnstrOut(outList);
  return outret;
}

function extraPunctuation(output) {
  let punctReg = punctMakrs1sortA();
  let punct = punctMakrs2sortA();
  for (let i = 0; i < punct.length; i++) {
    output = output
      .toString()
      .toLowerCase()
      .replace(punctReg[i], punct[i])
      .trim();
  }
  output = output.replace(/\s*([,.!?:;]+)(?!\s*$)\s*/g, "$1 ").trim();
  output = output.replace(/(?<=\d)\p{Zs}(?=\d)/g, "").trim();
  output = output.replace(/(?<=\W)(?<! )\W+/g, " ").trim();
  output = output.replace(/(^,)|(,$)/g, "").trim();
  return output;
}

function objOrFncInp(function_input, constructor_input) {
  if (function_input !== "" && function_input !== null) {
    function_input = function_input;
  } else {
    function_input = constructor_input;
  }
  return function_input;
}

function return_clnstrOut(outList) {
  const ttxtObj = {
    stTxt: outList[0],
    stNmb: outList[1],
    stPnc: outList[2],
    txt: function () {
      return this.stTxt;
    },
    nmb: function () {
      return this.stNmb;
    },
    pnc: function () {
      return this.stPnc;
    },
  };
  return ttxtObj;
}

//#endregion

//#region Punct marks

function punctMakrs1sortA() {
  let p1 = /\,+/g;
  let p2 = /\/+/g;
  let p3 = /\.+/g;
  let p4 = /\,+/g;
  let p5 = /\'+/g;
  let p6 = /\;+/g;
  let p7 = /\=+/g;
  let p8 = /\-+/g;
  let p9 = /\`+/g;
  let p10 = /\?+/g;
  let p11 = /\>+/g;
  let p13 = /\<+/g;
  let p14 = /\:+/g;
  let p15 = /\}+/g;
  let p16 = /\{+/g;
  let p17 = /\++/g;
  let p18 = /\_+/g;
  let p19 = /\)+/g;
  let p20 = /\(+/g;
  let p21 = /\*+/g;
  let p22 = /\&+/g;
  let p23 = /\^+/g;
  let p24 = /\%+/g;
  let p25 = /\$+/g;
  let p26 = /\#+/g;
  let p27 = /\@+/g;
  let p28 = /\!+/g;
  let p29 = /\~+/g;
  let p30 = /\]+/g;
  let p31 = /\[+/g;
  let p32 = /\"+/g;

  let punctMakrs1sortA = [
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11,
    p13,
    p14,
    p15,
    p16,
    p17,
    p18,
    p19,
    p20,
    p21,
    p22,
    p23,
    p24,
    p25,
    p26,
    p27,
    p28,
    p29,
    p30,
    p31,
    p32,
  ];

  return punctMakrs1sortA;
}

function punctMakrs2sortA() {
  let punctMakrs2sortA = [
    ",",
    "/",
    ".",
    ",",
    "'",
    ";",
    "=",
    "-",
    "`",
    "?",
    ">",
    "<",
    ":",
    "}",
    "{",
    "+",
    "_",
    ")",
    "(",
    "*",
    "&",
    "^",
    "%",
    "$",
    "#",
    "@",
    "!",
    "~",
    "]",
    "[",
    '`"`',
  ];
  return punctMakrs2sortA;
}

function punctMakrs3sortB() {
  let punctMakrs3sortB = [
    "\\[",
    "\\!",
    '\\"',
    "\\#",
    "\\$",
    "\\%",
    "\\&",
    "\\'",
    "\\(",
    "\\)",
    "\\*",
    "\\+",
    "\\,",
    "\\\\",
    "\\-",
    "\\.",
    "\\/",
    "\\:",
    "\\;",
    "\\<",
    "\\=",
    "\\>",
    "\\?",
    "\\@",
    "\\[",
    "\\]",
    "\\^",
    "\\_",
    "\\`",
    "\\{",
    "\\|",
    "\\}",
    "\\~",
    "\\]",
  ];
  return punctMakrs3sortB;
}

//#endregion

//#region Export Module Constructor

module.exports = Constructor;

//#endregion
