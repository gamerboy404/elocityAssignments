import multipleFinder from "../../src/FizzBuzz/fizzBuzz.js";

describe("gives Fizz for multiple of 3 , buzz for 5 and fizzbuzz for 15 or print the number if not a multiple", () => {
  it("should give fizz buzz respectively", () => {
    expect(multipleFinder(1)).toEqual([1]);
  });
  it("should give fizz buzz respectively", () => {
    expect(multipleFinder(3)).toEqual([1, 2, "fizz"]);
  });
  it("should give fizz buzz respectively", () => {
    expect(multipleFinder(5)).toEqual([1, 2, "fizz", 4, "buzz"]);
  });
  it("should give fizz buzz respectively", () => {
    expect(multipleFinder(15)).toEqual([
      1,
      2,
      "fizz",
      4,
      "buzz",
      "fizz",
      7,
      8,
      "fizz",
      "buzz",
      11,
      "fizz",
      13,
      14,
      "fizzbuzz",
    ]);
  });
});
