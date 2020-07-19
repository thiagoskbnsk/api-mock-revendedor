const generateTotalObject = (users, sales) => {
  const usersId = users.map(currentValue => currentValue.id);

  return usersId.map((currentId, currentIndex) => {
    const userSales = sales.filter(currentSale => currentSale.user_id === currentId);

    const total = userSales.reduce((total, currentSale) => {
      if (currentSale.status === 'Aprovado') {
        total.totalCashback += parseFloat(currentSale.cashback_value);
        total.totalSales += parseFloat(currentSale.value);
      }
      
      switch (currentSale.status) {
        case 'Aprovado': {
          total.approved++;
          break;
        }
        case 'Em análise': {
          total.analysis++;
          break;
        }
        case 'Reprovado': {
          total.denied++;
          break;
        }
        default:
      }

      return total;
    }, { 
      totalCashback: 0,
      totalSales: 0,
      approved: 0,
      analysis: 0,
      denied: 0
    });
    
    return {
      id: currentIndex + 1,
      user_id: currentId,
      total_cashback: total.totalCashback.toFixed(2),
      total_sales: total.totalSales.toFixed(2),
      approved: total.approved,
      analysis: total.analysis,
      denied: total.denied,
    };
  });
}

module.exports = (users, sales) => generateTotalObject(users, sales);