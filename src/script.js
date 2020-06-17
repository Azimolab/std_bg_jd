var scores;
var roundScore;
var activePlayer;
var isGameActive;
//var buttonDOM = document.querySelector('.btn-roll');


init();

document.querySelector('.btn-enter').addEventListener('click', function() {
  document.querySelector('.player-names').style.display = 'none';
  document.querySelector('.player-names').style.display = 'none';
  var player1Name = document.getElementById("player-name-1").value;
  var player2Name = document.getElementById("player-name-2").value;
  var player2Name = document.getElementById("player-name-3").value;
  var player2Name = document.getElementById("player-name-4").value;
  document.querySelector('#name-0').textContent = player1Name;
  document.querySelector('#name-1').textContent = player2Name;
  document.querySelector('#name-2').textContent = player2Name;
  document.querySelector('#name-3').textContent = player2Name;

});


document.querySelector('.btn-hold').addEventListener('click', function () {
  if (isGameActive) {
    scores[activePlayer] += roundScore;

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      isGameActive = false;
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
      nextPlayer();
    }
  }
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {

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

  // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

  roundScore = 0;
  btn.style.pointerEvents = "auto"; // libera o botao roleta

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
}









const btn = document.getElementById("btn");
const quiz = document.getElementById("quiz");
const container = document.getElementById("conteiner");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");


// Array base do quiz
let quizzes = [
  {
    question: "Qual é o viés inconsciente? Que trânsito! Certeza que foi a mulher que estava dirigindo o carro branco que causou um acidente. Mulheres dirigem mal.",
    choiceA: "(A) Confirmatório",
    choiceB: "(B) Guerra de gênero",
    choiceC: "(C) Afinidade",
    correct: "A"
  }, {
    question: "Qual é o viés inconsciente? José está se recuperando de uma doença séria. Melhor não considerá-lo para a promoção neste momento. Ele precisa descansar.",
    choiceA: "(A) Confirmatório",
    choiceB: "(B) Grupo",
    choiceC: "(C) Afinidade",
    correct: "A"
  }, {
    question: "Qual é o viés inconsciente? Não falei que o Luiz Carlos não é o analista adequado para área de remuneração? Ele não é bom em matemática.",
    choiceA: "(A) Prove novamente",
    choiceB: "(B) Grupo",
    choiceC: "(C) Confirmatório",
    correct: "A"
  }, {
    question: "Qual é o viés inconsciente? Joaquim é deficiente visual, mas mesmo assim se formou em economia na faculdade.",
    choiceA: "(A) Confirmatório",
    choiceB: "(B) Afinidade",
    choiceC: "(C) Prove novamente",
    correct: "A"
  }, {
    question: "Qual é o viés inconsciente? Você viu o novo estagiário da área? Acho que ele tem uns 40 anos. Nunca vi estagiário nesta idade!.",
    choiceA: "(A) Confirmatório",
    choiceB: "(B) Guerra de gêneros",
    choiceC: "(C) Prove novamente",
    correct: "A"
  }, {
    question: "Qual é o viés inconsciente? A primeira vez que falei com a Rosa eu não imaginei que ela fosse Vice-Presidente, pois ela tem um sotaque nordestino carregado.",
    choiceA: "(A) Confirmatório",
    choiceB: "(B) Afinidade",
    choiceC: "(C) Guerra de gênero",
    correct: "B"
  }
];


//gera uma nova array para o quiz
for (var i = 0; i < 6; ++i) {
  var j = Math.floor(Math.random() * 6); //numero aleatorio de 0 a 3
  var tmp = quizzes[i];
  quizzes[i] = quizzes[j];
  quizzes[j] = tmp;
}

console.log(quizzes);


//const lastQuizQuestion = quizzes.length - 1;
const lastQuizQuestion = quizzes.length;
let runningQuizQuestion = 0;



// inicia o quiz
function startQuiz() {
  choiceB.style.pointerEvents = "auto";
  choiceA.style.pointerEvents = "auto";
  choiceC.style.pointerEvents = "auto";
  choiceA.style.backgroundColor = "";
  choiceB.style.backgroundColor = "";
  choiceC.style.backgroundColor = "";
  btn.style.pointerEvents = "none";
  quiz.style.display = "block";
  renderQuizQuestion();

}

// renderiza as cartas de quiz
function renderQuizQuestion() {
  let q = quizzes[runningQuizQuestion];
  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}

// checkAnwer

function checkQuizAnswer(quizanswer) {

  if (quizanswer == quizzes[runningQuizQuestion].correct) { // answer is correct

    if (quizanswer == "A") {
      //choiceC.removeEventListener("click", checkQuizAnswer);
      choiceB.style.pointerEvents = "none";
      choiceC.style.pointerEvents = "none";
      choiceA.style.pointerEvents = "none";
      choiceA.style.backgroundColor = "green";

      setTimeout(function () { 
        out.innerHTML = "+3 Pontos!";
        out.style.opacity = "1"; 
        out.style.animation = "out .5s ease-out forwards"; 
      }, 10);// mostra msg

      setTimeout(function () { 
        scores[activePlayer] += 3; // Add 5 pontos
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        out.style.opacity = "0"; 
        fechaquiz();
        nextPlayer();
      }, 5000); 
       
    } else if (quizanswer == "B") {
      choiceA.style.pointerEvents = "none";
      choiceC.style.pointerEvents = "none";
      choiceB.style.pointerEvents = "none";
      choiceB.style.backgroundColor = "green";

      setTimeout(function () { 
        out.innerHTML = "+3 Pontos!";
        out.style.opacity = "1"; 
        out.style.animation = "out .5s ease-out forwards"; 
      }, 10);// mostra msg

      setTimeout(function () { 
        scores[activePlayer] += 3; // Add 5 pontos
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        out.style.opacity = "0"; 
        fechaquiz();
        nextPlayer();
      }, 5000); 

    } else if (quizanswer == "C") {
      choiceB.style.pointerEvents = "none";
      choiceA.style.pointerEvents = "none";
      choiceC.style.pointerEvents = "none";
      choiceC.style.backgroundColor = "green";

      setTimeout(function () { 
        out.innerHTML = "+3 Pontos!";
        out.style.opacity = "1"; 
        out.style.animation = "out .5s ease-out forwards"; 
      }, 10);// mostra msg

      setTimeout(function () { 
        scores[activePlayer] += 3; // Add 5 pontos
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        out.style.opacity = "0"; 
        fechaquiz();
        nextPlayer();
      }, 5000); 
    }

  } else {

    if (quizanswer == "A") {
      choiceB.style.pointerEvents = "none";
      choiceC.style.pointerEvents = "none";
      choiceA.style.pointerEvents = "none";
      choiceA.style.backgroundColor = "red";

      setTimeout(function () { 
        out.innerHTML = "-3 Pontos!";
        out.style.opacity = "1"; 
        out.style.animation = "out .5s ease-out forwards"; 
      }, 10);// mostra msg

      setTimeout(function () { 
        scores[activePlayer] -= 3; // Add 5 pontos
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        out.style.opacity = "0"; 
        fechaquiz();
        nextPlayer();
      }, 5000); 
    } else if (quizanswer == "B") {
      choiceA.style.pointerEvents = "none";
      choiceC.style.pointerEvents = "none";
      choiceB.style.pointerEvents = "none";
      choiceB.style.backgroundColor = "red";

      setTimeout(function () { 
        out.innerHTML = "-3 Pontos!";
        out.style.opacity = "1"; 
        out.style.animation = "out .5s ease-out forwards"; 
      }, 10);// mostra msg

      setTimeout(function () { 
        scores[activePlayer] -= 3; // Add 5 pontos
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        out.style.opacity = "0"; 
        fechaquiz();
        nextPlayer();
      }, 5000); 
    } else if (quizanswer == "C") {
      choiceB.style.pointerEvents = "none";
      choiceA.style.pointerEvents = "none";
      choiceC.style.pointerEvents = "none";
      choiceC.style.backgroundColor = "red";

      setTimeout(function () { 
        out.innerHTML = "-3 Pontos!";
        out.style.opacity = "1"; 
        out.style.animation = "out .5s ease-out forwards"; 
      }, 10);// mostra msg

      setTimeout(function () { 
        scores[activePlayer] -= 3; // Add 5 pontos
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        out.style.opacity = "0"; 
        fechaquiz();
        nextPlayer();
      }, 5000); 
    }

    // answer is wrong // change progress color to red

  }

  if (runningQuizQuestion < lastQuizQuestion) {
    runningQuizQuestion++;
  } else {
    fechaquiz(); // end the quiz and show the score
  }
  console.log(runningQuizQuestion);
}

function fechaquiz() {
  //start.style.display = "block"; //fecha o deck
  quiz.style.display = "none"; // oculta o quiz
  btn.style.pointerEvents = "auto"; // libera o botao roleta
}

function abrequiz() {
  //start.style.display = "block"; //fecha o deck
  quiz.style.display = "block"; // oculta o quiz
  btn.style.pointerEvents = "auto"; // libera o botao roleta

}

// mensagem para resposta certa
function respostacerta() {
  // window.alert("resposta certa");
  setTimeout(function () { out.style.opacity = "0"; }, 1000); //apaga msg
}
// mensagem para resposta certa
function respostaerrada() {
  // window.alert("resposta errada");
  setTimeout(function () { out.style.opacity = "0"; }, 1000); //apaga msg
}






var out = document.getElementById("out");


var colors = [
  "#4B68B1",
  "#E84855",
  "#4B68B1",
  "white",
  "#FDB714",
  "#4B68B1",
  "#40AB57",
  "#FDB714",
  "#E84855",
  "#4B68B1",
  "#40AB57",
  "#FDB714"];
var restaraunts = [
  "Quiz",
  "-3",
  "Quiz",
  "Passe",
  "Dilema",
  "Quiz",
  "+2",
  "Dilema",
  "-3",
  "Quiz",
  "+2",
  "Dilema"];

var startAngle = 0;
var arc = Math.PI / 6;
var spinTimeout = null;

var spinArcStart = 10;
var spinTime = 0;
var spinTimeTotal = 0;

var ctx;

function drawRouletteWheel() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var outsideRadius = 200;
    var textRadius = 160;
    var insideRadius = 0;

    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 500, 500);


    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;

    ctx.font = 'bold 17px Helvetica, Arial';

    for (var i = 0; i < 12; i++) {
      var angle = startAngle + i * arc;
      ctx.fillStyle = colors[i];
      ctx.beginPath();
      ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
      ctx.arc(250, 250, insideRadius, angle + arc, angle, true);

      ctx.fill();

      ctx.save();

      ctx.fillStyle = "white";
      ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius,
        250 + Math.sin(angle + arc / 2) * textRadius);
      ctx.rotate(angle + arc / 2 + Math.PI / 2);
      var text = restaraunts[i];
      ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
      ctx.restore();
    }

    //Arrow
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
    ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
    ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
    ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
    ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
    ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
    ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
    ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
    ctx.fill();
  }
}

