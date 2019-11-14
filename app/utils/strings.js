export const convertToFormattedNumber = (value, currencySymbol = '') => {
  if ((value !== 0 && !value) || typeof value !== 'number') {
    return value;
  }
  const thousand = ',';
  const symbol = currencySymbol;
  let number = value;
  number = `${parseInt(number = Math.abs(+number), 10)}`;
  let thousandDigits = number.length;
  if (thousandDigits > 3) {
    thousandDigits %= 3;
  } else {
    thousandDigits = 0;
  }
  return `${symbol}${(thousandDigits ? number.substr(0, thousandDigits) + thousand : '')}${number.substr(thousandDigits).replace(/(\d{3})(?=\d)/g, `$1${  thousand}`)}`
};

export const convertToCurrency = (value) => (convertToFormattedNumber(value, '$'));

export const convertStringToCapitalize =(str) => {
    const string = str.toLowerCase();
    const newString = [];
    const strArr = string.split(" ");
    let i = 0;
    do  {
      newString.push(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1));
      i +=1;
    }  while(i < strArr.length);
    return newString.join(" ");
}

export const convertStringToDate = (stringDate) => {
  if (!stringDate || stringDate === '-') {
    return '';
  }
  return `${stringDate.substr(5,2)}/${stringDate.substr(8,2)}/${stringDate.substr(0,4)}`
};

export const convertStringDateToMonthYear = (stringDate) => {
  if (!stringDate) {
    return '';
  }
  return `${stringDate.substr(5,2)}/${stringDate.substr(0,4)}`;
};

export const convertStringToQueryString = (str) => (encodeURIComponent(str.split(' ').join('+')));

export const convertQueryStringToString = (str) => (str.split('+').join(' '));


export const convertStringToArea = (stringArea, areaUnit) => {
  if (!stringArea || stringArea === '-') {
    return '';
  }
  return `${convertToFormattedNumber(stringArea)  } ${  areaUnit}`;
}

export const convertStringMYToNumericMY = (stringDate) => {
  if (!stringDate) {
    return '';
  }
  let month = ("JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(stringDate.substr(0,3))) / 3 + 1;
  month = (month > 9) ? month : `0${month}`;
  return `${month}/${stringDate.substr(-4)}`;
}
