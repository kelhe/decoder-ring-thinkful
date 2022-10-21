// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
  describe("Substitution key test", () => {
    it("Should return false if the alphabet parameter is not exactly 26 characters", () => {
      const message = "test";
      const alphabet = "abcdefghijklmnopqrstuvwxy";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
    it("Should return false if any character in the alphabet parameter is not unique", () => {
      const message = "test";
      const alphabet = "abcabcabcabcabcabcabcabcyz";
      const actual = substitution(message, alphabet, true);
      expect(actual).to.be.false;
    });
    describe("Encoding Test", () => {
      it("Should encode the message with the key given", () => {
        const expected = "rwar";
        const actual = substitution("test", "!?bdwfghijklmnopqtaruv.xyz", true);
        expect(actual).to.equal(expected);
      });
      it("Should encode the message if the input has nonalphabetical characters", () => {
        const expected = "ulki ki m uciu!";
        const actual = substitution("this is a test!","mnbvcxzlkjhgfdsapoiuytrewq",true);
        expect(actual).to.equal(expected);
      });
      it("Should ignore capital letters", () => {
        const expected = ".ci.";
        const actual = substitution("TEST", "mnbvcxzlkjhgfdsapoi.ytrewq", true);
        expect(actual).to.equal(expected);
      });
    });
    describe("Decoding Test", () => {
      it("Should decode the message with the key given", () => {
        const expected = "test";
        const actual = substitution("uciu","mnbvcxzlkjhgfdsapoiuytrewq",false);
        expect(actual).to.equal(expected)
      });
      it("Should decode the message if the input has spaces", () => {
        const expected = "this is a test";
        const actual = substitution("ulki ki m uciu!","mnbvcxzlkjhgfdsapoiuytrewq",false);
        expect(actual).to.equal(expected);
      });
      it("Should work with any key including ones with special characters", () => {
        const expected = "test"
        const actual = substitution("?.!?", "abcd.fghijklmnopqr!?uvwxyz",false);
        expect(actual).to.equal(expected);
      });
    });
  });
});

//abcdefghijklmnopqrstuvwxyz
//mnbvcxzlkjhgfdsapoiuytrewq
