
let click = new Audio('https://2gd4.me/salty/audio/sfx/question_show.wav');
let carta = new Audio('https://assets.codepen.io/4530986/337049__shinephoenixstormcrow__320655-rhodesmas-level-up-01.mp3');
let stopSound = new Audio('https://2gd4.me/salty/audio/sfx/option_highlight.wav');
let correto = new Audio('https://assets.codepen.io/4530986/274177__littlerobotsoundfactory__jingle-win-synth-03.wav');
let errado = new Audio('https://assets.codepen.io/4530986/351563__bertrof__game-sound-incorrect-with-delay.wav');
let intro = new Audio('https://assets.codepen.io/4530986/337049__shinephoenixstormcrow__320655-rhodesmas-level-up-01.mp3');


init();

document.querySelector('.btn-enter').addEventListener('click', function () {
  tela1();
  njogadores();
});


function tela1() {
  intro.play();
  document.querySelector('.player-names').classList.add('active2');
  document.querySelector('.background').classList.add('active2');
  document.querySelector('.background').style.zIndex = "-1";
  document.querySelector('.player-names').style.zIndex = "-1";
}


let jogadores = [];


function njogadores() {
  var player1Name = document.getElementById("player-name-1").value;
  var player2Name = document.getElementById("player-name-2").value;
  var player3Name = document.getElementById("player-name-3").value;
  var player4Name = document.getElementById("player-name-4").value;

  if (player1Name.length > 0) {
    jogadores.push(player1Name);
  }
  if (player2Name.length > 0) {
    jogadores.push(player2Name);
  }
  if (player3Name.length > 0) {
    jogadores.push(player3Name);
  }
  if (player4Name.length > 0) {
    jogadores.push(player4Name);
  }

  if (jogadores.length == 1) {
    document.querySelector('#name-0').textContent = jogadores[0];
    document.querySelector('#name-1').style.opacity = "0";
    document.querySelector('#name-2').style.opacity = "0";
    document.querySelector('#name-3').style.opacity = "0";
    document.querySelector('.jog2').style.opacity = "0";
    document.querySelector('.jog3').style.opacity = "0";
    document.querySelector('.jog4').style.opacity = "0";
  } else if (jogadores.length == 2) {
    document.querySelector('#name-0').textContent = jogadores[0];
    document.querySelector('#name-1').textContent = jogadores[1];
    document.querySelector('#name-2').style.opacity = "0";
    document.querySelector('#name-3').style.opacity = "0";
    document.querySelector('.jog3').style.opacity = "0";
    document.querySelector('.jog4').style.opacity = "0";
  } else if (jogadores.length == 3) {
    document.querySelector('#name-0').textContent = jogadores[0];
    document.querySelector('#name-1').textContent = jogadores[1];
    document.querySelector('#name-2').textContent = jogadores[2];
    document.querySelector('#name-3').style.opacity = "0";
    document.querySelector('.jog4').style.opacity = "0";
  } else if (jogadores.length == 4) {
    document.querySelector('#name-0').textContent = jogadores[0];
    document.querySelector('#name-1').textContent = jogadores[1];
    document.querySelector('#name-2').textContent = jogadores[2];
    document.querySelector('#name-3').textContent = jogadores[3];
  }
  console.log(jogadores);
}


document.querySelector('.btn-new').addEventListener('click', init);


function nextPlayer() {

  if (jogadores.length == 1) {
    if (activePlayer === 0) {
      activePlayer = 0;
      document.getElementById('current-0').textContent = '0';
    }
  } else if (jogadores.length == 2) {
    if (activePlayer === 0) {
      activePlayer = 1;
      document.querySelector('.jog1').classList.remove('active');
      document.querySelector('.jog2').classList.toggle('active');
      document.getElementById('current-0').textContent = '0';
    }
    else if (activePlayer === 1) {
      activePlayer = 0;
      document.querySelector('.jog1').classList.toggle('active');
      document.querySelector('.jog2').classList.remove('active');
      document.getElementById('current-1').textContent = '0';
    }

  } else if (jogadores.length == 3) {
    if (activePlayer === 0) {
      activePlayer = 1;
      document.querySelector('.jog1').classList.remove('active');
      document.querySelector('.jog2').classList.toggle('active');
      document.querySelector('.jog3').classList.remove('active');
      document.getElementById('current-1').textContent = '0';
    }
    else if (activePlayer === 1) {
      activePlayer = 2;
      document.querySelector('.jog1').classList.remove('active');
      document.querySelector('.jog2').classList.remove('active');
      document.querySelector('.jog3').classList.toggle('active');
      document.getElementById('current-2').textContent = '0';
    }
    else if (activePlayer === 2) {
      activePlayer = 0;
      document.querySelector('.jog1').classList.toggle('active');
      document.querySelector('.jog2').classList.remove('active');
      document.querySelector('.jog3').classList.remove('active');
      document.getElementById('current-0').textContent = '0';
    }


  } else if (jogadores.length == 4) {
    if (activePlayer === 0) {
      activePlayer = 1;
      document.querySelector('.jog1').classList.remove('active');
      document.querySelector('.jog2').classList.toggle('active');
      document.querySelector('.jog3').classList.remove('active');
      document.querySelector('.jog4').classList.remove('active');
      document.getElementById('current-1').textContent = '0';
    }
    else if (activePlayer === 1) {
      activePlayer = 2;
      document.querySelector('.jog1').classList.remove('active');
      document.querySelector('.jog2').classList.remove('active');
      document.querySelector('.jog3').classList.toggle('active');
      document.querySelector('.jog4').classList.remove('active');
      document.getElementById('current-2').textContent = '0';
    }
    else if (activePlayer === 2) {
      activePlayer = 3;
      document.querySelector('.jog1').classList.remove('active');
      document.querySelector('.jog2').classList.remove('active');
      document.querySelector('.jog3').classList.remove('active');
      document.querySelector('.jog4').classList.toggle('active');
      document.getElementById('current-3').textContent = '0';
    }
    else if (activePlayer === 3) {
      activePlayer = 0;
      document.querySelector('.jog1').classList.toggle('active');
      document.querySelector('.jog2').classList.remove('active');
      document.querySelector('.jog3').classList.remove('active');
      document.querySelector('.jog4').classList.remove('active');
      document.getElementById('current-0').textContent = '0';
    }
  }

  roundScore = 0;
  btn.style.pointerEvents = "auto"; // libera o botao roleta

}


