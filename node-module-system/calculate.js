import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

const num1 = Number(process.argv[2]);
const operator = process.argv[3];
const num2 = Number(process.argv[4]);

if (operator === '+' || operator === 'plus') {
  console.log(`result: ${add(num1, num2)}`);
} else if (operator === '-' || operator === 'minus') {
  console.log(`result: ${subtract(num1, num2)}`);
} else if (operator === '*' || operator === 'multiply') {
  console.log(`result: ${multiply(num1, num2)}`);
} else if (operator === '/' || operator === 'divide') {
  console.log(`result: ${divide(num1, num2)}`);
} else {
  console.log(`invalid operator`);
}
