#!/usr/bin/env node

import readlineSync from 'readline-sync';

const YES = 'yes';
const NO = 'no';
const QUIZ_LENGTH = 3;

const getRandomNumber = () => Math.floor(Math.random() * 100);
const numbers = Array(QUIZ_LENGTH).fill().map(() => getRandomNumber());
const isNumberEven = (number) => number % 2 === 0;

const getResponse = (correctAnswer, userAnswer) => {
  if (correctAnswer === userAnswer) return 'Correct!';

  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
};

export default (name) => {
  let correctAnswersCount = 0;

  console.log(`Answer "${YES}" if the number is even, otherwise answer "${NO}".`);

  // eslint-disable-next-line no-restricted-syntax
  for (const number of numbers) {
    const isEven = isNumberEven(number);
    const correctAnswer = isEven ? YES : NO;

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const response = getResponse(correctAnswer, userAnswer);
    if (userAnswer !== correctAnswer) {
      console.log(response);
      break;
    }

    console.log(response);
    correctAnswersCount += 1;
  }

  if (correctAnswersCount === QUIZ_LENGTH) {
    console.log(`Congratulations, ${name}!`);
  }
};
