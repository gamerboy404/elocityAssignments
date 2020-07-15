import topKElement from "../../src/TopKChar/topKChar.js";

describe("give most frequently used Kth element ", () => {
  it("for doggo is should give g and o", () => {
    expect(topKElement("doggo", 2)).toEqual(["g", "o"]);
  });
  it("for bubble is should give b ", () => {
    expect(topKElement("bubble", 1)).toEqual(["b"]);
  });
});
