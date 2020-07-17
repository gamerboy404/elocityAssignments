import arrToChunk from "../../src/ArrToSubArr/arrToSubArr.js";
describe("divides array in to chunks of given number", () => {
  it("should give chunks of size 2", () => {
    expect(arrToChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9],
    ]);
  });
  it("should give chunks of size 3", () => {
    expect(arrToChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });
  it("should give chunks of size 1", () => {
    expect(arrToChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)).toEqual([
      [1],
      [2],
      [3],
      [4],
      [5],
      [6],
      [7],
      [8],
      [9],
    ]);
  });
});