function spin() {
  btn.style.pointerEvents = "none";
  spinAngleStart = Math.random() * 10 + 10;
  spinTime = 1;
  spinTimeTotal = Math.random() * 3 + 4 * 8000;
  rotateWheel();
}

function rotateWheel() {
  spinTime += 40;
  if (spinTime >= spinTimeTotal) {
    stopRotateWheel();
    return;
  }
  var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
  startAngle += (spinAngle * Math.PI / 180);
  drawRouletteWheel();
  spinTimeout = setTimeout('rotateWheel()', 1);
}

function stopRotateWheel() {
  clearTimeout(spinTimeout);
  var degrees = startAngle * 180 / Math.PI + 90;
  var arcd = arc * 180 / Math.PI;
  var index = Math.floor((360 - degrees % 360) / arcd);
  ctx.save();
  ctx.font = 'bold 30px Helvetica, Arial';
  var text = restaraunts[index]
  ctx.restore();
  console.log(text);

  if (text === "Dilema") {
    out.innerHTML = "Dilema!";
    setTimeout(function () { out.style.opacity = "1"; out.style.animation = "out .5s ease-out forwards"; }, 10);// mostra msg

    setTimeout(function () {
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
      scores[activePlayer] += roundScore;
      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

      if (runningQuizQuestion <= 5) {
        startQuiz();
      } else {
        fechaquiz();
        out.innerHTML = "Sem cartas de Quiz!";
        setTimeout(function () { out.style.opacity = "0"; }, 1000); //apaga msg
      }
    }, 1000);
  }

  else if (text === "Quiz") {
    out.innerHTML = "Quiz!";
    setTimeout(function () { out.style.opacity = "1"; out.style.animation = "out .5s ease-out forwards"; }, 10);// mostra msg

    setTimeout(function () {
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
      scores[activePlayer] += roundScore;
      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

      if (runningQuizQuestion <= 5) {
        startQuiz();
      } else {
        fechaquiz();
        out.innerHTML = "Sem cartas de Quiz!";
        setTimeout(function () { out.style.opacity = "0"; }, 1000); //apaga msg
      }
    }, 1000);

  }

  else if (text === "-3") {
    out.innerHTML = "-3 Pontos!";
    setTimeout(function () { out.style.opacity = "1"; out.style.animation = "out .5s ease-out forwards"; }, 10);// mostra msg
    setTimeout(function () {
      roundScore -= 3;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
      scores[activePlayer] += roundScore;
      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
      setTimeout(function () { out.style.opacity = "0"; }, 1000); //apaga msg
      nextPlayer();
    }, 2000);
  }

  else if (text === "+2") {
    out.innerHTML = "+2 Pontos!";
    setTimeout(function () { out.style.opacity = "1"; out.style.animation = "out .5s ease-out forwards"; }, 10);// mostra msg
    setTimeout(function () {
      roundScore += 2;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
      scores[activePlayer] += roundScore;
      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
      setTimeout(function () { out.style.opacity = "0"; }, 1000); //apaga msg
      nextPlayer();
    }, 2000);

    //diceDOM.style.display = 'block';
    //diceDOM.textContent = 'DICE: ' + dice;

  }

  else if (text === "Passe") {
    out.innerHTML = "Passe a vez!";
    setTimeout(function () { out.style.opacity = "1"; out.style.animation = "out .5s ease-out forwards"; }, 10);// mostra msg
    setTimeout(function () {
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
      scores[activePlayer] += roundScore;
      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
      setTimeout(function () { out.style.opacity = "0"; }, 1000); //apaga msg
      nextPlayer();
    }, 2000);

  }

}

  function easeOut(t, b, c, d) {
    var ts = (t /= d) * t;
    var tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
  }

  drawRouletteWheel();