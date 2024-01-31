let nomes = []
let notas = []
let condicao = true
let contador = 0



while(condicao){
    let nomeIserido = prompt("Insira o nome do " + (contador +1 ) + "° aluno" )
    let notasInserido = parseInt(prompt("Insira as notas"))
    nomes[contador] = nomes
    notas[contador] = notasInserido
    contador++
    let desejaContinuar = prompt("Você deseja continuar? (s/n)")

if (desejaContinuar != "s")
    condicao = false
}

//EXIBINDO INFORMAÇÕES
console.log("Notas dos alunos: ")
for (let i = 0; i < alunos; i++ ) {
    console.log(alunos[i] + " - " + notas[i])
}

let somaNotas = 0 
for     (let i = 0; i < alunos; i++) {
    console.log(alunos[i] + " - " + notas[i])

}

let media =somaNotas / alunos.length
console.log("A soma das notas foi: " + somaNotas)
console.log("a média geral da turma foi : " + media)