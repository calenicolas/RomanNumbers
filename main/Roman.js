export class Roman {
    constructor(symbol, value, base, nextRoman) {
        this.nextRoman = nextRoman
        this.value = value
        this.symbol = symbol
        this.base = base
    }

    convert(number) {
        if (this.appliesTotallyTo(number)) {
            const nextNumber = Math.abs(number - this.value);
            return this.symbol + this.convert(nextNumber)
        }

        if (this.appliesPartiallyTo(number)) {
            const nextNumber = Math.abs(number - (this.value - this.base));
            return this.nextRoman.convert(this.base) + this.symbol + this.nextRoman.convert(nextNumber)
        }

        return this.nextRoman.convert(number)
    }

    appliesPartiallyTo(number) {
        return number >= this.value - this.base;
    }

    appliesTotallyTo(number) {
        return number >= this.value;
    }
}