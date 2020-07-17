import numToWords from "../../src/NumToWords/numToWords.js";

describe("Coverts number to words", () => {
  it("should covert number to word", () => {
    expect(numToWords(1)).toEqual("one  ");
  });
  it("should covert number to word", () => {
    expect(numToWords(20)).toEqual("twenty  ");
  });
  it("should covert number to word", () => {
    expect(numToWords(155)).toEqual("one hundred fifty five  ");
  });
  it("should covert number to word", () => {
    expect(numToWords(12352155)).toEqual("twelve million three hundred fifty two thousand one hundred fifty five  ");
  });
 
});
