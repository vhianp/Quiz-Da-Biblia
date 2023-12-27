const quizData = [
  {
      question: "Quantos livros tem a Bíblia?",
      options: ["66", "72", "80", "54"],
      correctAnswer: "66"
  },
  {
      question: "Quem foi o primeiro homem criado por Deus?",
      options: ["Abel", "Moisés", "Adão", "José"],
      correctAnswer: "Adão"
  },
  {
      question: "Qual é o último livro do Antigo Testamento?",
      options: ["Isaías", "Malaquias", "Gênesis", "Provérbios"],
      correctAnswer: "Malaquias"
  },
  {
      question: "Quem foi o profeta que desafiou os profetas de Baal no Monte Carmelo?",
      options: ["Isaías", "Jeremias", "Elias", "Eliseu"],
      correctAnswer: "Elias"
  },
  {
      question: "Qual discípulo traiu Jesus?",
      options: ["Pedro", "João", "Judas", "André"],
      correctAnswer: "Judas"
  },
  {
      question: "Quem escreveu a maior parte dos livros do Novo Testamento?",
      options: ["Pedro", "João", "Paulo", "Tiago"],
      correctAnswer: "Paulo"
  },
  {
      question: "Quem era a esposa de Abraão?",
      options: ["Rebeca", "Raquel", "Sara", "Lea"],
      correctAnswer: "Sara"
  },
  {
      question: "Qual é o livro que vem antes de Levítico no Antigo Testamento?",
      options: ["Êxodo", "Números", "Deuteronômio", "Gênesis"],
      correctAnswer: "Êxodo"
  },
  {
      question: "Quem enfrentou o gigante Golias?",
      options: ["Saul", "Davi", "Jonas", "Josué"],
      correctAnswer: "Davi"
  },
  {
      question: "Qual era a profissão de Mateus antes de se tornar um discípulo de Jesus?",
      options: ["Pescador", "Cobrador de impostos", "Carpinteiro", "Médico"],
      correctAnswer: "Cobrador de impostos"
  },
  {
      question: "Qual é a primeira palavra da Bíblia?",
      options: ["No princípio", "Jesus", "Aleluia", "Gênesis"],
      correctAnswer: "No princípio"
  },
  {
      question: "Quem foi chamado de 'o amigo de Deus'?",
      options: ["Moisés", "Abraão", "José", "Isaías"],
      correctAnswer: "Abraão"
  },
  {
      question: "Qual era a profissão de Paulo antes de sua conversão?",
      options: ["Carpinteiro", "Pescador", "Doutor", "Tecelão"],
      correctAnswer: "Tecelão"
  },
  {
      question: "Quem escreveu o livro de Apocalipse?",
      options: ["Paulo", "Pedro", "João", "Tiago"],
      correctAnswer: "João"
  },
  {
      question: "Qual foi o milagre de Jesus que envolveu a multiplicação dos pães e peixes?",
      options: ["Alimentação dos 5000", "Andar sobre a água", "Ressurreição de Lázaro", "Cura do cego Bartimeu"],
      correctAnswer: "Alimentação dos 5000"
  },
  {
      question: "Quem era conhecido como 'o homem segundo o coração de Deus'?",
      options: ["Moisés", "José", "Davi", "Salomão"],
      correctAnswer: "Davi"
  },
  {
      question: "Qual era o nome da esposa de Isaque?",
      options: ["Lea", "Raquel", "Sara", "Rebeca"],
      correctAnswer: "Rebeca"
  },
  {
      question: "Quem foi o profeta que escreveu o livro de Daniel?",
      options: ["Daniel", "Ezequiel", "Isaías", "Jeremias"],
      correctAnswer: "Daniel"
  },
  {
      question: "Quem foi o primeiro rei de Israel?",
      options: ["Saul", "Davi", "Salomão", "Jeroboão"],
      correctAnswer: "Saul"
  },
  {
      question: "Qual discípulo negou Jesus três vezes?",
      options: ["Pedro", "João", "Tiago", "André"],
      correctAnswer: "Pedro"
  },
  {
      question: "Quem foi o profeta que teve um ministério durante o reinado de Acabe em Israel?",
      options: ["Eliseu", "Isaías", "Jeremias", "Miquéias"],
      correctAnswer: "Elias"
  },
  {
      question: "Qual é o último livro da Bíblia?",
      options: ["Apocalipse", "Revelação", "Daniel", "Isaías"],
      correctAnswer: "Apocalipse"
  },
  {
      question: "Quem foi o líder que sucedeu Moisés e conduziu os israelitas à Terra Prometida?",
      options: ["Josué", "Caleb", "Arão", "Gideão"],
      correctAnswer: "Josué"
  }
  // Adicione mais perguntas conforme necessário
];

let currentQuestion = 0;
let score = 0;
let ranking = [];

document.addEventListener('DOMContentLoaded', function () {
  loadQuestion();

  document.getElementById('submit-btn').addEventListener('click', submitAnswer);
});

function loadQuestion() {
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const resultElement = document.getElementById('result');
  const correctAnswerElement = document.getElementById('correct-answer');

  correctAnswerElement.style.display = 'none';

  if (currentQuestion < quizData.length) {
      const currentQuizData = quizData[currentQuestion];

      questionElement.textContent = currentQuizData.question;
      optionsElement.innerHTML = '';

      currentQuizData.options.forEach((option, index) => {
          const button = document.createElement('button');
          button.textContent = option;
          button.addEventListener('click', () => checkAnswer(option));
          optionsElement.appendChild(button);
      });

      resultElement.textContent = '';
  } else {
      showResult();
      showRanking();
  }
}

function checkAnswer(userAnswer) {
  const currentQuizData = quizData[currentQuestion];

  const resultElement = document.getElementById('result');
  const correctAnswerElement = document.getElementById('correct-answer');

  if (currentQuizData) {
      if (userAnswer === currentQuizData.correctAnswer) {
          score++;
          resultElement.textContent = 'Resposta correta!';
      } else {
          resultElement.textContent = 'Resposta incorreta!';
          correctAnswerElement.textContent = `A resposta correta é: ${currentQuizData.correctAnswer}`;
          correctAnswerElement.style.display = 'block';
      }
  }

  currentQuestion++;
  loadQuestion();
}

function showResult() {
  const resultElement = document.getElementById('result');
  resultElement.textContent = `Você acertou ${score} de ${quizData.length} perguntas.`;
}

function showRanking() {
  const rankingContainer = document.getElementById('ranking-container');
  const rankingList = document.getElementById('ranking-list');

  ranking.push(score);

  ranking.sort((a, b) => b - a);

  rankingList.innerHTML = '';
  ranking.forEach((score, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `#${index + 1}: ${score} ponto(s)`;
      rankingList.appendChild(listItem);
  });

  rankingContainer.style.display = 'block';
}

function submitAnswer() {
  const selectedOption = document.querySelector('button:focus');
  if (selectedOption) {
      const userAnswer = selectedOption.textContent;
      checkAnswer(userAnswer);
  }
}
