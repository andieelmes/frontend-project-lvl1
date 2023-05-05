export default (correctAnswer, userAnswer, name) => {
  if (correctAnswer === userAnswer) return 'Correct!';

  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;
};
