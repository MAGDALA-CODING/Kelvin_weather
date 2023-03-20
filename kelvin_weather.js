//this is a constant variable
const kelvin = 293;

//convert kelvin to celsius
var celsius = kelvin - 273;

//convert celsius to fahrenheit
var fahrenheit = celsius * (9/5) + 32;

//making fahrenheit a whole number
fahrenheit = math.floor(fahrenheit);

console.log("The temperature is" + fahrenheit + "degrees fahrenheit");
