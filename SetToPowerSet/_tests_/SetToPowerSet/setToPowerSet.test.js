import generatePowerSet from "../../src/SetToPowerSet/setToPowerSet.js";

describe("returns a power set of any given set", () => {
    it("should give a list of all the subsets", () => {
        expect(generatePowerSet([1])).toEqual([[], [1]]);
    });
    it("should give a list of all the subsets", () => {
        expect(generatePowerSet([1,2])).toEqual([[], [1], [2], [1, 2]]);
    });
  
});