// CRIANDO VARIÁVEIS
let meadiaGeral = 0 
let qtdHomens = 0 
let qtdMulheresAcimaDe7 = 0 
let maiorNotaHomens = 0 
let contador = 1

//NOTA E SEXO
while(contador <=10){
    nota = parseInt(prompt("Digite a nota do " + contador + "° aluno"))
    sexo = prompt("digite o sexo do aluno (m/f)")

    if(sexo == "m"){
        if(nota > maiorNotaHomens){
            maiorNotaHomens = nota
        }
        qtdHomens++ 
    }
if (sexo == "f" && nota > 7){
    qtdMulheresAcimaDe7++
}

meadiaGeral += nota
contador++

}

meadiaGeral = meadiaGeral / 10

console.log("A média geral dos alunos foi " + meadiaGeral)
console.log("A quantidade de homens cadastrados foi" + qtdHomens)
console.log("A quantidade de mulheres que tiveram nota acima de 7 foi " + qtdMulheresAcimaDe7)
console.log("A maior nota entre os homens foi " + maiorNotaHomens)
