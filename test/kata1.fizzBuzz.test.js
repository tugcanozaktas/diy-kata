const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  it("returns Fizz when passed a multiple of 3", () => {
    
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(9)).toBe("Fizz");

  });

  it("returns Buzz when passed a multiple of 5", () => {

    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");

  });

  it("returns FizzBuzz when passed a multiple 3 and 5", () => {

    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(60)).toBe("FizzBuzz");
    expect(fizzBuzz(120)).toBe("FizzBuzz");

  });

  it("returns the number when it isn't a multiple of 3 or 5", () => {

    expect(fizzBuzz(28)).toBe(28);
    expect(fizzBuzz(11)).toBe(11);
    expect(fizzBuzz(82)).toBe(82);
  });
});
