//Hello, world function
const sayHello  = function () {
  console.log("Hello, world");
}
sayHello();

//Function with a parameter, takes in a value as an input.
const sayHello2 = function (name) {
  console.log("Hello, " + name);
}

sayHello2("Katie");
sayHello2("Artur");
sayHello2("Debbie")

//Practice
const sayHello3 = function (name) {
  console.log('Heyyyaaa, ' + name)
}

sayHello3("Colin");

//Return vs console.log
//Below code immediately outputs 'Hello, John' to the console.
const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John');

//Below code returns the string 'Hello, John' to the variable but nothing is output to the console. However, when a function returns a value, we can still console.log it later.

const returnSayHello = function (name) {
  return "Hello, " + name;
}

const greeting = returnSayHello('John'); 
console.log(greeting) //Calling function to be console.logged.