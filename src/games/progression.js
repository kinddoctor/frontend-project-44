import generateTheGame from '../index.js';
import getRandomNumber from '../utils.js';

const middleSizeOfNumber = 100;
const smallSizeOfNumber = 10;

const calculateCorrectAnswer = (arrayOfNums, placeOfTheGap, stepOfProgression) => {
  const previousNumberIndex = placeOfTheGap - 1;
  return arrayOfNums[previousNumberIndex] + stepOfProgression;
};

const getTheProgression = () => {
  const arrayOfNums = [];
  const number1 = getRandomNumber(middleSizeOfNumber);
  const stepOfProgression = getRandomNumber(middleSizeOfNumber);
  arrayOfNums.push(number1);
  for (let i = 1; i < 10; i += 1) {
    arrayOfNums[i] = arrayOfNums[i - 1] + stepOfProgression;
  }
  const getTheGap = () => {
    const result = getRandomNumber(smallSizeOfNumber);
    return result > 1 ? result : result + 1;
  };
  const placeOfTheGap = getTheGap();
  arrayOfNums[placeOfTheGap] = '..';
  const progression = arrayOfNums.join(' ');
  return [arrayOfNums, placeOfTheGap, stepOfProgression, progression];
};

const introduction = 'What number is missing in the progression?';

const generateGameRound = () => {
  const [arrayOfNums, placeOfTheGap, stepOfProgression, progression] = getTheProgression();
  const question = `${progression}`;
  const correctAnswer = calculateCorrectAnswer(arrayOfNums, placeOfTheGap, stepOfProgression);
  const expectedAnswer = correctAnswer.toString();
  return [question, expectedAnswer];
};

export default () => generateTheGame(introduction, generateGameRound);
