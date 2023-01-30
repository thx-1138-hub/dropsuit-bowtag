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
 * @copyright 2016-2023 Lado Oniani- DropSuit. All Rights Reserved.
 * @license Apache License 2.0
 */

//#endregion

//#region Constructor

function Constructor(dsout) {
  this.dsout = dsout;
}

//#endregion

//#region clnarr

/**
 * @class clnarr
 * @description clnarr(array, 0-2) function -
 * Duplicate and empty element free trimmed lower case strings array.
 * Processes any input array.
 * @param {array} arr - Raw array input.
 * @param {number} type  - Return option parameter arguments
 * (0) keep duplicate, (1) remove duplicate, (2) remove duplicate and extra marks.
 * Note: Number out of range returns 0 option result.
 * @returns {array} - Duplicate, empty element and extra punctuation marks
 * free trimmed lower case strings array.
 * @example let out = clnarr.clnarr(myArray, 2); console.log(out);
 */

Constructor.prototype.clnarr = function (arr, type) {
  let out = clnarr_f(arr, type, this.dsout);
  return out;
};

//#endregion

//#region clnarr_f

const dropsuit_clnstr = require("./clnstr.js");
var ds_clnstr = new dropsuit_clnstr(null);

/**
 * Duplicate, empty element and extra punctuation marks free trimmed lower case strings array.
 * @function
 * @param {array} arr - Raw array input.
 * @param {number} type - Return option parameter arguments (0) keep duplicate (1) remove duplicate
 * (2) remove duplicate and extra marks.
 * @param {boolean} dispout - (true/false) Display processing output results in terminal.
 * @returns {array}  - Duplicate, empty element and extra punctuation marks free trimmed lower case strings array.
 * @example clnarr(myArray, 2, false)
 */

function clnarr_f(arr, type, dispout) {
  let array = [];
  type = checkType(type, 2);
  array = removeEmptyElementAndDuplicateFromArray(arr, type);
  for (s = 0; s < array.length; s++) {
    var str = array[s].toString().replace(/\s\s+/g, " ").trim().toLowerCase();
    if (type == 2) {
      str = ds_clnstr.clnstr(str).txt(); /// str = ttxt_f(str, false).strTxt();
    }
    array[s] = str;
  }
  array = removeEmptyElementAndDuplicateFromArray(array, type);
  return array;
}

function removeEmptyElementAndDuplicateFromArray(arr, type) {
  arr = arr.filter((e) => e);
  if (type == 1 || type == 2) {
    arr = [...new Set(arr)];
  }
  return arr;
}

function checkType(type, range) {
  if (range == 1) {
    if (type == 0 || type == 1) {
      return type;
    } else {
      return (type = 0);
    }
  }
  if (range == 2) {
    if (type == 0 || type == 1 || type == 2) {
      return type;
    } else {
      return (type = 0);
    }
  }
}

//#endregion

//#region Export Module Constructor

module.exports = Constructor;

//#endregion
