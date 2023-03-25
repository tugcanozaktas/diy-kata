const { humanCatDogYears } = require("../src");

// Look Ma, no handlebars!!!
describe("humanCatDogYears", () => {
    it("return an array of three numbers. humanYears, catYears, dogYears", () => {
        expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    })
})