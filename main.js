import './style.css'

const inputISBN = prompt(' please enter your ISBN-10 : ');

console.log(inputISBN);

function validISBN10(isbn) {
  isbn = isbn.replace(/[-\s]/g, '');

  if (isbn.length !== 10) {
    return false;
  }

  let sum = 0;

  for (let i = 0; i < 10; i++) {
    const digit = isbn[i];
    if (i === 9 && digit === 'X') {
      sum += 10;
    } else {
      const num = parseInt(digit);
      if (isNaN(num)) {
        return false; // شامل حروف نامعتبر
      }
      sum += num * (10 - i);
    }

    return sum % 11 === 0;
  }
}
console.log(validISBN10(inputISBN));
