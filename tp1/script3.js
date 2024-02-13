//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
//Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
let frase = prompt('escriba su frase');
let vocales = '';


let i = 0;
console.log(frase.length);
console.log(frase.charAt(10));
while (i < frase.length) {
    console.log(`la letra en posicion ${i} es ${frase.charAt(i)}`);
    if (
        frase.charAt(i).toLowerCase() === 'a' ||
        frase.charAt(i).toLowerCase() === 'e' ||
        frase.charAt(i).toLowerCase() === 'i' ||
        frase.charAt(i).toLowerCase() === 'o' ||
        frase.charAt(i).toLowerCase() === 'u' 
        
    ) {
      vocales += frase.charAt(i).toLowerCase();  
    }
    i++
}

if (vocales.length > 0) {
    console.log('las vocales son:' + vocales)
} else {
    console.log(`tu frase "${frase}" no tiene vocales`);
 }

;