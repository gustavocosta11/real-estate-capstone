export const arrCity = [
  "vancouver",
  "burnaby",
  "coquitlam",
  "new westminster",
  "north vancouver",
  "surrey",
  "richmond",
];

export const cityToIdx = (city) => {
  return arrCity.findIndex((city) => city.toLowerCase() === city.toLowerCase());
};

export const idxToContinent = (idx) => {
  return arrCity.filter((_, index) => index === Number(idx))[0];
};
