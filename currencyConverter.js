console.log("Bienvenido al Convertidor de Moneda");
console.log("Este programa convertira una cantidad de dólares a euros utilizando una tasa de cambio fija.");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese la cantidad en dólares que desea convertir a euros: ', (cantidadDolares) => {
    const tasaCambio = 0.85; 
    const cantidadEuros = cantidadDolares * tasaCambio;
    console.log(`${cantidadDolares} dólares equivale a ${cantidadEuros} euros.`);
    rl.close();
});

