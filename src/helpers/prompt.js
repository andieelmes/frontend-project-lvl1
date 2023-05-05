import printCongrats from './print-congrats.js';
import MAX_ROUND_COUNT from '../constants/max-round-count.js';

const prompt = (askQuestion, name, prevCount = 0) => {
  let count = prevCount;
  const { isCorrectAnswer } = askQuestion(name, count);
  if (!isCorrectAnswer) return;

  count += 1;

  if (count === MAX_ROUND_COUNT) {
    printCongrats(name);
    return;
  }

  prompt(askQuestion, name, count);
};

export default prompt;
