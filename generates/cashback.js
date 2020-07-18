const generateCashbackObject = (users, sales) => {
  const usersId = users.map(currentValue => currentValue.id);

  return usersId.map((currentId, currentIndex) => {
    const userSales = sales.filter(currentSale => currentSale.userId === currentId && currentSale.status === 'Aprovado');

    const cashbackTotal = userSales.reduce((total, currentSale) => {
      total += parseFloat(currentSale.cashback_value);

      return total;
    }, 0);
    
    return {
      id: currentIndex + 1,
      userId: currentId,
      total: cashbackTotal.toFixed(2)
    };
  });
}

module.exports = (users, sales) => generateCashbackObject(users, sales);