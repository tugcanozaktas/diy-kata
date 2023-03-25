const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(789)).toEqual([9, 8, 7]);
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1]);
    expect(numberToReversedDigits(365)).toEqual([5, 6, 3]);
    expect(numberToReversedDigits(7)).toEqual([7]);
  });
});
