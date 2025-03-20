/*
O IMC é um critério da OMS para dar indicação sobre a condição de peso da pessoa adulta.

Fórmula IMC:
IMC = Peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de uma pessoa, mostre sua condição de acordo com a tabela:

- Abaixo de 18,49	Abaixo do peso;
- Entre 18,5 e 24,99	Peso normal;
- Entre 25 e 29,99	Acima do peso;
- Entre 30 e 34,99	Obesidade I;
- Entre 35 e 39,99	Obesidade II (severa);
- Acima de 40	Obesidade III (mórbida);
*/
const peso = 55;
const altura = 1.61;
const imc = peso / Math.pow(altura, 2);
console.log(imc)

if (imc < 18.49) {
    console.log('Abaixo do peso');
} else if (imc >= 18.50 && imc <= 24.99) {
    console.log('Peso normal');
} else if (imc >= 25 && imc <= 29.99) {
    console.log('Acima do peso');
} else if (imc >= 30 && imc <= 34.99) {
    console.log('Obesidade I');
} else if (imc >= 35 && imc <= 39.99) {
    console.log('Obesidade II (severa)');
} else if (imc > 40) {
    console.log('Obesidade III (mórbida)');
}