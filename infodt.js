//#region Dysplay info data

function displayInfoData() {
  const liblink =
    "\nDropSuit: https://github.com/ladooniani/DropSuit/blob/main/DropSuit.md" +
    "\nCopyright © 2016-" +
    getYear() +
    " Lado Oniani- DropSuit, tAi lab. All Rights Reserved.\n\n";
  const libName = "DropSuit function:\n\n";
  const line = "\n🌢\n";
  const linemid = "\n----------------------------------------\n";
  const endline = "\n⬤\n";
  const noteline = "NOTE: —————————————————————";
  const notelend = "———————————————————————————";
  const dispOut =
    "bool: (true/false) Display processing output results in terminal.\n";
  const inf = line + liblink + libName;

  var bowtag_fDescription =
    inf +
    "bowtag(boolean)\narray: Processes default object instance json key value" +
    "\n(req_arr: requests), (tag_arr: tags) array patterns.\n" +
    "boolean: (true/false) Enable or disable stemming." +
    "\n\nReturn:\n\nbowtg() Bag of words, tags() Tags IDx value sequence arrays.\n" +
    linemid;

  const displayInfoData = {
    bowtag_fD: bowtag_fDescription,
    liblink:
      "\nDropSuit: https://github.com/ladooniani/DropSuit/blob/main/DropSuit.md" +
      "\nCopyright © 2016-" +
      getYear() +
      " Lado Oniani- DropSuit, tAi lab. All Rights Reserved.\n\n",
    libName: "\nDropSuit NLP module library function:\n",
    line: endline,
    procDt: "Processing log:\n\n",
    outRet: "\n\nOUTPUT RETURN DATA:",
  };

  return displayInfoData;
}

function getYear() {
  var year = new Date().getFullYear();
  return year;
}

//#endregion

//#region Modules

module.exports = {
  displayInfoData,
};

//#endregion
