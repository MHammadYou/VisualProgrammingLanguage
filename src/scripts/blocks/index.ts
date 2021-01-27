import Variable from "./variable.js";

const my_var = new Variable();
my_var.setValue = "Hola";
my_var.setValue = 4;

console.log(my_var.getValue);
