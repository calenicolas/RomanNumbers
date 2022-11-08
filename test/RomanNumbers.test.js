import RomanNumber from "../main/RomanNumbers"

describe("Roman numbers ", () => {
    it("should return 'X' when receives 1", () => {
        expectRoman(1, "I");
    })
})


function expectRoman(number, expected) {
    const romanNumber = new RomanNumber()

    const result = romanNumber.convertToString(number)

    expect(result).toBe(expected)
}