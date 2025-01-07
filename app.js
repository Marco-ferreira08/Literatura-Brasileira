// Array de frases dos autores com nome
const frases = [
    { frase: "A literatura é a alma de uma nação, e as palavras, o seu espelho.", autor: "Machado de Assis" },
    { frase: "Eu sou a minha própria criatura.", autor: "Clarice Lispector" },
    { frase: "A vida é a arte do encontro, embora haja tanto desencontro pela vida.", autor: "Vinícius de Moraes" },
    { frase: "No meio do caminho tinha uma pedra, tinha uma pedra no meio do caminho.", autor: "Carlos Drummond de Andrade" },
    { frase: "O amor é uma flor que precisa ser cultivada, para que floresça.", autor: "José de Alencar" },
    { frase: "O destino é um livro que só se revela ao longo da vida.", autor: "Raquel de Queiroz" },
    { frase: "A vida é dura para quem é fraco, mas para quem é forte, ela é uma lição constante.", autor: "Graciliano Ramos" },
    { frase: "A leitura de um bom livro é um diálogo com os mais sábios dos séculos passados.", autor: "José Saramago" },
    { frase: "Os sentimentos não podem ser medidos, mas os atos que eles inspiram sim.", autor: "Érico Veríssimo" },
    { frase: "É preciso coragem para ser honesto num mundo que cultua as mentiras.", autor: "Lima Barreto" },
    { frase: "A verdade raramente é pura e nunca simples.", autor: "Oscar Wilde" },
    { frase: "Se você não sabe onde quer ir, qualquer caminho serve.", autor: "Chico Buarque" },
    { frase: "O Brasil não é para principiantes.", autor: "Mário de Andrade" },
    { frase: "O segredo da vida é o amor, a amizade, a compreensão.", autor: "Jorge Amado" },
    { frase: "A vida não é mais que um ponto de interrogação; mas, antes de ser uma pergunta, é uma resposta.", autor: "Machado de Assis" }
  ];
  
  // Função que exibe uma frase aleatória com o nome do autor
  function mostrarFrase() {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    const fraseEscolhida = frases[indiceAleatorio];
    document.getElementById('frase').innerText = `"${fraseEscolhida.frase}" - ${fraseEscolhida.autor}`;
  }
  