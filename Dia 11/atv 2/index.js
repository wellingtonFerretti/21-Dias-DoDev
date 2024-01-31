let modelos = []
let anos = []
let valores = []
let continuar = true
let contador = 0

while(continuar){
    let modeloIserido = prompt("Cadastre novo modelo do veicuko")
    modelos[contador] = modeloIserido
    let anoIserido = prompt("Cadastre o ano é o veiculo")
    anos[contador] = anoIserido
    let valorIserido = prompt("Cadastre o valor do veiculo")
    valores[contador] = valorIserido
    contador ++
    continuar = prompt("você deseja continuar (s/n)")
if(continuar != "s")
    continuar = false

}

//EXIBINDO INFORMAÇÕES
console.log("carros cadastrados: ")
for (let i = 0; i < modelos.length; i++){
    console.log(modelos[i] + " - " + anos[i] + " - " + valores[i])
}