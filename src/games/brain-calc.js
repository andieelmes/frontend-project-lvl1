#!/usr/bin/env node

import { askQuestion } from '../cli.js';
import getRandomNumber from '../helpers/get-random-number.js';
import printCongrats from '../helpers/print-congrats.js';
import MAX_ROUND_COUNT from '../constants/max-round-count.js';

const EXPRESSIONS = [
  { kind: '+', fn: (a, b) => a + b },
  { kind: '-', fn: (a, b) => a - b },
  { kind: '*', fn: (a, b) => a * b },
];

const getPrompt = () => {
  const a = getRandomNumber(0, 10);
  const b = getRandomNumber(0, 10);
  const { kind, fn } = EXPRESSIONS[getRandomNumber(0, 3)];

  return { question: `${a} ${kind} ${b}`, correctAnswer: String(fn(a, b)) };
};

const prompt = (name, prevCount = 0) => {
  let count = prevCount;

  console.log('What is the result of the expression?');
  const { isCorrectAnswer } = askQuestion(getPrompt(), name);

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
