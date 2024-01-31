//CRIANDO CLASS

class Computador {
    tipo
    processador
    video
    armazenamento
    memoriaRam
    ssd
    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
        this.ssd = ssd
    }



    //APRESENTAR NO CONSOLE

    apresentar(){

            console.log("Olá meu tipo é : " + this.tipo + " meu processador é: " + this.processador + "  estado de placa de video é : " + this.video + " O tamanho do meu armazenamento é de: " + this.armazenamento  + " tenho " + this.memoriaRam +  " de memora ram, e meu estado de SSD é: " + this.ssd)
    }


//EXIBINDO INFORMAÇÕES

exibindoInformacoes() {

    console.log("====== EXIBINDO INFORMAÇOES ======")
    console.log("O tipo é: " + this.tipo  )
    console.log("O processador é: " + this.processador )
    console.log("O tipo de placa de video é: " + this.video  )
    console.log("O tamanho do armazenamento é: " + this.armazenamento)   
    console.log("O numero de memoria ram é: " + this.memoriaRam )
    console.log("Tem ssd?: " + this.ssd )

}

}


let informacoesPC = new Computador("Desktop" , "intel generico" , "não tem" , 500 , 8 , false)
informacoesPC.exibindoInformacoes()

