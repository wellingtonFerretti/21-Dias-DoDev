//CRIANDO VÁRIAVEIS
let nome = prompt("insira seu nome")
let idade = parseInt(prompt("insira sua idade"))
let peso = prompt("Insira seu peso:")
let altura = prompt("Insira sua altura em metros")
let profissao = prompt("Insira sua profissão")

//INFORMAÇOES DO CLIENTE NO CONSOLE
console.log("Olá " + nome + ", você tem " + idade + " anos, é " + profissao + ", tem " + altura + "m de altura e pesa " + peso + "Kg." )

//VERIFICANDO IDADE
if(idade >= 18){
    console.log("você esta liberado para tomar umas geladas")
}else{
    console.log("Sem geladas para você")
}

//IDENTIFICANDO IDADE FRACIONADA
let semana = idade * 52
let mes = idade * 12
let ano = idade * 365 

//DANDO INFORMACOES DA IDADE FRACIONADA
console.log("Sua idade em mes é de " + semana)
console.log("Sua idade em mes é de " + mes )
console.log("Sua idade em anos é de " + ano) 

