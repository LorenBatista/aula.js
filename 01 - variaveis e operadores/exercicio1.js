const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaKmViagem = 100;

const litrosConsumidos = distanciaKmViagem / kmPorLitros;
const gastoViagem = litrosConsumidos * precoCombustivel;

console.log(gastoViagem.toFixed(2));