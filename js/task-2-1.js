/*const getItemsString = function (array) {
  "use strict";
  let result = "";
  let i;
  for (i = 0; i < array.length; i += 1) {
    result += `${i + 1} - ${array[i]}\n`;
  }
  return result;
};
console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));*/
const calculateEngravingPrice = (message = "", pricePerWord = 0) =>
  (pricePerWord += pricePerWord * ((message.split(' ')).length - 1); // Write code in this line
)
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120

console.log(calculateEngravingPrice("Uno", 100)); //
