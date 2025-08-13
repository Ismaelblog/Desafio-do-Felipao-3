// Escrevendo as classes de um jogo.

class personagem {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case "Guerreiro":
        ataque = "espada";
        break;
      case "Mago":
        ataque = "magia";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "Ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "ataque secreto";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

let guerreiro = new personagem("Felipão", 30, "Guerreiro");
let mago = new personagem("Israel", 25, "Mago");
let monge = new personagem("João", 28, "Monge");
let ninja = new personagem("Maria", 22, "Ninja");

guerreiro.atacar();
mago.atacar();
monge.atacar();
ninja.atacar();
