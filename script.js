/* ---------------- Quiz Logic ---------------- */
const quizData = [
  { 
    question: "Which is the smallest continent in the world?", 
    options: ["Australia", "Europe", "Antarctica"], 
    answer: "Australia" 
  },
  { 
    question: "What is the national animal of India?", 
    options: ["Tiger", "Lion", "Elephant"], 
    answer: "Tiger" 
  },
  { 
    question: "Which gas do plants release during photosynthesis?", 
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen"], 
    answer: "Oxygen" 
  }
];

let index = 0, score = 0;

function loadQuestion() {
  if (index < quizData.length) {
    let q = quizData[index];
    document.getElementById("question").innerText = q.question;
    let opts = "";
    q.options.forEach(opt => {
      opts += `<label><input type="radio" name="answer" value="${opt}"> ${opt}</label><br>`;
    });
    document.getElementById("options").innerHTML = opts;
  }
}

function nextQuestion() {
  let selected = document.querySelector('input[name="answer"]:checked');
  if (selected && selected.value === quizData[index].answer) score++;
  index++;
  if (index < quizData.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-box").innerHTML =
      `<h3>Quiz Over! You scored ${score}/${quizData.length}</h3>`;
  }
}
loadQuestion();

/* ---------------- Carousel Logic ---------------- */
const images = [
  "https://picsum.photos/id/1015/500/300",
  "https://picsum.photos/id/1025/500/300",
  "https://picsum.photos/id/1035/500/300"
];
let imgIndex = 0;

function showImage() {
  document.getElementById("carousel-img").src = images[imgIndex];
}
function nextImage() {
  imgIndex = (imgIndex + 1) % images.length;
  showImage();
}
function prevImage() {
  imgIndex = (imgIndex - 1 + images.length) % images.length;
  showImage();
}



// API Fetch


function fetchJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" }
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").innerText = data.joke;
    });
}

// Init
window.onload = () => {
  updateCarousel();
  loadQuiz();
  fetchJoke();
};
