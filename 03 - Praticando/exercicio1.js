/* 
Faça um algoritimo que dado as 3 notas tiradas por uluno em uma semestre, calcule e imprima sua média e sua
classificação conforme a tabela abaixo:

Média = (nota 1 + nota 2 + nota 3) / 3;

classificação:
- Média menor que 5 = reprovação;
- Média entre 5 e 7 = recuperação;
- Média acima de 7 = aprovação;
*/
const nota1 = 1
const nota2 = 5
const nota3 = 7

const media = (nota1 + nota2 + nota3) / 3;
console.log(media)

if (media < 5) {
    console.log('Reprovado')
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação')
} else {
    console.log('Aprovado')
}