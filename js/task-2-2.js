function checkForSpam(str) {
  str = str.toLowerCase();
  const array = str.split(" ");
  const spam = "spam";
  const sale = "sale";
  if (
    array.includes(spam) ||
    array.includes(`[${spam}]`) ||
    array.includes(sale)
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
