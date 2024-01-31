//CRIANO VÁRIAVEIS E LOOP 
let confirmar = "n"
while(confirmar != "s"){
    let nome = prompt("Isira seu nome")
    var salarioAtual = parseInt(prompt("insira seu salario atual"))
    console.log("nome " + nome + ", salario atual " + salarioAtual) 
    confirmar = prompt("suas informações estão certas? (s/n)")
}

//CRIANO AUMENTO e calculando daqui a 10 anos
let aumento = 0.015
console.log("previsao salarial para os proximos 10 anos")

for(let ano = 1; ano <= 10; ano++){
    salarioAtual += salarioAtual * aumento
    aumento *= 2
    
    console.log((2023 + ano ) + " = R$ " + salarioAtual )
}