function sco() {
  if (scores[1] > scores[2] && scores[1] > scores[3] && scores[1] > scores[4]) {
    document.querySelector('.jog1').classList.add('winner');
  } else if (scores[2] > scores[1] && scores[2] > scores[3] && scores[2] > scores[4]) {
    document.querySelector('.jog2').classList.add('winner');
  } else if (scores[3] > scores[2] && scores[3] > scores[1] && scores[3] > scores[4]) {
    document.querySelector('.jog3').classList.add('winner');
  } else if (scores[4] > scores[3] && scores[4] > scores[2] && scores[4] > scores[1]) {
    document.querySelector('.jog4').classList.add('winner');
  }
}



document.querySelector('.btn-hold').addEventListener('click', function () {
  vencedor();
});

function vencedor() {
  function retornaIndiceMaiorValor() {
    let maior = scores[0];
    let indice = 0;
    for (let i = 1; i < scores.length; i++) {
      if (scores[i] > maior) {
        maior = scores[i];
        indice = i;
      }
    }
    return indice;
  }

  console.log("i>:" + retornaIndiceMaiorValor(scores));

  let vencedor = jogadores[retornaIndiceMaiorValor(scores)];
  console.log(vencedor);

  let resultadovencedor = scores[retornaIndiceMaiorValor(scores)];
  console.log(resultadovencedor);

  if (resultadovencedor === 0) {
    out.innerHTML = " EMPATE!";
    exibeMsgVencedor();
  } else
    out.innerHTML = (vencedor + " VENCEU!");
  exibeMsgVencedor();


}
  





function init() {
  scores = [0, 0, 0, 0];
  roundScore = 0;
  activePlayer = 0;
  isGameActive = true;

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('score-2').textContent = '0';
  document.getElementById('score-3').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('current-2').textContent = '0';
  document.getElementById('current-3').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.getElementById('name-2').textContent = 'Player 3';
  document.getElementById('name-3').textContent = 'Player 4';
  document.querySelector('.jog1').classList.remove('winner');
  document.querySelector('.jog2').classList.remove('winner');
  document.querySelector('.jog3').classList.remove('winner');
  document.querySelector('.jog4').classList.remove('winner');
  document.querySelector('.jog1').classList.remove('active');
  document.querySelector('.jog2').classList.remove('active');
  document.querySelector('.jog3').classList.remove('active');
  document.querySelector('.jog4').classList.remove('active');
  document.querySelector('.jog1').classList.add('active');

  tempo();

}

function tempo() {
  startTime = new Date();
  setTimeout(display, 1000);
}



var out = document.getElementById("out");

const btn = document.getElementById("btn");

const quiz = document.getElementById("quiz");
const dilema = document.getElementById("dilema");

const container = document.getElementById("conteiner");

const question = document.getElementById("question");
const questionD = document.getElementById("questionD");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");

const choiceV = document.getElementById("V");
const choiceX = document.getElementById("X");

const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");


