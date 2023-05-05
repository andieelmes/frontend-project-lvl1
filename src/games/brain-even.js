#!/usr/bin/env node

import { askQuestion } from '../cli.js';
import getRandomNumber from '../helpers/get-random-number.js';
import printCongrats from '../helpers/print-congrats.js';
import MAX_ROUND_COUNT from '../constants/max-round-count.js';

const YES = 'yes';
const NO = 'no';

const numbers = Array(MAX_ROUND_COUNT).fill().map(() => getRandomNumber());
const isNumberEven = (number) => number % 2 === 0;

const prompt = (name, prevCount = 0) => {
  let count = prevCount;

  console.log('What is the result of the expression?');

  const number = numbers.shift();
  const { isCorrectAnswer } = askQuestion({
    question: number,
    correctAnswer: isNumberEven(number) ? YES : NO,
  }, name);

  if (!isCorrectAnswer) return;

  count += 1;

  if (count === MAX_ROUND_COUNT) {
    printCongrats(name);
    return;
  }

  prompt(name, count);
};

export default (name) => {
  prompt(name);
};
