let nomes = []
let senhas = []
contador = 0

continuar = true

//SOLICITANDO O QUE USUARIO DESEJA  

while(continuar){
    let opcao = prompt("O que deseja fazer?  Cadastrar (1) / Login (2) / Excluir cadastro (3) / Encerrar programa (4)")

    switch(opcao){
        case "1" :
            nomes[contador] = prompt("Digite seu nome")
            senhas[contador] = prompt("Digite sua senha")
            alert("Você se cadastrou com sucesso!")
            contador++

            break;

        case "2" :
           let nome = prompt("Qual seu nome?")
           let senha = prompt("Insira sua senha")
           let loginValido = false

            for (let i = 0; i < nomes.length; i++){
           if (nome == nomes[i] && senha == senhas[i]){
            loginValido = true
           }
            }

            if(loginValido){
            alert("login feito com sucesso. Bem-vindo! ")

            }else {
            alert("Login ou senha incorretos!")
            }

        break;
       
        case "3" :
            let nomeExcluir = prompt("qual o nome que deseja excluir?")
            let nomesAux = []
            let senhasAux = []
            let contadorAux = 0


            for (let i = 0; i < contador; i++){
                if (nomeExcluir == nomes[i]) {
                    alert("Cadastro excluido com sucesso")
                } else {
                    nomesAux[contadorAux] = nomes[i]
                    senhasAux[contadorAux] = senhas[i]
                    contadorAux++
                }
            
            }       nomes = nomesAux
                    senhas = senhasAux
                    contador--

            break;

            
        case "4" :
            continuar = false
            break;

        default: 
            console.log("Opcao invalida, escolhe outra!")
            break;
    }       

}




