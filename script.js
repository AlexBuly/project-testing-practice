export function capitalize(string) {
    const firstLetter = string.slice(0, 1);
    const restOfString = string.slice(1);
    return firstLetter.toUpperCase() + restOfString;
}

export function reverseString(string) {
    return string.split("").reverse().join("");
}

export function calculator() {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mult = (a, b) => a * b;
    const div = (a, b) => a / b;

    return {add, sub, mult, div}
}