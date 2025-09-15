// Format any integer provided into a string with "," (commas) in the correct places.

// Example:

// For n = 100000 the function should return '100,000';
// For n = 5678545 the function should return '5,678,545';
// for n = -420902 the function should return '-420,902'.





//we need the number as a string
let number = 100000;
let stringNumber = number.toString();
console.log(stringNumber);

//if the number is negative, we keep the minus sign separate
let isNegative = false;
if(str[0] === '-') {
    isNegative = true;
    str = str.slice(1);
}

//we reserve the string so that it comes easier to insert commas
let reversed = str.split('').reverse().join('');
console.log(reversed);

//loop through the reversed string and add commas after every 3 digits
let result = '';
for (let i = 0; i < reversed.length; i++){
    if (i > 0 && i % 3 === 0) {
        result += ',';
    }
    result += reversed[i];
}
console.log(result);

//reserve it back
result = result.split('').reverse().join('');
console.log(result);

//put back the minus
if (isNegative) {
    result = '-' + result;
}


//final function
function formatNumberWithCommas(n) {
  let str = n.toString();
  let isNegative = false;

  if (str[0] === '-') {
    isNegative = true;
    str = str.slice(1);
  }

  let reversed = str.split('').reverse().join('');
  let result = '';

  for (let i = 0; i < reversed.length; i++) {
    if (i > 0 && i % 3 === 0) {
      result += ',';
    }
    result += reversed[i];
  }

  result = result.split('').reverse().join('');
  if (isNegative) {
    result = '-' + result;
  }

  return result;
}

console.log(formatNumberWithCommas(100000));   
console.log(formatNumberWithCommas(5678545));   
console.log(formatNumberWithCommas(-420902));   