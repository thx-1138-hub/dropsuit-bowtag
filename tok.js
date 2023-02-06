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
 * @see https://github.com/ladooniani/DropSuit#readme
 * @copyright 2016-2023 Lado Oniani- DropSuit. All Rights Reserved.
 * @license Apache License 2.0
 */

//#endregion

//#region  Constructor

function Constructor(inputObj, dsout) {
  this.inputObj = inputObj;
  this.dsout = dsout;
}

//#endregion

//#region tok

/**
 * @constructor
 * @classdesc Tokenization class.
 * @param {array} input_data - Optional input sentence or word to be processed.
 * If not provided, the constructor's input will be used.
 * @returns {object} - The tokenized output, containing the properties:
 * tokArr - An array of the individual tokens,
 * tokStr - A concatenated string of the tokens, and
 * tokNmb - The number of tokens.
 */

Constructor.prototype.tok = function (input_data) {
  let input = objOrFncInp(input_data, this.inputObj);
  let out = tok_f(input, this.dsout);
  return out;
};

//#endregion

//#region tok_f

const dropsuit_clnstr = require("./clnstr.js");
var ds_clnstr = new dropsuit_clnstr(null);

const dropsuit_clnarr = require("./clnarr.js");
var ds_clnarr = new dropsuit_clnarr(false);

/**
 * Tokenization function.
 * @function
 * @param {array} inputRequest - The input requests to be tokenized.
 * @param {boolean} [dispout=false] - Flag to display processing output results in terminal.
 * @returns {object} - The tokenized output, containing the properties:
 * tokArr - An array of the individual tokens,
 * tokStr - A concatenated string of the tokens, and
 * tokNmb - The number of tokens.
 * @example
 * tok_f([ "This is a sample sentence", "This is another sample sentence" ], true)
 */

function tok_f(inputRequest, dispout) {
  let aos = arrStrChecker(inputRequest);
  if (aos == "string") {
    inputRequest = inputRequest.split(" ");
  }
  inputRequest = ds_clnarr.clnarr(inputRequest, 1);
  let allWordsArr = [];
  for (l = 0; l < inputRequest.length; l++) {
    let input_sentence_sep = inputRequest[l];
    let sentence = ds_clnstr.clnstr(input_sentence_sep).txt();
    let sentenceWords = sentence.split(" ");
    for (p = 0; p < sentenceWords.length; p++) {
      let word = sentenceWords[p];
      if (!allWordsArr.includes(word)) {
        allWordsArr.push(word);
      }
    }
  }
  allWordsArr = ds_clnarr.clnarr(allWordsArr, 1);
  let allWordStr = allWordsArr.join(" ");
  let retout = return_tokOut(allWordsArr, allWordStr);
  return retout;
}

function arrStrChecker(inputdtwords) {
  let isArray = arrChecker(inputdtwords);
  var isString = stringChecker(inputdtwords);
  if (isString == true) {
    return "string";
  } else if (isArray == true) {
    return "array";
  }
}

function arrChecker(array) {
  const result = Array.isArray(array);
  if (result) {
    return true;
  } else {
    return false;
  }
}

function stringChecker(string) {
  if (typeof string === "string") {
    return true;
  } else {
    return false;
  }
}

function return_tokOut(allWordsArr, allWordStr) {
  const tokObj = {
    tkNmb: allWordsArr.length,
    tkArr: allWordsArr,
    tkStr: allWordStr,
    tokNmb: function () {
      return this.tkNmb;
    },
    tokArr: function () {
      return this.tkArr;
    },
    tokStr: function () {
      return this.tkStr;
    },
  };
  return tokObj;
}

function objOrFncInp(function_input, constructor_input) {
  if (function_input !== "" && function_input !== null) {
    function_input = function_input;
  } else {
    function_input = constructor_input;
  }
  return function_input;
}

//#endregion

//#region Export Module Constructor

module.exports = Constructor;

//#endregion
