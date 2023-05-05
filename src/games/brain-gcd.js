import { askQuestion } from '../cli.js';
import getRandomNumber from '../helpers/get-random-number.js';
import prompt from '../helpers/prompt.js';

const findGCD = (a, b) => {
  let divisor = a;
  let remainder = b;

  while (remainder !== 0) {
    const temp = remainder;
    remainder = divisor % remainder;
    divisor = temp;
  }

  return divisor;
};

const prepareQuestion = (name) => {
  const a = getRandomNumber(0, 100);
  const b = getRandomNumber(0, 100);
  const gcd = findGCD(a, b);

  return askQuestion({
    question: `${a} ${b}`, correctAnswer: String(gcd),
  }, name);
};

export default (name) => {
  console.log('Find the greatest common divisor of given numbers.');

  prompt(prepareQuestion, name);
};
