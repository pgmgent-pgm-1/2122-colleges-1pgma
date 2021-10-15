function verifyCreditCardNumber(number) {
  const numberToString = number.toString();
  if (numberToString.length !== 16) {
    return false;
  }
  
  if (isNaN(Number(numberToString))) {
    return false;
  }

  if (parseInt(numberToString[numberToString.length - 1]) % 2 !== 0) {
    return false;
  }

  const uniqueChars = [];
  let sumOfChars = 0, c;
  for (let i = 0; i < numberToString.length - 1; i++) {
    c = numberToString[i];
    sumOfChars += parseInt(c);
    if (uniqueChars.indexOf(c) === -1) {
      uniqueChars.push(c);
    }
  }

  if (uniqueChars.length < 2 && sumOfChars <= 16) {
    return false;
  }

  return true;
}

let valid = verifyCreditCardNumber('1000000000099996');
console.log(valid);