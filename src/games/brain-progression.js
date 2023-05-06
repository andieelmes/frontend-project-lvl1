import { askQuestion } from '../cli.js';
import getRandomNumber from '../helpers/get-random-number.js';
import prompt from '../helpers/prompt.js';

const MISSING_ELEMENT = '..';

const generateProgression = (start, length, increase) => (
  new Array(length)
    .fill()
    .map((_, index) => start + ((index + 1) * increase))
);

const formatProgression = (progression, missingIndex) => {
  const localProgression = [...progression];
  localProgression[missingIndex] = MISSING_ELEMENT;

  return localProgression.join(' ');
};

const prepareQuestion = (name) => {
  const start = getRandomNumber(5, 10);
  const length = getRandomNumber(start, 30);
  const missingIndex = getRandomNumber(0, length - 1);
  const increase = getRandomNumber(2, 4);
  const progression = generateProgression(start, length, increase);

  return askQuestion({
    question: formatProgression(progression, missingIndex),
    correctAnswer: String(progression[missingIndex]),
  }, name);
};

export default (name) => {
  console.log('What number is missing in the progression?');

  prompt(prepareQuestion, name);
};
