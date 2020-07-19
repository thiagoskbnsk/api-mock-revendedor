const generateCashbackObject = (users, sales) => {
  const usersId = users.map(currentValue => currentValue.id);

  return usersId.map((currentId, currentIndex) => {
    const userSales = sales.filter(currentSale => currentSale.user_id === currentId && currentSale.status === 'Aprovado');

    const total = userSales.reduce((total, currentSale) => {
      total.totalCashback += parseFloat(currentSale.cashback_value);
      total.totalSales += parseFloat(currentSale.value);

      return total;
    }, { totalCashback: 0, totalSales: 0 });
    
    return {
      id: currentIndex + 1,
      user_id: currentId,
      totalCashback: total.totalCashback.toFixed(2),
      totalSales: total.totalSales.toFixed(2),
    };
  });
}

module.exports = (users, sales) => generateCashbackObject(users, sales);