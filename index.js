const { add, subtract, multiply, divide } = require('./calculator');

const [, , operation, num1, num2] = process.argv;

if (!operation || !num1 || !num2) {
  console.log("❌ Please provide: operation, num1, and num2");
  console.log("✅ Example: node index.js add 5 2");
  process.exit(1);
}

const a = parseFloat(num1);
const b = parseFloat(num2);

if (isNaN(a) || isNaN(b)) {
  console.log("❌ num1 and num2 must be valid numbers.");
  process.exit(1);
}

let result;

switch (operation) {
  case 'add':
    result = add(a, b);
    break;
  case 'sub':
    result = subtract(a, b);
    break;
  case 'mul':
    result = multiply(a, b);
    break;
  case 'div':
    result = divide(a, b);
    break;
  default:
    console.log("❌ Invalid operation. Use: add, sub, mul, div");
    process.exit(1);
}

console.log(`✅ Result: ${result}`);
