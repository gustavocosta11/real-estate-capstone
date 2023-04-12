export const arrPriceRanges = [
  "0-500000",
  "500001-1000000",
  "1000001-1500000",
  "1500001-2000000",
  "2000001-10000000",
];

export const priceRangeToIndex = (priceRange) => {
  const index = arrPriceRanges.findIndex((priceRg) => priceRg === priceRange);

  return index;
};
