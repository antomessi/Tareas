//1.- Escribe un programa de una sola línea
 //que haga que aparezca en la pantalla un
 // alert que diga “un mensaje”.

 //alert("un mensaje");

 //2.- Escribe un programa de una sola línea que
 // escriba en la pantalla un texto que
 // diga «Hello World» (document.write).

 //document.write("Hello World")


 //3.- Escribe un programa de una sola línea 
 //que escriba en la pantalla el resultado de sumar 3 + 5.

//document.write(3 + 5)

//4.- Escribe un programa de dos líneas que pida 
//el nombre del usuario con un prompt y escriba un
// texto que diga «Hola nombreUsuario»


//let nombre = prompt("cual es tu nombre");
//alert(`Hola ${nombre}`);


//5.- Escribe un programa de tres líneas que
 //pida un número, pida otro número y escriba el 
 //resultado de sumar estos dos números.


 //let num1 =  parseInt(prompt("ingrese el primer numero"));
 //let num2 = parseInt(prompt("ingrese el segundo numero"));
 //console.log(`${num1 + num2}`);



 //6.-Escribe un programa que pida dos números y 
 //escriba en la pantalla cual es el mayor.

let num1 = parseFloat(prompt("ingrese un numero"));
let num2 = parseFloat(prompt("ingrese otro numero"));

if (num1 > num2) {
    alert(`${num1} es mayor que ${num2}`);
    
} else if (num2 > num1) {
    alert(`${num2} es mayor que ${num1}`);
} else {
    alert(`${num1} es igual que ${num2}`);
    
}