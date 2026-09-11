const startBtn = document.getElementById("startBtn");
const quizBox = document.getElementById("quizBox");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");

const questions = [
  {
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Computer Processing Unit",
      "Central Program Utility",
      "Control Processing Unit"
    ]
  },
  {
    question: "Which language is primarily used for web page styling?",
    correct_answer: "CSS",
    incorrect_answers: [
      "HTML",
      "Java",
      "Python"
    ]
  },
  {
    question: "Who is known as the Father of the Indian Constitution?",
    correct_answer: "B. R. Ambedkar",
    incorrect_answers: [
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "Sardar Patel"
    ]
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    correct_answer: "<a>",
    incorrect_answers: [
      "<link>",
      "<href>",
      "<url>"
    ]
  },
  {
    question: "What does RAM stand for?",
    correct_answer: "Random Access Memory",
    incorrect_answers: [
      "Read Access Memory",
      "Rapid Access Module",
      "Random Allocation Memory"
    ]
  },
  {
    question: "What is the capital of India?",
    correct_answer: "New Delhi",
    incorrect_answers: [
      "Mumbai",
      "Bengaluru",
      "Kolkata"
    ]
  },
  {
    question: "Which company developed JavaScript?",
    correct_answer: "Netscape",
    incorrect_answers: [
      "Microsoft",
      "Google",
      "IBM"
    ]
  },
  {
    question: "Which data structure follows the LIFO principle?",
    correct_answer: "Stack",
    incorrect_answers: [
      "Queue",
      "Array",
      "Linked List"
    ]
  },
  {
    question: "Who was the first Prime Minister of India?",
    correct_answer: "Jawaharlal Nehru",
    incorrect_answers: [
      "Rajendra Prasad",
      "Sardar Patel",
      "Indira Gandhi"
    ]
  },
  {
    question: "Which symbol is used for comments in JavaScript (single line)?",
    correct_answer: "//",
    incorrect_answers: [
      "/* */",
      "#",
      "<!-- -->"
    ]
  }
];

let currentQuestion = 0;
let score = 0;

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  startBtn.style.display = "none";
  quizBox.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  answersEl.innerHTML = "";

  const q = questions[currentQuestion];

  questionEl.innerHTML = q.question;

  let answers = [...q.incorrect_answers, q.correct_answer];

  answers.sort(() => Math.random() - 0.5);

  answers.forEach(answer => {
    const btn = document.createElement("button");

    btn.classList.add("answer-btn");
    btn.innerHTML = answer;

    btn.addEventListener("click", () => checkAnswer(answer));

    answersEl.appendChild(btn);
  });
}

function checkAnswer(selectedAnswer) {
  const q = questions[currentQuestion];

  if (selectedAnswer === q.correct_answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  quizBox.classList.add("hidden");

  resultEl.innerHTML = `
    Quiz Completed!<br>
    Your Score: ${score}/${questions.length}
  `;
}