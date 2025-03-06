import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./script.js";

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
});

test("Caesar cipher algorithm", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    expect(caesarCipher("HeLLo",3)).toBe("KhOOr");
    expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Average, min, max, length", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toBe("max: 8, min: 1, length: 6, average: 4");
});