// Array do quiz
let quizzes = [
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Que trânsito! Certeza que foi a mulher que estava dirigindo o carro branco que causou um acidente. Mulheres dirigem mal.",
    choiceA: "(A) Confirmatório",
    choiceB: "(B) Guerra de gênero",
    choiceC: "(C) Afinidade",
    correct: "A"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "José está se recuperando de uma doença séria. Melhor não considerá-lo para a promoção neste momento. Ele precisa descansar.",
    choiceA: "(A) Confirmatório",
    choiceB: "(B) Grupo",
    choiceC: "(C) Afinidade",
    correct: "A"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Não falei que o Luiz Carlos não é o analista adequado para área de remuneração? Ele não é bom em matemática.",
    choiceA: "(A) Prove novamente",
    choiceB: "(B) Grupo",
    choiceC: "(C) Confirmatório",
    correct: "C"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Joaquim é deficiente visual, mas mesmo assim se formou em economia na faculdade.",
    choiceA: "(A) Confirmatório",
    choiceB: "(B) Afinidade",
    choiceC: "(C) Prove novamente",
    correct: "A"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Você viu o novo estagiário da área? Acho que ele tem uns 40 anos. Nunca vi estagiário nesta idade!.",
    choiceA: "(A) Confirmatório",
    choiceB: "(B) Guerra de gêneros",
    choiceC: "(C) Prove novamente",
    correct: "A"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "A primeira vez que falei com a Rosa eu não imaginei que ela fosse Vice-Presidente, pois ela tem um sotaque nordestino carregado.",
    choiceA: "(A) Confirmatório",
    choiceB: "(B) Afinidade",
    choiceC: "(C) Guerra de gênero",
    correct: "A"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Lucas atua em finanças há mais de 10 anos, mas ele se interessou por uma vaga em RH. Acredito que ele não tenha experiência para atuar nesta área.",
    choiceA: "(A) Prove novamente",
    choiceB: "(B) Efeito Halo",
    choiceC: "(C) Confirmatório",
    correct: "C"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Renan é negro, mas mesmo assim tem boa formação. Ele fez escolas de primeira linha e tem até mestrado.",
    choiceA: "(A) Afinidade",
    choiceB: "(B) Confirmatório",
    choiceC: "(C) Prove Novamente",
    correct: "B"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Quando procuramos informações que confirmem as primeiras impressões que temos em relação a uma pessoa.",
    choiceA: "(A) Grupo",
    choiceB: "(B) Corda Justa",
    choiceC: "(C) Confirmatório",
    correct: "C"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Somos da mesma equipe e sempre almoçamos juntos porque aproveitamos este momento para falar de assuntos de marketing.",
    choiceA: "(A) Afinidade",
    choiceB: "(B) Confirmatório",
    choiceC: "(C) Grupo",
    correct: "A"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Eu sempre pensei que o novo CFO fosse de administração ou engenharia, fiquei surpreso ao saber que ele é formado em psicologia.",
    choiceA: "(A) Afinidade",
    choiceB: "(B) Confirmatório",
    choiceC: "(C) Corda justa",
    correct: "B"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Eu não convidei a Marta para o happy hour de confraternização de equipe porque nós não temos afinidade nenhuma com ela.",
    choiceA: "(A) Grupo",
    choiceB: "(B) Corda justa",
    choiceC: "(C) Afinidade",
    correct: "C"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Eduarda fará parte de nossa equipe a partir da próxima semana. Ela pensa como nós e irá agregar muito ao time.",
    choiceA: "(A) Prove novamente",
    choiceB: "(B) Barreira de maternidade",
    choiceC: "(C) Afinidade",
    correct: "C"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Quando, no trabalho ou fora dele, nos aproximamos e avaliamos melhor as pessoas que se parecem conosco.",
    choiceA: "(A) Grupo",
    choiceB: "(B) Afinidade",
    choiceC: "(C) Corda justa",
    correct: "B"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Nossa equipe é toda composta por advogados. Não vou trazer a Luzia para a área porque ela é bióloga.",
    choiceA: "(A) Guerra de gênero",
    choiceB: "(B) Afinidade",
    choiceC: "(C) Corda justa",
    correct: "B"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Marcos se formou em educação física, então está sempre em forma.",
    choiceA: "(A) Efeito Halo",
    choiceB: "(B) Corda justa",
    choiceC: "(C) Prove novamente",
    correct: "A"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Paulo é formado pela USP, com certeza é melhor preparado que os demais candidatos.",
    choiceA: "(A) Grupo",
    choiceB: "(B) Efeito Halo",
    choiceC: "(C) Guerra de gêneros",
    correct: "B"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Quando avaliamos uma pessoa por uma qualidade e atribuímos automaticamente a ela outras características, mesmo sem conhecê-la a fundo.",
    choiceA: "(A) Efeito Halo",
    choiceB: "(B) Grupo",
    choiceC: "(C) Afinidade",
    correct: "A"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Viu como Claudio é boa pinta? Ele deve ser super inteligente também. Certeza que é um cara de sucesso!",
    choiceA: "(A) Afinidade",
    choiceB: "(B) Efeito Halo",
    choiceC: "(C) Grupo",
    correct: "B"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Já tinha selecionado a Isabela para minha equipe, mas ela me ligou hoje para dizer que está grávida. Entendo que não faz mais sentido contratá-la.",
    choiceA: "(A) Confirmatório",
    choiceB: "(B) Prove novamente",
    choiceC: "(C) Barreira de Maternidade",
    correct: "C"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "João se veste bem e tem uma ótima aparência. Vou colocá-lo para atender os clientes Van Gogh. Estou certo que ele é a melhor pessoa.",
    choiceA: "(A) Efeito Halo",
    choiceB: "(B) Afinidade",
    choiceC: "(C) Grupo",
    correct: "B"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Pedro foi levar o filho ao médico. Por que sua esposa não foi em seu lugar?",
    choiceA: "(A) Guerra de gêneros",
    choiceB: "(B) Prove novamente",
    choiceC: "(C) Barreira de Maternidade",
    correct: "C"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Você viu a camisa rosa que Tião está usando hoje? Certeza que ele é gay!",
    choiceA: "(A) Confirmatório",
    choiceB: "(B) Afinidade",
    choiceC: "(C) Guerra de gêneros",
    correct: "A"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Henrique não quis tirar a licença paternidade estendida, pois teve medo de impactar em seus resultados.",
    choiceA: "(A) Confirmatório",
    choiceB: "(B) Barreira de Maternidade",
    choiceC: "(C) Guerra de gêneros",
    correct: "B"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Mulheres com filhos têm menos probabilidade de serem promovidas.",
    choiceA: "(A) Barreira de Maternidade",
    choiceB: "(B) Guerra de gêneros",
    choiceC: "(C) Grupo",
    correct: "A"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Quando mulheres buscam características masculinas que não estão em sua essência para conseguir espaço nas organizações.",
    choiceA: "(A) Barreira de Maternidade",
    choiceB: "(B) Corda justa",
    choiceC: "(C) Prove novamente",
    correct: "B"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Você acredita que o Alfredo me procurou para pedir licença paternidade estendida? Ele disse que quer ficar mais tempo com o bebê recém nascido. Criança nesta idade precisa da mãe e não do pai.",
    choiceA: "(A) Guerra de gêneros",
    choiceB: "(B) Afinidade",
    choiceC: "(C) Barreira de Maternidade",
    correct: "C"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Eu sou mulher e sei o que digo: essa discussão de empoderamento feminino não leva a nada.",
    choiceA: "(A) Prove novamente",
    choiceB: "(B) Guerra de gêneros",
    choiceC: "(C) Grupo",
    correct: "B"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Julia, você precisa ser mais agressiva em sua fala e subir o tom de voz para ganhar espaço e escuta nas reuniões de equipe.",
    choiceA: "(A) Corda justa",
    choiceB: "(B) Afinidade",
    choiceC: "(C) Barreira de maternidade",
    correct: "A"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Camila se inscreveu para esta nova vaga na regional. Não sei como ela irá equilibrar tantas viagens com o casamento. Eu sou mulher e sei como é complicado.",
    choiceA: "(A) Guerra de gênero",
    choiceB: "(B) Grupo",
    choiceC: "(C) Corda Justa",
    correct: "A"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Maria poderia ser mais assertiva em sua comunicação, ela fala muito doce. Deste jeito nunca vai ser respeitada.",
    choiceA: "(A) Afinidade",
    choiceB: "(B) Corda Justa",
    choiceC: "(C) Efeito Halo",
    correct: "B"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Não entendo estas mulheres que preferem se dedicar à carreira do que ter filhos.",
    choiceA: "(A) Prove novamente",
    choiceB: "(B) Corda Justa",
    choiceC: "(C) Afinidade",
    correct: "A"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Eu e meu marido temos dois filhos lindos. Não consigo entender mulheres casadas que não têm filhos. A família só é completa com crianças.",
    choiceA: "(A) Corda justa",
    choiceB: "(B) Grupo",
    choiceC: "(C) Guerra de gêneros",
    correct: "B"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Carlos foi arrojado em sua proposta de negócio. Gostei. Mas a Bruna ousou muito. Achei que ela se arriscou bastante.",
    choiceA: "(A) Guerra de gêneros",
    choiceB: "(B) Prove novamente",
    choiceC: "(C) Corda justa",
    correct: "B"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Quando o preconceito de gênero coloca mulheres contra mulheres.",
    choiceA: "(A) Guerra de gêneros",
    choiceB: "(B) Prove novamente",
    choiceC: "(C) Corda justa",
    correct: "A"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Mulheres devem ser agressivas para garantir seu espaço e crescer na carreira. O mundo corporativo é assim: apenas os fortes persistem.",
    choiceA: "(A) Corda justa",
    choiceB: "(B) Guerra de gêneros",
    choiceC: "(C) Grupo",
    correct: "A"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Carol criou a estratégia de marketing deste produto, mas pedi ao Chico para tocar o projeto, pois ele é mais influente.",
    choiceA: "(A) Prove novamente",
    choiceB: "(B) Afinidade",
    choiceC: "(C) Corda justa",
    correct: "A"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Uma pesquisa da Universidade da Califórnia aponta que mulheres enfrentam entrevistas de emprego mais difíceis do que os homens.",
    choiceA: "(A) Guerra de gêneros",
    choiceB: "(B) Prove novamente",
    choiceC: "(C) Corda justa",
    correct: "B"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Oi Maurício, deixa eu te apresentar minha equipe: esses são meus gerentes e estas são minhas meninas.",
    choiceA: "(A) Guerra de gêneros",
    choiceB: "(B) Prove novamente",
    choiceC: "(C) Afinidade",
    correct: "B"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "No mundo acadêmico, mulheres precisam apresentar mais evidências que os homens para serem consideradas igualmente competentes.",
    choiceA: "(A) Guerra de maternidade",
    choiceB: "(B) Guerra de gêneros",
    choiceC: "(C) Prove novamente",
    correct: "C"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Não tem porquê trazer uma nova ferramenta para a área. Sempre usamos Excel e funcionou bem até hoje.",
    choiceA: "(A) Afinidade",
    choiceB: "(B) Efeito Halo",
    choiceC: "(C) Grupo",
    correct: "C"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Só contrato mulheres sem filhos para minha área.",
    choiceA: "(A) Barreira de maternidade",
    choiceB: "(B) Corda justa",
    choiceC: "(C) Grupo",
    correct: "A"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "A equipe inteira decidiu não levar este tema para o gestor. Se todos estão indo por esse caminho, eu não quero ser o diferente.",
    choiceA: "(A) Prova novamente",
    choiceB: "(B) Grupo",
    choiceC: "(C) Efeito Halo",
    correct: "B"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Vocês chamaram a Yoko para a reunião de discussão de metas? Mas ela não é nada objetiva. Essa reunião vai ser longa!",
    choiceA: "(A) Prove novamente",
    choiceB: "(B) Guerra de gêneros",
    choiceC: "(C) Confirmatório",
    correct: "C"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Meus amigos pensam todos como eu. Tenho preguiça de conversar com pessoas com opiniões diferentes da minha.",
    choiceA: "(A) Grupo",
    choiceB: "(B) Confirmatório",
    choiceC: "(C) Afinidade",
    correct: "C"
  },
  {
    titulo: "Qual é o viés inconsciente?",
    question: "Não vou propor uma forma diferente de tocar este projeto. Todo mundo sempre fez desse jeito: é mais fácil aprovar no comitê assim.",
    choiceA: "(A) Grupo",
    choiceB: "(B) Afinidade",
    choiceC: "(C) Corda justa",
    correct: "A"
  },
  {
    titulo: "Qual o comportamento observado?",
    question: "Mulheres na TPM ficam mais irritadas mesmo. Elas ficam loucas nessa época.",
    choiceA: "(A) Manterrupting",
    choiceB: "(B) Gaslighting",
    choiceC: "(C) Mansplaining",
    correct: "B"
  }
];




