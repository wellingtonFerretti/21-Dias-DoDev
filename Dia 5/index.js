//CRIANDO VARIAVEIS
let valor
let quantidade
let opcao = prompt("Bem vindo ao posto emanuel , o que irá abastecer hoje meu chefe? " + "\n1 = gasolina \n2 = alcool \n3 = calibrar pneus")


switch(opcao){
    case "1": 
        valor = prompt(("Quanto de gasolina hoje, chefe?"))
        quantidade = valor / 5 
        console.log("Você abasteceu " + quantidade + "L de gasolina, obrigado")
        break;
    case "2":
        valor = Number(prompt("Quanto de alcool hoje, chefe?"))
        quantidade = valor / 3 
        console.log("Você abasteceu " + quantidade + "L de alcool, obrigado")
       break;
    default: 
    console.log("Pneus calibrados com sucesso,  ")
   
}
    