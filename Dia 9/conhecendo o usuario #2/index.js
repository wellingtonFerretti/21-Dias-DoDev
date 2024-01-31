//PEDINDO INFORMAÇÕES DE USUARIO
let peso = parseInt(prompt("Qual seu peso? "))
let altura = Number(prompt("Qual sua altura? em metros "))
let idade = prompt("Quantos anos você tem? ")
    

//CALCULANDO Imc
let imc = peso / (altura * altura)
console.log(imc + "kg/m2")

if( imc < 18.5 ) {
    console.log("Magresa")
} else if( imc >= 18.5 && imc <= 24.9){
    console.log("Normal")
} else if( imc >= 25 && imc <= 30){
    console.log("Sobrepeso")
} else{
    console.log("obesidade")
}
    
//CALCULANDO EM QUE ANO USUARIO NASCEU
let anoAtual = 2023
let anoNasc = anoAtual - idade
console.log("você nasceu em " + anoNasc)

//EXIBINDO ANOS E IDADES
let idadePorAno = anoNasc
let idadeAtual = 0

for(let idadePorAno = anoNasc; idadePorAno <= anoAtual; idadePorAno++){
    console.log(idadePorAno + " - " + idadeAtual + " anos de idade")
    idadeAtual++
}

//LOOP DOWHILE

do {
    //INSERINDO LÓGICA ANTERIOR
    let continuar = prompt("Deseja inserir os dados novamente? (s/n)")
} while (continuar == "n")
    continuar = false




