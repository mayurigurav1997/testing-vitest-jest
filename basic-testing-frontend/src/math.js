import { clearNumbers } from "./util/numbers";

export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}

export function calculateResult(numberValues){
  try {
    const numbers = clearNumbers(numberValues)
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }
  return result;
}