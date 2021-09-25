const fs = require("fs");

fs.readFile(process.argv[2], "utf8", (err, data) => {
  if (err) throw err;
  else {
    const start = Date.now();
    wordComposition(data.split("\r\n"));
    console.log("Time taken to process: %d milliseconds", Date.now() - start);
  }
});

var wordMap = new Map();

function wordComposition(words, longestWordstoLog = 2) {
  const longestWords = [];
  for (const word of words) {
    wordMap.set(word, true);
  }
  for (const word of words) {
    wordMap.delete(word);
    if (isComposed(word)) {
      longestWords.push(word);
      longestWords.sort((a, b) => -a.length + b.length);
      if (longestWords.length > longestWordstoLog) longestWords.pop();
    }
    wordMap.set(word, true);
  }
  longestWords.forEach((word) => console.log(word));
}

function isComposed(word) {
  if (!word.length) return true;
  for (let i = 1; i <= word.length; i++) {
    if (
      wordMap.has(word.substring(0, i)) &&
      isComposed(word.substring(i, word.length))
    ) {
      return true;
    }
  }
  return false;
}
