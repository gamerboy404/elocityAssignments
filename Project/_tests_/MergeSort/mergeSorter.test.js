import { mergeSort, merge } from "../../src/MergeSort/mergeSorter.js";

describe("uses merge sort algorithm to sort an array with number elements", () => {
  it("should return a sorted array", () => {
    expect(mergeSort([2, 1])).toEqual([1, 2]);
  });
  it("should return a sorted array", () => {
    expect(mergeSort([2, 1, 4, 3])).toEqual([1, 2, 3, 4]);
  });
  it("should return a sorted array", () => {
    expect(mergeSort([200,20,1,40,60,100])).toEqual([1, 20, 40, 60, 100, 200]);
  });
});
