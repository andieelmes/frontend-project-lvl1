export default (correctAnswer, userAnswer) => {
  if (correctAnswer === userAnswer) return 'Correct!';

  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
};
