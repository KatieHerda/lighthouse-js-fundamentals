//Returns a boolean value to verify if a number is even.
const isEven = function(num) {
  return num % 2 === 0;
}

//Variables
const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

//Logged to the console.
console.log(tenIsEven); 
console.log(elevenIsEven);

/* We don't need to set our function return values to new variables before doing something with them – we can use them directly where we need them. */
console.log(isEven(10));
console.log(isEven(11));