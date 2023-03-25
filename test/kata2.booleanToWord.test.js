const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns the string value of a bool", () => {

    expect(booleanToWord(true)).toBe("Yes");
    expect(booleanToWord(false)).toBe("No");

  })
});
