//CRIANDO ARRAYS    
let nomes = []
let senhas = []


//SOLICITANDO O QUE USURIO DESEJA FAZER 
function solicitarOpcao (){
    let opcao = prompt("Escolha uma opção: \n1. Cadastrar \n2. Login \n3. Excluir um cadastro \n4. encerrar o programa")
    return opcao;   
}

function Cadastro(){
    nomes.push(prompt("Digite seu nome"))
    senhas.push(prompt("Digite sua senha"))

}

function Login(nome, senha){
    let indice = nomes.indexOf(nome);
    if(indice !== -1 && senhas[indice] == senha){
        return true;
    }else{
        return false;
    }
}

function ExcluirCadastro (nome){ 
    let indice = nomes.indexOf(nome);
    if (indice !== -1 ){
        nomes.splice (indice , 1)
        senhas.splice (indice ,1)
        console.log("Cadastro efetuado do sucesso")

    }else{
        console.log("Cadastro não encontrado")
    }

}

//FLUXO DE FUNCIONAMENTO DE CODIGO
let continuar = true;
while (continuar){
    let opcao = solicitarOpcao();
}