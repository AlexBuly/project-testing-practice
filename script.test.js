import { capitalize, reverseString, calculator } from "./script.js";

test("Returns string with capitalized first letter" , () => {
    expect(capitalize("cat")).toBe("Cat");
});

test("String reversed", () => {
    expect(reverseString("happy")).toBe("yppah");
});

const calc = calculator();

test("Calculate functions", () => {
    expect(calc.add(2, 2)).toBe(4);
    expect(calc.sub(8, 5)).toBe(3);
    expect(calc.mult(4, 4)).toBe(16);
    expect(calc.div(35, 5)).toBe(7);
})