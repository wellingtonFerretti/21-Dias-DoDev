//CRIANDO CLASS

class Carro{
   Nome
   Potencia
   VelocidadeMaxima
   Aceleracao
   constructor(Nome, Potencia, VelocidadeMaxima, Aceleracao) {
    this.Nome = Nome
    this.Potencia = Potencia
    this.VelocidadeMaxima = VelocidadeMaxima
    this.Aceleracao = Aceleracao
  
    }  

    

    calcularTempoMedio(distancia) {
        let resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao)
        return resultado

    }

}

let meuCarro = new Carro ("Ferrari " , 720 , 340 , 2.9 )


class Corrida {
    Nome
    Tipo
    Distancia
    Participantes
    Vencedor
    constructor(Nome , Tipo, Distancia, Participantes, Vencedor){
        this.Nome = Nome
        this.Tipo = Tipo
        this.Distancia = Distancia
        this.Participantes = []
        this.Vencedor = ""
}

    definirVencedor(){
        let menorTempo = this.participantes[0].calcularTempoMedio(this.Distancia)
        let vencedor = this.participantes[0]

        for(let index = 1; index < this.participantes.length; index){
            let tempo = this.participantes[index].calcularTempoMedio(this.Distancia)
            if(tempo < menorTempo){
                menorTempo = tempo
                vencedor = this.participantes[index]
            }
        }

        return this.vencedor = vencedor

    }

    exibirVencedor(){
        alert("o vencedor é: " + this.vencedor.Nome)
         let corrida = new Corrida("monza " , "formula 1 " , 60000)
        corrida.participantes[0] = new Carro ("kicks" , 120 , 160 , 5)
        corrida.participantes[1] = new Carro ("marea" , 210 , 200 , 9)
        corrida.participantes[2] = new Carro ("peugeout 206" , 300 , 220 , 10)
    }
    }


   
        