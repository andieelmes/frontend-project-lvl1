import { askQuestion } from '../cli.js';
import getRandomNumber from '../helpers/get-random-number.js';
import prompt from '../helpers/prompt.js';

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

const prepareQuestion = (name) => askQuestion(getPrompt(), name);

export default (name) => {
  console.log('What is the result of the expression?');

  prompt(prepareQuestion, name);
};
