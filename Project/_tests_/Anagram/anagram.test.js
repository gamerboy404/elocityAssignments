import anagramChecker from "../../src/Anagram/anagram.js";

describe("checks if two given scripts are anagram or not", () => {
  it("should return true", () => {
    expect(anagramChecker("tanu", "natu")).toEqual(true);
  });
  it("should return false", () => {
    expect(anagramChecker("abcd", "bcd")).toEqual(false);
  });
  it("should return true", () => {
    expect(anagramChecker("TANU", "NaTu")).toEqual(true);
  });
  it("should return true", () => {
    expect(anagramChecker("Listen", "Silent")).toEqual(true);
  });
});
