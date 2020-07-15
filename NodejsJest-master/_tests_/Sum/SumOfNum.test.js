import SumOfNum from "../../src/Sum/SumOfNum";

describe("Sum function Tests", () => {
  it("should sum up two integers", () => {
    expect(SumOfNum(1, 2)).toEqual(3);
  });
});