let dilemas = [
  {
    questionD: "Desde a semana passada há um novo integrante em sua equipe, o João, que é cadeirante.<br><br>Você tem observado que João demora muito tempo no banheiro e o frequenta várias vezes ao dia. Seus colegas já estão fazendo piadas jocosas sobre isso.<br><br>Como você se posiciona frente a esta situação?",
    choiceX: "",
    choiceV: "",
    correctD: "V"
  },
  {
    questionD: "Você trabalha com a Joana há mais de um ano. Além de colegas, vocês se tornaram amigos. <br><br>Joana, que possui uma deficiência chamada nanismo, lhe confidencia que tem sentido muitas dores nas costas ao final do dia devido a altura da mesa e cadeira que ela usa, que é padronizada para todos os profissionais da área.<br><br>O que você faz com esta informação?",
    choiceX: "",
    choiceV: "",
    correctD: "V"
  },
  {
    questionD: "Você está em busca de um novo integrante para sua equipe. Há três candidatos para a vaga e um deles é de um profissional formado em educação física.<br><br>Você está com dúvidas sobre as competências deste candidato e como seria sua inclusão nas atividades do dia a dia da área de contabilidade.<br><br> O que você faz neste caso?",
    choiceX: "",
    choiceV: "",
    correctD: "V"
  },
  {
    questionD: "Seu colega está fazendo uma transição de gênero e pediu que as pessoas o chamem de Claudia.<br><br> Seu gestor e o restante da equipe se recusam a aceitar esta mudança e você percebe que Claudia está mais entristecida e começou a almoçar sozinha todos os dias. <br><br>Como você se posiciona frente a esta situação?",
    choiceX: "",
    choiceV: "",
    correctD: "V"
  },
  {
    questionD: "Há uma oportunidade de promoção em sua área e você considera a Ana a pessoa mais indicada, porém ela retorna de licença de maternidade apenas no mês que vem. <br> <br>Você tem dúvidas se ela dará conta do novo desafio com um bebê tão novo. <br> <br>Será que ela vai conseguir fazer tantas viagens a trabalho?<br><br> Quais as possibilidades que você adotaria para este caso?",
    choiceX: "",
    choiceV: "",
    correctD: "V"
  },
  {
    questionD: "Sua área passou por uma grande mudança estrutural nos últimos meses e novos profissionais integraram sua equipe. <br> <br>A equipe é formada de jovens,  como você, com exceção de uma pessoa com 60 anos. Com o passar dos dias, começam os comentários depreciativos sobre seu novo colega. <br> <br>O que você pode fazer para contornar esse caso?",
    choiceX: "",
    choiceV: "",
    correctD: "V"
  },
  {
    questionD: "Muitas pessoas enxergam os profissionais da nova geração, nascidos após os anos 90, como superficiais, ansiosos e imaturos. <br><br> Pablo, seu colega, tem apenas 24 anos e foi promovido a gestor de uma equipe com 10 pessoas. <br><br> Como você pode ajudá-lo a quebrar estes paradigmas?",
    choiceX: "",
    choiceV: "",
    correctD: "V"
  },
  {
    questionD: "Em sua agência, há um gerente negro que se chama Roberto. <br><br>Você é gerente geral e recebe feedback de seus clientes que preferem ser atendidos pela Vanessa, outra gerente da agência, pois ela é branca e parece ser mais capacitada. O que acha que pode estar acontecendo? <br><br> Como você dribla esta situação?",
    choiceX: "",
    choiceV: "",
    correctD: "V"
  },
  {
    questionD: "Maria é uma analista de sistemas muito inteligente e que domina sua área de atuação. Ao participar de uma reunião de diretoria para apresentar seu novo projeto, Maria sente-se acuada e percebe que não recebe a atenção adequada enquanto faz sua apresentação. <br><br> Ao contrário de seu gestor, que quando se posiciona é ouvido com atenção. <br> O que você acha que aconteceu nesta reunião e como você pode ajudar Maria?",
    choiceX: "",
    choiceV: "",
    correctD: "V"
  },
  {
    questionD: "Bruno é pai recente e seu amigo de longa data no banco. <br> <br>Ele quer estar em casa todos os dias às 18h para dar banho em seu bebê e pede o seu conselho sobre como abordar o gestor para este pedido, pois ele acha que não será compreendido. <br><br> O que você aconselha Bruno a fazer?",
    choiceX: "",
    choiceV: "",
    correctD: "V"
  },
  {
    questionD: "Rafael é muito educado e coerente em suas falas, porém você tem percebido que ele te corta em diversas reuniões e você não consegue se expressar. <br><br>Ele age como se a palavra dele tivesse mais valor que a sua. Porém, você não observa este comportamento se repetir com seus colegas homens.<br><br> O que você pode fazer para contornar essa atitude de Rafael?",
    choiceX: "",
    choiceV: "",
    correctD: "V"
  },
  {
    questionD: "Chegou um novo profissional na sua área que possui deficiência física.<br>Você percebe que ao apresentá-lo à equipe, seu gestor diz: pessoal, esse é o novo PCD da área. <br><br>Você sabe que ele se chama João Paulo e percebe que ele ficou incomodado de ser apresentado desta forma. <br><br>Como agir neste caso?",
    choiceX: "",
    choiceV: "",
    correctD: "V"
  },
  {
    questionD: "Você é gerente de conta PJ e está aguardando um cliente em potencial que é fundador de uma startup. Vocês já conversaram por telefone, mas nunca presencialmente. Vocês marcaram às 15h e ele está atrasado. Enquanto isso, chega um rapaz de bermuda e chinelos, mas você não quer atendê-lo porque o cliente pode chegar a qualquer momento. Passados 15 minutos, o rapaz vai até sua mesa e lhe pergunta se você pode atendê-lo. Sem opção, você aceita e ele se apresenta como sendo justamente o cliente que você estava esperando. Que aprendizado você leva desta situação?",
    choiceX: "",
    choiceV: "",
    correctD: "V"
  },
  {
    questionD: "Seu nome é Luiz e você foi convidado pelo banco para participar de um grupo de discussão sobre temas de diversidade de gênero. <br><br>A princípio, você se sente confuso: por que chamaram você, se você é um homem? <br><br>Qual a sua resposta a este convite?",
    choiceX: "",
    choiceV: "",
    correctD: "V"
  },
  {
    questionD: "Seu filho Pedro de 5 anos lhe pediu um novo brinquedo: <br><br>Uma boneca. <br><br>Como você lida com esta situação?",
    choiceX: "",
    choiceV: "",
    correctD: "V"
  },
  {
    questionD: "Seu melhor amigo é gay e ele lhe confidencia que frequentemente é provocado com piadas de mal gosto pelos colegas e isso o faz se sentir constrangido. <br><br>Qual é sua atitude frente à esta situação?",
    choiceX: "",
    choiceV: "",
    correctD: "V"
  },
  {
    questionD: "Você se candidatou para uma nova área através do Meu Lugar Santander. <br><br>Durante a entrevista, o gestor lhe pergunta se você tem esposa ou namorada. No entanto, você é gay e possui um namorado. <br><br>Como você responde esta pergunta?",
    choiceX: "",
    choiceV: "",
    correctD: "V"
  },
  {
    questionD: "Seus colegas de equipe, durante um almoço, se queixam que agora não se pode ter senso de humor: piadas com gays, negros e mulheres estão proibidas.  <br><br>Reforçam que são apenas brincadeiras, mas, agora, são mal vistas.<br><br>Você conhece o posicionamento de Diversidade do Santander e compreende os impactos dessas brincadeiras de mau gosto.<br><br> Como você se porta neste caso?",
    choiceX: "",
    choiceV: "",
    correctD: "V"
  },
  {
    questionD: "Você é gestor e está contratando uma nova pessoa para sua área. Chega para a entrevista uma pessoa com deficiência visual. <br><br>Você não sabe se deve perguntar sobre sua deficiência ou sobre que tipo de adaptações ele iria necessitar para fazer seu trabalho. <br><br>Que escolha você toma?",
    choiceX: "",
    choiceV: "",
    correctD: "V"
  }
  ,
  {
    questionD: "Você é GG de uma agência e leva sua nova gerente PF para uma reunião com o cliente. Ao começar a reunião, o cliente olha para você e diz: não sabia que vocês contratavam negros para o banco. <br><br>Ele está se referindo à gerente PF que está ao seu lado, Priscila. <br><br>Como você se sai nesta saia justa?",
    choiceX: "",
    choiceV: "",
    correctD: "V"
  }
  ,
  {
    questionD: "No almoço você tem percebido que seus colegas homens estão fazendo algumas brincadeiras, como criar listas das colegas mais bonitas, fazer ranking das mais malhadas, eleger as mais feias da área, etc. <br><br>O que você faz nesta situação?",
    choiceX: "",
    choiceV: "",
    correctD: "V"
  }

];


