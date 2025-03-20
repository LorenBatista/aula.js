// complemnetando o exercicio anteriora

const precoGasolina = 6.66;
const precoEtanol = 5.79;
const kmPorLitros = 10;
const distanciaKmViagem = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaKmViagem / kmPorLitros;

if(tipoCombustivel === 'Etanol'){
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
}else{
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}