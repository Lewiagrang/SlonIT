function purchasePrice(сustomers) {
    let finalPrice = сustomers.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0)
    return finalPrice;
  }
  
  let mostValuableCustomers = [10000, 20000, 30000];
  console.log(purchasePrice(mostValuableCustomers));