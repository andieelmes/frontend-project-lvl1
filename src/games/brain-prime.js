import { askQuestion } from '../cli.js';
import getRandomNumber from '../helpers/get-random-number.js';
import prompt from '../helpers/prompt.js';
import { YES, NO } from '../constants/yes-no-answers.js';

const isNumberPrime = (number) => {
  if (number === 2 || number === 3) { return true; }
  if (number <= 1 || number % 2 === 0 || number % 3 === 0) { return false; }
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }
  return true;
};

const prepareQuestion = (name) => {
  const number = getRandomNumber();

  return askQuestion({
    question: number,
    correctAnswer: isNumberPrime(number) ? YES : NO,
  }, name);
};

export default (name) => {
  console.log(`Answer "${YES}" if the number is prime, otherwise answer "${NO}".`);

  prompt(prepareQuestion, name);
};
