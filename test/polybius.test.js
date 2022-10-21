// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
  describe("Encoding Test", () => {
    it("Should return a string as a result", () => {
      const actual = polybius("test", true);
      expect(actual).to.be.a("string");
    });
    it("Should correctly encode the message using the polybius square", () => {
      const expected = "44513444";
      const actual = polybius("test", true);
      expect(actual).to.equal(expected);
    });
    it("Should ignore spaces and nonalphabetical characters", () => {
      const expected = "44324234 4234 11 44513444!";
      const actual = polybius("This is a test!", true);
      expect(actual).to.equal(expected);
    });
    it("Should convert both 'i/j' to the number 42", () => {
      const expected = "424242424242";
      const actual = polybius("ijijij", true);
      expect(actual).to.equal(expected);
    });
  });
  describe("Decoding Test", () => {
    it("Should return a string as a result", () => {
      const actual = polybius("44513444", false);
      expect(actual).to.be.a("string");
    });
    it("Should return false if the decoding input is not an even amount of numbers excluding spaces", () => {
        const actual = polybius("1111 111", false);
        expect(actual).to.be.false;
      });
    it("Should correctly decode the message using the polybius square", () => {
        const expected = "test";
        const actual = polybius("44513444", false);
        expect(actual).to.equal(expected);
      });
    it("Should maintain spaces throughout after decoding", () => {
        const expected = "test test test";
        const actual = polybius("44513444 44513444 44513444", false);
        expect(actual).to.equal(expected);
      });
      it("Should show both leters when decoding 42 because i/j shares a space", () => {
        const expected = "th|i/j|s |i/j|s a test";
        const actual = polybius("44324234 4234 11 44513444", false);
        expect(actual).to.equal(expected);
      });
  });
});