//gera uma nova array para o quiz
for (var i = 0; i < 47; ++i) {
  var j = Math.floor(Math.random() * 47); //numero aleatorio de 0 a 3
  var tmp = quizzes[i];
  quizzes[i] = quizzes[j];
  quizzes[j] = tmp;
}

console.log(quizzes);

//gera uma nova array para o dilema
for (var i = 0; i < 20; ++i) {
  var j = Math.floor(Math.random() * 20); //numero aleatorio de 0 a 3
  var tmp = dilemas[i];
  dilemas[i] = dilemas[j];
  dilemas[j] = tmp;
}

console.log(dilemas);

//const lastQuizQuestion = quizzes.length - 1;
const lastQuizQuestion = quizzes.length;
let runningQuizQuestion = 0;

const lastDilemaQuestion = dilemas.length;
let runningDilemaQuestion = 0;


function desabilitaBotoesQuiz() {
  choiceB.style.pointerEvents = "none";
  choiceA.style.pointerEvents = "none";
  choiceC.style.pointerEvents = "none";
}

function desabilitaBotoesDilema() {
  choiceV.style.pointerEvents = "none";
  choiceX.style.pointerEvents = "none";
}

// inicia o quiz
function startQuiz() {
  choiceB.style.pointerEvents = "auto";
  choiceA.style.pointerEvents = "auto";
  choiceC.style.pointerEvents = "auto";
  choiceA.style.backgroundColor = "";
  choiceB.style.backgroundColor = "";
  choiceC.style.backgroundColor = "";
  btn.style.pointerEvents = "none";
  renderQuizQuestion();
  quiz.style.opacity = "1";
  quiz.style.zIndex = "2";
}

