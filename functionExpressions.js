const calculate = (num1, num2, operation) => {
    return eval(num1+operation+num2)
}

const operations = {
    multiply: "*",
    divide: "/",
    add: "+",
    subtract: "-"
}
const selectedOperation = "multiply";

console.log(calculate(6, 3, operations[selectedOperation])); // 18

