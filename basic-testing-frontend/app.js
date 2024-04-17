import { extractEnteredNumberValues, extractNumbers } from './src/parser.js';
import {
  validateStringNotEmpty,
  validateNumber,
} from './src/util/validation.js';
import { add, calculateResult } from './src/math.js';
import { transformToNumber } from './src/util/numbers.js';
import { generateResultText } from './output.js';

const form = document.querySelector('form');
const output = document.getElementById('result');

function formSubmitHandler(event) {
  event.preventDefault();
  const numberVlaues=extractEnteredNumberValues(form)

  let result = calculateResult(numberVlaues);
  const resultText = generateResultText(result)

  output.textContent = resultText;
}

form.addEventListener('submit', formSubmitHandler);