function startDilema() {
  choiceV.style.pointerEvents = "auto";
  choiceX.style.pointerEvents = "auto";
  choiceV.style.backgroundColor = "";
  choiceX.style.backgroundColor = "";
  btn.style.pointerEvents = "none";
  renderDilemaQuestion();
  dilema.style.opacity = "1";
  dilema.style.zIndex = "2";
}

// renderiza as cartas de quiz
function renderQuizQuestion() {
  let q = quizzes[runningQuizQuestion];
  question.innerHTML = "<h3>" + q.titulo + "</h3>" + "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}

function renderDilemaQuestion() {
  let f = dilemas[runningDilemaQuestion];
  questionD.innerHTML = "<p>" + f.questionD + "</p>";
  choiceX.innerHTML = f.choiceX;
  choiceV.innerHTML = f.choiceV;
}

//fecha o quiz e bloquei o botão da roleta
function fechaquiz() {
  quiz.style.opacity = "0";
  quiz.style.zIndex = "1";
  btn.style.pointerEvents = "auto"; // libera o botao roleta
}

//fecha o quiz e bloquei o botão da roleta
function fechaDilema() {
  dilema.style.opacity = "0";
  dilema.style.zIndex = "1";
  btn.style.pointerEvents = "auto"; // libera o botao roleta
}

// Verificar a Resposta enviada pelo botao
function checkQuizAnswer(quizanswer) {



  if (quizanswer == quizzes[runningQuizQuestion].correct) { // answer is correct

    if (quizanswer == "A") {
      desabilitaBotoesQuiz();
      choiceA.style.backgroundColor = "#40AB57";
      out.innerHTML = "+3 Pontos!";
      exibeMsgVerde();

      setTimeout(function () {
        scores[activePlayer] += 3;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        apagaMsg();
        fechaquiz();
        nextPlayer();
      }, 4000);

    } else if (quizanswer == "B") {
      desabilitaBotoesQuiz();
      choiceB.style.backgroundColor = "#40AB57";
      out.innerHTML = "+3 Pontos!";
      exibeMsgVerde();

      setTimeout(function () {
        scores[activePlayer] += 3;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        apagaMsg();
        fechaquiz();
        nextPlayer();
      }, 4000);

    } else if (quizanswer == "C") {
      desabilitaBotoesQuiz();
      choiceC.style.backgroundColor = "#40AB57";
      out.innerHTML = "+3 Pontos!";
      exibeMsgVerde();

      setTimeout(function () {
        scores[activePlayer] += 3;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        apagaMsg();
        fechaquiz();
        nextPlayer();
      }, 4000);
    }
    correto.play();
    apagaMsg();

    if (runningQuizQuestion < lastQuizQuestion) {
      runningQuizQuestion++;
    } else {
      fechaquiz(); // end the quiz and show the score
    }
    console.log(runningQuizQuestion);



  } else { // se estiver errado

    var opcaocorreta = (quizzes[runningQuizQuestion].correct);

    if (quizanswer == "A") {
      desabilitaBotoesQuiz();
      choiceA.style.backgroundColor = "#E84855";
      out.innerHTML = "-3 Pontos!";
      exibeMsgVermelho();

      if (opcaocorreta == "B") {
        setTimeout(function () {
          choiceB.style.backgroundColor = "#40AB57";
        }, 1000);

      } else if (opcaocorreta == "C") {
        setTimeout(function () {
          choiceC.style.backgroundColor = "#40AB57";
        }, 1000);
      }

      setTimeout(function () {
        scores[activePlayer] -= 3;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        apagaMsg();
        fechaquiz();
        nextPlayer();
      }, 4000);

    } else if (quizanswer == "B") {
      desabilitaBotoesQuiz();
      choiceB.style.backgroundColor = "#E84855";
      out.innerHTML = "-3 Pontos!";
      exibeMsgVermelho();

      if (opcaocorreta == "A") {
        setTimeout(function () {
          choiceA.style.backgroundColor = "#40AB57";
        }, 1000);
      } else if (opcaocorreta == "C") {
        setTimeout(function () {
          choiceC.style.backgroundColor = "#40AB57";
        }, 1000);
      }

      setTimeout(function () {
        scores[activePlayer] -= 3;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        apagaMsg();
        fechaquiz();
        nextPlayer();
      }, 4000);

    } else if (quizanswer == "C") {
      desabilitaBotoesQuiz();
      choiceC.style.backgroundColor = "#E84855";
      out.innerHTML = "-3 Pontos!";
      exibeMsgVermelho();

      if (opcaocorreta == "B") {
        setTimeout(function () {
          choiceB.style.backgroundColor = "#40AB57";
        }, 1000);
      } else if (opcaocorreta == "A") {
        setTimeout(function () {
          choiceA.style.backgroundColor = "#40AB57";
        }, 1000);
      }

      setTimeout(function () {
        scores[activePlayer] -= 3;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        apagaMsg();
        fechaquiz();
        nextPlayer();
      }, 4000);
    }
    errado.play();
    apagaMsg();

    if (runningQuizQuestion < lastQuizQuestion) {
      runningQuizQuestion++;
    } else {
      fechaquiz(); // end the quiz and show the score
    }
    console.log(runningQuizQuestion);

  }
  console.log(scores);
  resetWheel();
}




// Verificar a Resposta
function checkDilemaAnswer(Dilemaanswer) {

  if (Dilemaanswer == dilemas[runningDilemaQuestion].correctD) { // answer is correct

    if (Dilemaanswer == "X") {
      desabilitaBotoesDilema();
      choiceX.style.backgroundColor = "#40AB57";
      out.innerHTML = "+5 Pontos!";
      exibeMsgVerde();

      setTimeout(function () {
        scores[activePlayer] += 5;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        apagaMsg();
        fechaDilema();
        nextPlayer();
      }, 4000);

    } else if (Dilemaanswer == "V") {
      desabilitaBotoesDilema();
      choiceV.style.backgroundColor = "#40AB57";
      out.innerHTML = "+5 Pontos!";
      exibeMsgVerde();

      setTimeout(function () {
        scores[activePlayer] += 5;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        apagaMsg();
        fechaDilema();
        nextPlayer();
      }, 4000);

    }
    correto.play();
    apagaMsg();

    if (runningDilemaQuestion < lastDilemaQuestion) {
      runningDilemaQuestion++;
    } else {
      fechaDilema(); // end the Dilema and show the score
    }
    console.log(runningDilemaQuestion);

  } else {

    if (Dilemaanswer == "X") {
      desabilitaBotoesDilema();
      choiceX.style.backgroundColor = "#E84855";
      out.innerHTML = "-5 Pontos!";
      exibeMsgVermelho();

      setTimeout(function () {
        scores[activePlayer] -= 5;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        apagaMsg();
        fechaDilema();
        nextPlayer();
      }, 4000);

    } else if (Dilemaanswer == "V") {
      desabilitaBotoesDilema();
      choiceV.style.backgroundColor = "#E84855";
      out.innerHTML = "-5 Pontos!";
      exibeMsgVermelho();

      setTimeout(function () {
        scores[activePlayer] -= 5;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        apagaMsg();
        fechaDilema();
        nextPlayer();
      }, 4000);
    }
    errado.play();
    apagaMsg();

    if (runningDilemaQuestion < lastDilemaQuestion) {
      runningDilemaQuestion++;
    } else {
      fechaDilema(); // end the Dilema and show the score
    }
    console.log(runningDilemaQuestion);
  }
  console.log(scores);
  resetWheel();
}


/* global Winwheel, Audio, alert */
/* adopted from http://dougtesting.net/winwheel/examples/wheel_of_fortune*/

(function () {
  "use strict";


  let theWheel = new Winwheel({
    'strokeStyle': null,
    'pointerAngle': 45,
    'lineWidth': 0,
    'outerRadius': 250,
    'textMargin': 25,
    'innerRadius': 50,
    'textFontSize': 20,
    'textOrientation': 'horizontal',
    'numSegments': 12,
    'segments':
      [
        { 'textFontFamily': 'Open Sans', 'textFillStyle': '#FFFFFF', 'fillStyle': '#4B68B1', 'text': 'Quiz' },
        { 'textFillStyle': '#FFFFFF', 'fillStyle': '#FDB714', 'text': 'Dilema' },
        { 'textFillStyle': '#FFFFFF', 'fillStyle': '#E84855', 'text': '-3' },
        { 'textFillStyle': '#FFFFFF', 'fillStyle': '#4B68B1', 'text': 'Quiz' },
        { 'textFillStyle': '#FFFFFF', 'fillStyle': '#FDB714', 'text': 'Dilema' },
        { 'textFillStyle': '#FFFFFF', 'fillStyle': '#4B68B1', 'text': 'Quiz' },
        { 'textFillStyle': '#FFFFFF', 'fillStyle': '#40AB57', 'text': '+2' },
        { 'textFillStyle': '#FFFFFF', 'fillStyle': '#FDB714', 'text': 'Dilema' },
        { 'textFillStyle': '#FFFFFF', 'fillStyle': '#E84855', 'text': '-3' },
        { 'textFillStyle': '#FFFFFF', 'fillStyle': '#4B68B1', 'text': 'Quiz' },
        { 'textFillStyle': '#FFFFFF', 'fillStyle': '#40AB57', 'text': '+2' },
        { 'textFillStyle': '#FFFFFF', 'fillStyle': '#FDB714', 'text': 'Dilema' },
      ],
    'pointerGuide':
    {
      'display': true,
      'strokeStyle': 'white',
      'lineWidth': 4,
    },
    'animation':
    {
      'type': 'spinToStop',
      'duration': 8,
      'spins': 5,
      'callbackFinished': alertPrize,
      'callbackSound': playSound,
      'soundTrigger': 'segment',
    },
    'pins':
    {
      'number': 12,
      'fillStyle': 0,
      'outerRadius': 0,
    }
  });

  let audio = new Audio('https://raw.githubusercontent.com/zarocknz/javascript-winwheel/master/examples/wheel_of_fortune/tick.mp3');

  function playSound() {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  }

  window.startSpin = function () {
    btn.style.pointerEvents = "none";
    click.play();
    theWheel.startAnimation();


  };

  window.resetWheel = function () {
    console.log(" the wheel is " + theWheel);
    theWheel.stopAnimation(false);
    theWheel.rotationAngle = 0;
    theWheel.draw();
  };

  function alertPrize(indicatedSegment) {

    var text = indicatedSegment.text

    if (text === "Dilema") {
      out.innerHTML = "Dilema!";
      exibeMsgAmarelo();
      carta.play();
      setTimeout(function () {
        atualizaScore();
        if (runningDilemaQuestion <= 20) { //numero maximo de Dilema
          startDilema();
        } else {
          out.innerHTML = "Sem cartas de Dilema!";
          fechaDilema();
          apagaMsg();
        }
      }, 1000);
    }

    else if (text === "Quiz") {
      out.innerHTML = "Responda o Quiz!";
      exibeMsgAzul();
      carta.play();
      setTimeout(function () {
        atualizaScore();
        if (runningQuizQuestion <= 47) { //numero maximo de Quiz
          startQuiz();
        } else {
          out.innerHTML = "Sem cartas de Quiz!";
          fechaquiz();
          apagaMsg();
        }
      }, 1000);

    }

    else if (text === "-3") {
      out.innerHTML = "-3 Pontos!";
      exibeMsgVermelho();
      errado.play();
      setTimeout(function () {
        roundScore -= 3;
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        apagaMsg();
        nextPlayer();
        resetWheel();
      }, 2000);
    }

    else if (text === "+2") {
      out.innerHTML = "+2 Pontos!";
      exibeMsgVerde();
      correto.play();
      setTimeout(function () {
        roundScore += 2;
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        apagaMsg();
        nextPlayer();
        resetWheel();
      }, 2000);
    }


  }
})();

function exibeMsgVencedor() {
  setTimeout(function () {
    out.style.opacity = "1";
    out.style.color = "#FDB714";
  }, 1);
}

function exibeMsgAmarelo() {
  setTimeout(function () {
    out.style.opacity = "1";
    out.style.animation = "out .5s ease-out forwards";
    out.style.color = "#FDB714";
  }, 1);
}
function exibeMsgVermelho() {
  setTimeout(function () {
    out.style.opacity = "1";
    out.style.animation = "out .5s ease-out forwards";
    out.style.color = "#E84855";
  }, 1);
}
function exibeMsgAzul() {
  setTimeout(function () {
    out.style.opacity = "1";
    out.style.animation = "out .5s ease-out forwards";
    out.style.color = "#4B68B1";
  }, 1);
}
function exibeMsgVerde() {
  setTimeout(function () {
    out.style.opacity = "1";
    out.style.animation = "out .5s ease-out forwards";
    out.style.color = "#40AB57";
  }, 1);
}

function apagaMsg() {
  setTimeout(function () {
    out.style.opacity = "0";
  }, 2000);
}

function atualizaScore() {
  //document.querySelector('#current-' + activePlayer).textContent = roundScore;
  scores[activePlayer] += roundScore;
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
}


var startTime;

function display() {
  // later record end time
  var endTime = new Date();

  // time difference in ms
  var timeDiff = endTime - startTime;

  // strip the miliseconds
  timeDiff /= 1000;

  // get seconds
  var seconds = Math.round(timeDiff % 60);

  // remove seconds from the date
  timeDiff = Math.floor(timeDiff / 60);

  // get minutes
  var minutes = Math.round(timeDiff % 60);

  // remove minutes from the date
  timeDiff = Math.floor(timeDiff / 60);

  // get hours
  var hours = Math.round(timeDiff % 24);

  // remove hours from the date
  timeDiff = Math.floor(timeDiff / 24);

  // the rest of timeDiff is number of days
  var days = timeDiff;

  $(".time").text(hours + ":" + minutes + ":" + seconds);
  setTimeout(display, 1000);
}


