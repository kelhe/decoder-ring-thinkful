// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  //Make object with the code key to be used in the cipher
  const polyKey = [
    { a: 11 },
    { b: 21 },
    { c: 31 },
    { d: 41 },
    { e: 51 },
    { f: 12 },
    { g: 22 },
    { h: 32 },
    { i: 42 },
    { j: 42 },
    { k: 52 },
    { l: 13 },
    { m: 23 },
    { n: 33 },
    { o: 43 },
    { p: 53 },
    { q: 14 },
    { r: 24 },
    { s: 34 },
    { t: 44 },
    { u: 54 },
    { v: 15 },
    { w: 25 },
    { x: 35 },
    { y: 45 },
    { z: 55 },
  ];
  const decodeKey = [
    { 11: "a" },
    { 21: "b" },
    { 31: "c" },
    { 41: "d" },
    { 51: "e" },
    { 12: "f" },
    { 22: "g" },
    { 32: "h" },
    { 42: "|i/j|" },
    { 52: "k" },
    { 13: "l" },
    { 23: "m" },
    { 33: "n" },
    { 43: "o" },
    { 53: "p" },
    { 14: "q" },
    { 24: "r" },
    { 34: "s" },
    { 44: "t" },
    { 54: "u" },
    { 15: "v" },
    { 25: "w" },
    { 35: "x" },
    { 45: "y" },
    { 55: "z" },
  ];

  function polybius(input, encode = true) {
    if (!encode) {
      const noSpaces = input.split(" ").join("");
      const evenCheck = noSpaces.length % 2 == 0; //check if the input is an even amount of characters
      if (!evenCheck) return false; //return false early if the input is not even
      let wordArr = input.split(" "); //split the numbers by spaces so we can maintain it later
      let tempArr = [];
      let result = wordArr.reduce((acc, word) => { //first reduce into an array which will allow us to work with each individual word
          let pairs = word.split("").reduce((result, num) => { //for each word we will split into number pairs for each letter so there will be multiple arrays in the array if there is multiple words and will allow us to keep spaces later
            tempArr.push(num);
            if (tempArr.length == 2) {
              //pushes nums into array to be paired together
              let joined = tempArr.join("");
              result.push(joined);
              tempArr = [];
            }
            return result;},[]);
          acc.push(pairs);
          return acc;
        }, []).map((word) => {
          return word.map((letterNumPair) => { //for each pair of numbers we will find the respective letter obj in the decode key 
              return decodeKey.find((key) => key[letterNumPair]);
            }).map((obj) => { //converts the object to the letter value  
              let keys = Object.keys(obj);
              return obj[keys];
            }).join(""); // join the word together
        }).join(" "); // join the sentence together
      return result;
    }
    let strArr = input.toLowerCase().split("");
    let coded = strArr
      .reduce((acc, letter) => {
        let checkIfLetter = letter.charCodeAt(0);
        let found;
        if (checkIfLetter >= 97 && checkIfLetter <= 122) {
          // checks if the current character in the string is a letter
          found = polyKey.find((key) => key[letter]); //checks the polybius square and returns the object the letter is in
        } else {
          found = letter;
        } //if the current character isnt a letter then it will ignore it and push to the acc
        acc.push(found);
        return acc;
      }, [])
      .map((obj) => {
        let keys = Object.keys(obj); //gets the keys of the object
        return obj[keys]; //returns just the value of the object
      });
    let encoded = coded.join(""); //connects the number as a string
    return encoded;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
