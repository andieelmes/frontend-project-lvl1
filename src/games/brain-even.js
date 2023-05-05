#!/usr/bin/env node

import { askQuestion } from '../cli.js';
import getRandomNumber from '../helpers/get-random-number.js';
import printCongrats from '../helpers/print-congrats.js';

const YES = 'yes';
const NO = 'no';
const QUIZ_LENGTH = 3;

const numbers = Array(QUIZ_LENGTH).fill().map(() => getRandomNumber());
const isNumberEven = (number) => number % 2 === 0;

export default (name) => {
  let correctAnswersCount = 0;

  console.log(`Answer "${YES}" if the number is even, otherwise answer "${NO}".`);

  // eslint-disable-next-line no-restricted-syntax
  for (const number of numbers) {
    const { isCorrectAnswer } = askQuestion({
      question: number,
      correctAnswer: isNumberEven(number) ? YES : NO,
    });

    if (!isCorrectAnswer) {
      break;
    }

    correctAnswersCount += 1;
  }

  if (correctAnswersCount === QUIZ_LENGTH) {
    printCongrats(name);
  }
};
