let num1 = Number(prompt("escribir primer num"));
let num2 = Number(prompt("escribir segundo num"));
let num3 = Number(prompt("escribir tercer num"));

let mayor = Math.max(num1, num2, num3);
let menor = Math.min(num1, num2, num3);

let raizCuadrada = Math.sqrt(num2);
resultado = `el numero mayor es ${mayor}, 
el num menor es ${menor}
y el resultado de raiz cuadrada de ${num2} es ${raizCuadrada}`;

console.log(resultado);
alert(resultado);