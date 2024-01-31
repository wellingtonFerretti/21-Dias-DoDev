// && = as duas verdadeiras | || = uma certa e a outra não
// == igual | != diferente | =< maior ou igual =>menor ou igual |
/// === igual o valor e o tipo | !==é diferente valor e o tipo  

//Difinindo as variaveis e dando valor
let fome = prompt("Você esta com fome? (s/n)")
let dinheiro = prompt("Você tem dinheiro? (s/n)")
let restaAbert = prompt("Restaurante esta aberto? (s/n)")

//Pedindo informaçoes para a pessoa e exibindo no console
if(fome === "n" || dinheiro ==="n"){
  console.log("hoje a janta sera em casa")
}else if (dinheiro === "s" && restaAbert === "s"  ){
  console.log("você podera escolher o prato")
}else{
  console.log("pedir um delivery")
}
