//Declaração de varíavel e dando os valores
let nome = prompt("Informe seu nome; ")
let idade = parseInt(prompt("Informe sua idade: "))
let peso = parseInt(prompt("informe seu peso: "))
let altura = parseFloat(prompt("insira sua altura"))

// Calculando sua data de nascimento e ICMS
let anoNasc = 2023 - idade
let imcs = 0
icms = peso / (altura * altura)

// Limitando o IMC a duas casas decimais
icms = icms.toFixed(2);

//Informando dados sobre o cliente no console:
console.log("Olá " + nome + ", tudo bom? vou lhe informar suas caracteristicas, você tem " + idade + " anos, nasceu em " + anoNasc + ", tem " + altura + " de altura, pesa " + peso + "kg, seu IMC é de " + icms + "kg/m2"   )


