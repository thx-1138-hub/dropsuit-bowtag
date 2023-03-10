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
 * @copyright 2016-2023 Lado Oniani - DropSuit. All Rights Reserved.
 * @license Apache License 2.0
 */

//#endregion

//#region  Constructor

function Constructor(requests, tags, responses, dsout) {
  this.requests = requests;
  this.tags = tags;
  this.responses = responses;
  this.dsout = dsout;
}

//#endregion

//#region bowt

/**
 * @Constructs bowtag
 * @description - bowtag(boolean) function - Bag of words and Tags IDx value sequence arrays.
Processes default object instance key values (req_arr: requests), (tag_arr: tags), (res_arr: responses).
 * @param {boolean} dostem - (true/false) Enable or disable stemming.
 * @returns {object} - bowtg() Bag of words, tags() Tags IDx value sequence arrays.
 */

Constructor.prototype.bowtag = function (dostem) {
  let out = bowtag_f(
    this.requests,
    this.tags,
    this.responses,
    dostem,
    this.dsout
  );
  return out;
};

//#endregion

//#region bowt_f

const dropsuit_tok = require("./tok");
let dstok = new dropsuit_tok(null, false);

const dropsuit_stem = require("./stem");
let dsstem = new dropsuit_stem(null, false);

const dropsuit_dtstruc = require("./dtstruc");

/**
 * Bag of words and Tags IDx value sequence arrays.
 * @param {array} responses - Responses.
 * @param {array} tags - Tags.
 * @param {array} requests - Requests.
 * @param {boolean} dostem - (true/false) Enable or disable stemming.
 * @param {boolean} dispout - (true/false) Display processing output results in terminal.
 * @returns {object} - bowtg() Bag of words, tags() Tags IDx value sequence arrays.
 * @example bowtag_f(array, array, array, bool, bool)
 */

function bowtag_f(requests, tags, responses, dostem, dispout) {
  let outret;
  let XtrainWordsInputSize = [];
  let YtrainTagsOutputSize = [];
  let tokenWords = dstok.tok(requests).tokArr();
  let tokenNmb = tokenWords.length;
  if (dostem == true) {
    tokenWords = dsstem.stem(tokenWords, 0, 0);
  }
  let dsdtstruc = new dropsuit_dtstruc(requests, tags, responses, false);
  let dataStruct = dsdtstruc.dtstruc().xy();
  for (n = 0; n < dataStruct.length; n++) {
    let splitTagPat = dataStruct[n].toString();
    var splitTagPatPart = splitTagPat.split("=");
    let idtg = splitTagPatPart[0];
    var idtag = idtg.split("+");
    let id = parseInt(idtag[0]);
    let tag = idtag[1];
    var pt = splitTagPatPart[1].split(" ");
    let bagArr = [];
    for (s = 0; s < tokenWords.length; s++) {
      bagArr.push(0);
    }
    for (f = 0; f < pt.length; f++) {
      let p = pt[f].trim();
      for (s = 0; s < tokenWords.length; s++) {
        let w = tokenWords[s].trim();
        if (w == p) {
          objIndex = tokenWords.indexOf(w);
          if (objIndex !== -1) {
            let indexVal = bagArr[objIndex];
            bagArr[objIndex] = indexVal + 1;
          }
        }
      }
    }
    XtrainWordsInputSize.push(bagArr);
    YtrainTagsOutputSize.push(id);
    outret = return_bowtOut(XtrainWordsInputSize, YtrainTagsOutputSize);
    if (dispout == true) {
      displayE0(dispout, tag, id, pt, bagArr); /// DISPLAY >>
    }
  }
  displayE1(dispout, tokenWords, tokenNmb, tags, requests, dostem, outret); /// DISPLAY >>
  return outret;
}

function return_bowtOut(XtrainWordsInputSize, YtrainTagsOutputSize) {
  const bowtObj = {
    size_bt: XtrainWordsInputSize.length,
    tag_bt: YtrainTagsOutputSize,
    bow_bt: XtrainWordsInputSize,
    tagsbt: function () {
      return this.tag_bt;
    },
    bowtbt: function () {
      return this.bow_bt;
    },
  };
  return bowtObj;
}

//#endregion

//#region console log

const getdt = require("./infodt.js");
let fnctit = getdt.displayInfoData();
const line = fnctit.line;
var description = fnctit.descript;

function displayE0(dispout, tag, id, pt, bagArr) {
  if (dispout == true) {
    var info = "";
    if (n == 0) {
      info = description;
    } else {
      info = "";
    }
    console.log(
      info,
      "Tag:",
      tag,
      "ID:",
      id,
      "Sentence/Word:",
      pt,
      "Bag of Words:",
      bagArr
    );
  }
}

function displayE1(
  dispout,
  tokenWords,
  tokenNmb,
  tags,
  requests,
  dostem,
  outret
) {
  if (dispout == true) {
    console.log(
      description,
      "\nInput:\n\nTags:\n\n",
      tags,
      "\n\nRequests:\n\n",
      requests,
      "\n\nInput tokens number (",
      tokenNmb,
      ") stemming (",
      dostem,
      ") number (",
      tokenWords.length,
      "):\n\n",
      tokenWords,
      "\n\nOutput:\n\n",
      outret,
      "\n",
      line
    );
  }
}

//#endregion

//#region Export Module Constructor

module.exports = Constructor;

//#endregion
