const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

console.log(
  'Price',
  prices.map((money) => ({ price: money, salePrice: money / 2 }))
);

console.log(
  'Formatted prices',
  prices.map((money) => `$${money.toFixed(2)}`)
);
