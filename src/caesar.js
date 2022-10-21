// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) {
    //return false early if there is no input/shift value or if shift is great that +- 25
    if (!input || !shift || shift > 25 || shift < -25) return false;
    if (!encode) {
      //make the string to lowercase because we should ignore capital and then splits the string into an array
      let text = input.toLowerCase().split(""); 
      //map so we can adjust each letter in the array to the new spot it should be in while ignoring spaces and symbols
      let shifted = text.map((letter) => {
        let currentCode = letter.charCodeAt(0); //get the charCode of the current letter
        let shiftedCode;
        //if the current code is between 97 and 122 then it is an alphabet and should be shifted
        if (currentCode >= 97 && currentCode <= 122) {
            shiftedCode = currentCode - shift;
          if (shiftedCode > 122) {
            shiftedCode = 96 + (shiftedCode - 122);
          } else if (shiftedCode < 97) {
            shiftedCode = 123 + (shiftedCode - 97);
          }
        } else{
          shiftedCode = currentCode
        }
        let newLetter = String.fromCharCode(shiftedCode);
        return newLetter;
      });
      let result = shifted.join("");
      return result;
    }
    //if encode parameter is true then same code will apply from the decode but the shift should be the other way for encode
    let text = input.toLowerCase().split(""); 
    let shifted = text.map((letter) => {
      let currentCode = letter.charCodeAt(0);
      let shiftedCode;
      if (currentCode >= 97 && currentCode <= 122) {
          shiftedCode = currentCode + shift;
        if (shiftedCode > 122) {
          shiftedCode = 96 + (shiftedCode - 122);
        } else if (shiftedCode < 97) {
          shiftedCode = 123 + (shiftedCode - 97);
        }
      } else{
        shiftedCode = currentCode
      }
      let newLetter = String.fromCharCode(shiftedCode);
      return newLetter;
    });
    let result = shifted.join("");
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
