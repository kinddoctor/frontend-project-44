const getRandomNumber = (min = 10, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

export default getRandomNumber;
