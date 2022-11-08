import {Roman} from "./Roman";
import {I} from "./I";

export default class RomanNumber {

    convertToString(number) {
        const i = new I();
        const v = new Roman("V", 5, 1, i);
        const x = new Roman("X", 10, 1, v);
        const l = new Roman("L", 50, 10, x);
        const c = new Roman("C", 100, 10, l);
        const d = new Roman("D", 500, 100, c);
        const m = new Roman("M", 1000, 100, d);

        return m.convert(number)
    }
}