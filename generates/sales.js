const generateRandomNumber = require('../utils').generateRandomNumber;

const salesStaus = ['Aprovado', 'Em validação', 'Reprovado'];

const generateCashbackPercentage = () => generateRandomNumber(2, 8);
const generateSalesValue = () => generateRandomNumber(50, 950);
const calculateCashbackValue = (value, percentage) => value * (percentage / 100);
const generateRandomStatus = () => salesStaus[generateRandomNumber(0, 3)];
const getRandomUserId = (users) => users[generateRandomNumber(0, users.length)].id;

const generateSalesObject = (users, numberOfRegisters) => {
  const createArrayWithManyPositions = [...Array(numberOfRegisters).keys() ];
  
  const sales = createArrayWithManyPositions.map((_currentValue, currentIndex) => ({
    id: currentIndex,
    sale_cod: currentIndex,
    value: generateSalesValue(),
    date: new Date().getTime(),
    cashback_percentage: generateCashbackPercentage(),
    calculateCashback: function() { 
      return calculateCashbackValue(this.value, this.cashback_percentage) 
    },
    status: generateRandomStatus(),
    user_id: getRandomUserId(users)
  }));

  const salesWithCashbackValue = sales.map((currentValue) => ({
    ...currentValue,
    cashback_value: currentValue.calculateCashback().toFixed(2)
  }));

  return salesWithCashbackValue;
};

module.exports = (users) => generateSalesObject(users, 20)