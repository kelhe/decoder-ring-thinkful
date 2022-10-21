// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  //set array with the alphabet and an empty array for the keys
  const az = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let subKey = [];
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet) return false
    if (!(alphabet.length == 26)) return false;
    for (let i = 0; i < alphabet.length; i++) {
      let letter = alphabet[i];
      if (alphabet.indexOf(letter) !== alphabet.lastIndexOf(letter)) //check if there is any repeating characters in the alphabet parameter. Use indexof current letter in string and compare it to the lastindexof that letter in the string if not the same means there is a duplicate  
        return false;
    }
    if (!encode) { //decode similar to the encode but we are getting the decoded letter from the az array and we have to allow special characters through or it will return the special character instead of the letter
      subKey = alphabet.split(""); 
      const spaces = [1] //random variable to equal to a space to be replaces later with an actual space
      //I can also maintain spaces another way by spliting into array of words then mapping and spliting again into characters then reduce after and join first array with .join(" ") at the end
      let convert = input.toLowerCase().split(" ").join(`${spaces}`).split(""); //splits the input by spaces if there are any and then join with my spaces variable and then split them all to be individual characters to be decoded
      let noSpaces = convert.reduce((acc, letter) => {
        if(letter == spaces){ //if the current "letter" in the array is the spaces then we will just push to acc to be replaced at the end 
          acc.push(letter)
          return acc
          }
          let place = subKey.indexOf(letter); //finds the index of the each letter in the subKey which is the alphabet parameter
          let coded = az[place]; // Get the letter in the index of the subkey which converts the letter to its place in the az key which is the actual alphabet 
          acc.push(coded); //push the coded letter into the accumulator to be joined as a string after
          return acc;
        }, []).join("")
        return noSpaces.replaceAll(spaces," ");//
    }
    subKey = alphabet.split(""); //splits and sets the alphabet parameter to our empty array
    let convert = input.toLowerCase().split(""); //splits in an array so we can reduce it
    return convert.reduce((acc, letter) => {
        if(!az.includes(letter)){ //if the letter is a nonalphabetical character or space it will push to the accumulator to be joined after 
          acc.push(letter)
          return acc
        }
        let place = az.indexOf(letter); //finds the index of the each letter in the alphabet to be used in the encoding with the subKey
        let coded = subKey[place]; // Get the letter in the index of the subkey which converts the letter into its coded form from the alphabet
        acc.push(coded); //push the coded letter into the accumulator to be joined as a string after
        return acc;
      }, []).join("");
    }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
