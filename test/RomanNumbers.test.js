import RomanNumber from "../main/RomanNumbers"

describe("Roman numbers ", () => {
    it("should return 'X' when receives 1", () => {
        expectRoman(1, "I");
    })

    it("should return 'II' when receives 2", () => {
        expectRoman(2, "II");
    })

    it("should return 'III' when receives 3", () => {
        expectRoman(3, "III");
    })

    it("should return 'V' when receives 5", () => {
        expectRoman(5, "V");
    })

    it("should return 'IV' when receives 4", () => {
        expectRoman(4, "IV");
    })

    it("should return 'VI' when receives 6", () => {
        expectRoman(6, "VI");
    })

    it("should return 'VIII' when receives 8", () => {
        expectRoman(8, "VIII");
    })

    it("should return 'X' when receives 10", () => {
        expectRoman(10, "X");
    })

    it("should return 'IX' when receives 9", () => {
        expectRoman(9, "IX");
    })

    it("should return 'XII' when receives 12", () => {
        expectRoman(12, "XII");
    })

    it("should return 'XX' when receives 20", () => {
        expectRoman(20, "XX");
    })

    it("should return 'XXXIX' when receives 39", () => {
        expectRoman(39, "XXXIX");
    })

    it("should return 'XLIX' when receives 49", () => {
        expectRoman(49, "XLIX");
    })

    it("should return 'XLVI' when receives 46", () => {
        expectRoman(46, "XLVI");
    })

    it("should return 'LXXVI' when receives 76", () => {
        expectRoman(76, "LXXVI");
    })

    it("should return 'XCIX' when receives 99", () => {
        expectRoman(99, "XCIX");
    })

    it("should return 'LXXXVIII' when receives 88", () => {
        expectRoman(88, "LXXXVIII");
    })

    it("should return 'CCXI' when receives 211", () => {
        expectRoman(211, "CCXI");
    })

    it("should return 'CMXCIX' when receives 999", () => {
        expectRoman(999, "CMXCIX");
    })

    it("should return 'DCCCLXXIV' when receives 999", () => {
        expectRoman(874, "DCCCLXXIV");
    })

    it("should return 'MMXXII' when receives 2022", () => {
        expectRoman(2022, "MMXXII");
    })

    it("should return 'MDCCLXXXIX' when receives 1789", () => {
        expectRoman(1789, "MDCCLXXXIX");
    })
})


function expectRoman(number, expected) {
    const romanNumber = new RomanNumber()

    const result = romanNumber.convertToString(number)

    expect(result).toBe(expected)
}