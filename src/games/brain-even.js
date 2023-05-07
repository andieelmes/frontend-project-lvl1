import { askQuestion } from '../cli.js';
import getRandomNumber from '../helpers/get-random-number.js';
import prompt from '../helpers/prompt.js';
import { YES, NO } from '../constants/yes-no-answers.js';

const isNumberEven = (number) => number % 2 === 0;

const prepareQuestion = (name) => {
  const number = getRandomNumber();

  return askQuestion({
    question: number,
    correctAnswer: isNumberEven(number) ? YES : NO,
  }, name);
};

export default (name) => {
  console.log(`Answer "${YES}" if the number is even, otherwise answer "${NO}".`);

  prompt(prepareQuestion, name);
};
