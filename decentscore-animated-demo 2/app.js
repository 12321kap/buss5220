const scenes = [...document.querySelectorAll(".scene")];
const navButtons = [...document.querySelectorAll("[data-jump]")];
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const playBtn = document.querySelector("#playBtn");
const progressFill = document.querySelector("#progressFill");
const speakerLabel = document.querySelector("#speakerLabel");
const timerLabel = document.querySelector("#timerLabel");

const speakers = [
  "Speaker 1 / Mikaila",
  "Speaker 1 / Mikaila",
  "Speaker 2",
  "Speaker 3",
  "Speaker 3",
  "Speaker 4",
  "Interactive dashboard handoff",
  "Speaker 5",
  "Speaker 6 / Wenjing Xu",
];

let current = 0;
let playing = false;
let playTimer = null;
let statusTimer = null;

function runDashboardStatus(sceneIndex) {
  clearInterval(statusTimer);
  const statusWord = document.querySelector(".status-word");
  if (!statusWord) return;
  if (sceneIndex !== 6) {
    statusWord.textContent = "Scanning";
    return;
  }
  const states = ["Scanning", "Comparing", "Risk found", "Fix drafted"];
  let step = 0;
  statusWord.textContent = states[step];
  statusTimer = setInterval(() => {
    step = (step + 1) % states.length;
    statusWord.textContent = states[step];
  }, 3000);
}

function showScene(index) {
  current = (index + scenes.length) % scenes.length;
  scenes.forEach((scene, i) => scene.classList.toggle("active", i === current));
  navButtons.forEach((button, i) => button.classList.toggle("active", i === current));
  progressFill.style.width = `${((current + 1) / scenes.length) * 100}%`;
  speakerLabel.textContent = speakers[current];
  timerLabel.textContent = `Scene ${current + 1} of ${scenes.length}`;
  window.location.hash = `scene-${current}`;
  runDashboardStatus(current);
}

function stopAutoPlay() {
  playing = false;
  playBtn.textContent = "Auto play";
  clearInterval(playTimer);
}

function startAutoPlay() {
  playing = true;
  playBtn.textContent = "Pause";
  playTimer = setInterval(() => showScene(current + 1), 10500);
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    stopAutoPlay();
    showScene(Number(button.dataset.jump));
  });
});

prevBtn.addEventListener("click", () => {
  stopAutoPlay();
  showScene(current - 1);
});

nextBtn.addEventListener("click", () => {
  stopAutoPlay();
  showScene(current + 1);
});

playBtn.addEventListener("click", () => {
  if (playing) stopAutoPlay();
  else startAutoPlay();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === " ") {
    event.preventDefault();
    stopAutoPlay();
    showScene(current + 1);
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    stopAutoPlay();
    showScene(current - 1);
  }
});

const hashMatch = window.location.hash.match(/scene-(\d+)/);
showScene(hashMatch ? Number(hashMatch[1]) : 0);
