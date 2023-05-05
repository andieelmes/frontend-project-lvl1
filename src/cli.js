import readlineSync from 'readline-sync';
import getResponse from './helpers/get-response.js';

export const askName = () => {
  const name = readlineSync.question('May I have your name? ') || 'Anonymous';
  console.log(`Hello, ${name}!`);
  return name;
};

export const askQuestion = (prompt, name) => {
  const { question, correctAnswer } = prompt;

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  console.log(getResponse(correctAnswer, userAnswer, name));

  return { isCorrectAnswer: userAnswer === correctAnswer };
};
