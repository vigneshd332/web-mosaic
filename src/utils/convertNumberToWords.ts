const convertNumberToWords = (number: number): string => {
  return number > 1000000
    ? (number / 1000000).toFixed(1) + "M"
    : number > 1000
      ? (number / 1000).toFixed(1) + "K"
      : number.toString();
};

export default convertNumberToWords;
