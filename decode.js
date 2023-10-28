const input = "23511011501782351112179911801562340161171141148";
let reversedString = "";

// Reverse the string
for (let i = input.length - 1; i >= 0; i--) {
  reversedString += input[i];
}

let decodedString = "";
let number = "";

for (let i = 0; i < reversedString.length; i++) {
  number += reversedString[i];
  if (
    (parseInt(number) >= 65 && parseInt(number) <= 90) ||
    (parseInt(number) >= 97 && parseInt(number) <= 122) ||
    parseInt(number) === 32
  ) {
    const character = String.fromCharCode(parseInt(number));
    decodedString += character;
    number = "";

  }
}

console.log(decodedString);