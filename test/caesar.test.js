// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("Caesar()", () => {
  it("Should return false if there is no input for shift", () => {
    const actual = caesar("Hello");
    expect(actual).to.be.false;
  });
  it("Should return false if the shift value is greater than 25", () => {
    const actual = caesar("Hello", 99);
    expect(actual).to.be.false;
  });
  it("Should return false if the shift value is less than -25", () => {
    const actual = caesar("Hello", -99);
    expect(actual).to.be.false;
  });
  describe("Encode Testing", () => {
    it("Should correctly encode a message by using the shift value", () => {
      const expected = "lipps";
      const actual = caesar("Hello", 4);
      expect(actual).to.equal(expected);
    });
    it("Should wrap around if a letter goes 'off' the alphabet ", () => {
      const expected = "jjj";
      const actual = caesar("zzz", 10);
      expect(actual).to.equal(expected);
    });
    it("Should ignore nonalphabetic symbols including spaces", () => {
      const expected = " ! ! ! ";
      const actual = caesar(" ! ! ! ", 10);
      expect(actual).to.equal(expected);
    });
  });
  describe("Decode Testing", () => {
    it("Should correctly decode a message by using the same shift value", () => {
      const expected = "hello";
      const actual = caesar("lipps", 4, false);
      expect(actual).to.equal(expected);
    });
    it("Should wrap around if a letter goes 'off' the alphabet ", () => {
        const expected = "qqq";
        const actual = caesar("aaa", 10, false);
        expect(actual).to.equal(expected);
      });
      it("Should ignore nonalphabetic symbols including spaces", () => {
        const expected = " ! ! ! ";
        const actual = caesar(" ! ! ! ", 10, false);
        expect(actual).to.equal(expected);
      });
  });
});
