
# 🦸‍♂️ Projeto: Escrevendo as Classes de um Jogo
<p align="center">
<img src="https://rubberchickengames.com/wp-content/uploads/2018/06/commission___brave_team_by_diegoocunha-d7etd63.jpg" alt="Logo do Projeto Herói" width="500">
</p>

----

Este projeto foi desenvolvido como parte de um desafio de programação para aprimorar o conhecimento em classes e objetos, utilizando JavaScript. 
O objetivo é criar uma classe genérica que represente um Personagem de aventura, com propriedades e um método de ataque dinâmico.

## 🛠️ Tecnologias Utilizadas
- JavaScript

## ✨ Funcionalidades
A classe principal Personagem, possui as seguintes funcionalidades:

- Propriedades:

````nome:```` Nome do Personagem.

````idade:```` Idade do Personagem.

````tipo:```` O tipo do personagem, que pode ser 'mago', 'guerreiro', 'monge' ou 'ninja'.


- Método ```` atacar(): ````

Exibe uma mensagem de ataque no console, adaptada ao tipo do herói.

A descrição do ataque muda de acordo com o ````tipo```` do herói:

**mago:** "usou magia"

**guerreiro:** "usou espada"

**monge:** "usou artes marciais"

**ninja:** "usou shuriken"

## 🚀 Como Rodar o Código
Para testar o projeto, basta copiar o código do arquivo ````script.js```` e executá-lo em um ambiente JavaScript, como o Node.js ou o console do navegador.

Exemplo:

```bash
node script.js
```

## 📜 Código
```javascript
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

```

Output Saída Esperada
Ao executar o código, você verá a seguinte saída no console:

```
O guerreiro atacou usando espada
O mago atacou usando magia
O monge atacou usando artes marciais
O ninja atacou usando shuriken
```

----

## ✨ Contribuições
Sinta-se à vontade para sugerir melhorias ou novas funcionalidades.
