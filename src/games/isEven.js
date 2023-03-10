import setTheGame from '../index.js';
import getRandomNumber from '../utils.js';

const middleSizeOfNumber = 1000;

const isEven = (number) => number % 2 === 0;

const checkIfNumIsEven = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};

const introduction = 'Answer "yes" if the number is even, otherwise answer "no".';

const setGameRound = () => {
  const number = getRandomNumber(middleSizeOfNumber);
  const question = `${number}`;
  const expectedAnswer = checkIfNumIsEven(number);
  return [question, expectedAnswer];
};

export default () => setTheGame(introduction, setGameRound);
