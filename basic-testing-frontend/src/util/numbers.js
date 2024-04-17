import { validateNumber, validateStringNotEmpty } from "./validation";

export function transformToNumber(value) {
  return +value;
}

export function clearNumbers(numberValues){
  const numbers=[]
  for (const numberInput of numberInputs) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
}
