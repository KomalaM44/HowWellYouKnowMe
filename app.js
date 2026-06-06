const defaultPlayers = ["Layla", "Sarah", "Jaya", "Hrithika", "Alia", "Paula", "Charvi", "Katelyn", "Mylana", "June", "Aditya", "Ashika"];

const sampleQuestions = [
  {
    question: "What is Ashika's favorite song right now?",
    answer: "Edit this answer",
    options: ["Edit this answer", "Song 2", "Song 3", "Song 4"],
  },
  {
    question: "Who is Ashika's favorite singer or band?",
    answer: "Edit this answer",
    options: ["Edit this answer", "Singer 2", "Singer 3", "Singer 4"],
  },
  {
    question: "What is Ashika's favorite hobby?",
    answer: "Edit this answer",
    options: ["Edit this answer", "Drawing", "Dancing", "Reading"],
  },
  {
    question: "What instrument does Ashika play or want to learn?",
    answer: "Edit this answer",
    options: ["Edit this answer", "Piano", "Guitar", "Violin"],
  },
  {
    question: "What is Ashika's favorite color?",
    answer: "Edit this answer",
    options: ["Edit this answer", "Pink", "Blue", "Purple"],
  },
  {
    question: "What is Ashika's favorite movie?",
    answer: "Edit this answer",
    options: ["Edit this answer", "Movie 2", "Movie 3", "Movie 4"],
  },
  {
    question: "What is Ashika's favorite TV show or YouTube channel?",
    answer: "Edit this answer",
    options: ["Edit this answer", "Show 2", "Channel 3", "Channel 4"],
  },
  {
    question: "What is Ashika's favorite book or book series?",
    answer: "Edit this answer",
    options: ["Edit this answer", "Book 2", "Book 3", "Book 4"],
  },
  {
    question: "What is Ashika's favorite school subject?",
    answer: "Edit this answer",
    options: ["Edit this answer", "Math", "Science", "Art"],
  },
  {
    question: "What is Ashika's least favorite school subject?",
    answer: "Edit this answer",
    options: ["Edit this answer", "Math", "Science", "History"],
  },
  {
    question: "What is Ashika's favorite snack?",
    answer: "Edit this answer",
    options: ["Edit this answer", "Chips", "Fruit", "Popcorn"],
  },
  {
    question: "What is Ashika's favorite dessert?",
    answer: "Edit this answer",
    options: ["Edit this answer", "Cake", "Ice cream", "Cookies"],
  },
  {
    question: "What is Ashika's favorite restaurant or fast food place?",
    answer: "Edit this answer",
    options: ["Edit this answer", "Restaurant 2", "Restaurant 3", "Restaurant 4"],
  },
  {
    question: "What sport or activity does Ashika like most?",
    answer: "Edit this answer",
    options: ["Edit this answer", "Soccer", "Swimming", "Dance"],
  },
  {
    question: "What is Ashika's favorite animal?",
    answer: "Edit this answer",
    options: ["Edit this answer", "Dog", "Cat", "Dolphin"],
  },
  {
    question: "If Ashika could travel anywhere, where would she go?",
    answer: "Edit this answer",
    options: ["Edit this answer", "Paris", "Hawaii", "Japan"],
  },
  {
    question: "What is Ashika's favorite thing to do with friends?",
    answer: "Edit this answer",
    options: ["Edit this answer", "Watch movies", "Play games", "Go shopping"],
  },
  {
    question: "What app or game does Ashika use or play the most?",
    answer: "Edit this answer",
    options: ["Edit this answer", "Roblox", "Minecraft", "YouTube"],
  },
  {
    question: "What is one thing Ashika is really good at?",
    answer: "Edit this answer",
    options: ["Edit this answer", "Singing", "Drawing", "Sports"],
  },
  {
    question: "What would Ashika choose?",
    answer: "Edit this answer",
    options: ["Beach day", "Movie night", "Mall trip", "Sleepover"],
  },
];

const movieSongQuestions = [
  { question: "Guess the movie from the pictures.", clue: "🦁 👑", answer: "The Lion King", options: ["The Lion King", "Jungle Book", "Madagascar", "Zootopia"] },
  { question: "Guess the movie from the pictures.", clue: "❄️ 👭 ⛄", answer: "Frozen", options: ["Frozen", "Brave", "Moana", "Tangled"] },
  { question: "Guess the movie from the pictures.", clue: "🧠 😊 😢 😡", answer: "Inside Out", options: ["Inside Out", "Soul", "Elemental", "Up"] },
  { question: "Guess the movie from the pictures.", clue: "🌊 ⛵ 🌺", answer: "Moana", options: ["Moana", "Lilo & Stitch", "The Little Mermaid", "Wish"] },
  { question: "Guess the movie from the pictures.", clue: "🏠 🦋 🎶", answer: "Encanto", options: ["Encanto", "Coco", "Trolls", "Wish"] },
  { question: "Guess the movie from the pictures.", clue: "👱‍♀️ 🗼 ✨", answer: "Tangled", options: ["Tangled", "Cinderella", "Brave", "Frozen"] },
  { question: "Guess the movie from the pictures.", clue: "🐠 🔍 🌊", answer: "Finding Nemo", options: ["Finding Nemo", "Finding Dory", "Shark Tale", "Luca"] },
  { question: "Guess the movie from the pictures.", clue: "🤠 🚀 🧸", answer: "Toy Story", options: ["Toy Story", "Lightyear", "The Lego Movie", "WALL-E"] },
  { question: "Guess the movie from the pictures.", clue: "🏠 🎈 🎈", answer: "Up", options: ["Up", "Home", "Inside Out", "Coco"] },
  { question: "Guess the movie from the pictures.", clue: "🎸 💀 🌼", answer: "Coco", options: ["Coco", "Encanto", "Soul", "The Book of Life"] },
  { question: "Guess the movie from the pictures.", clue: "🍌 👓 💛", answer: "Minions", options: ["Minions", "Despicable Me", "Sing", "The Bad Guys"] },
  { question: "Guess the movie from the pictures.", clue: "⚡ 🧙‍♂️ 🏰", answer: "Harry Potter", options: ["Harry Potter", "Percy Jackson", "Matilda", "Narnia"] },
  { question: "Guess the movie from the pictures.", clue: "🧜‍♀️ 🐠 🌊", answer: "The Little Mermaid", options: ["The Little Mermaid", "Moana", "Finding Nemo", "Luca"] },
  { question: "Guess the movie from the pictures.", clue: "🌹 🏰 🐺", answer: "Beauty and the Beast", options: ["Beauty and the Beast", "Cinderella", "Sleeping Beauty", "Maleficent"] },
  { question: "Guess the movie from the pictures.", clue: "🧞‍♂️ 🕌 🪄", answer: "Aladdin", options: ["Aladdin", "Wish", "Coco", "Mulan"] },
  { question: "Guess the movie from the pictures.", clue: "🍫 🎩 🏭", answer: "Wonka", options: ["Wonka", "Matilda", "The Lorax", "Paddington"] },
  { question: "Guess the movie from the pictures.", clue: "🍄 ⭐ 👨‍🔧", answer: "The Super Mario Bros. Movie", options: ["The Super Mario Bros. Movie", "Sonic the Hedgehog", "Wreck-It Ralph", "The Lego Movie"] },
  { question: "Guess the movie from the pictures.", clue: "🕷️ 🧑‍🎤 🏙️", answer: "Spider-Man", options: ["Spider-Man", "Batman", "The Flash", "Black Panther"] },
  { question: "Guess the movie from the pictures.", clue: "💗 👠 🏖️", answer: "Barbie", options: ["Barbie", "Clueless", "Legally Blonde", "Mean Girls"] },
  { question: "Guess the movie from the pictures.", clue: "🔥 💧 🌆", answer: "Elemental", options: ["Elemental", "Inside Out", "Soul", "WALL-E"] },
  { question: "Guess the song from the pictures.", clue: "👋 💃 ✨", answer: "Shake It Off", options: ["Shake It Off", "Dance Monkey", "Roar", "Happy"] },
  { question: "Guess the song from the pictures.", clue: "❄️ 🙌 👑", answer: "Let It Go", options: ["Let It Go", "Into the Unknown", "A Whole New World", "Reflection"] },
  { question: "Guess the song from the pictures.", clue: "🐯 🎤 🔊", answer: "Roar", options: ["Roar", "Firework", "Stronger", "Brave"] },
  { question: "Guess the song from the pictures.", clue: "🌸 💪 💐", answer: "Flowers", options: ["Flowers", "Lavender Haze", "Watermelon Sugar", "Golden"] },
  { question: "Guess the song from the pictures.", clue: "☀️ 💔 😎", answer: "Cruel Summer", options: ["Cruel Summer", "Summer", "Anti-Hero", "Blank Space"] },
  { question: "Guess the song from the pictures.", clue: "🚫 🦸‍♀️ 🪞", answer: "Anti-Hero", options: ["Anti-Hero", "Bad Blood", "Hero", "Unstoppable"] },
  { question: "Guess the song from the pictures.", clue: "🐒 💃 🎵", answer: "Dance Monkey", options: ["Dance Monkey", "Shake It Off", "Monkey Wrench", "Uptown Funk"] },
  { question: "Guess the song from the pictures.", clue: "🎆 🌃 ✨", answer: "Firework", options: ["Firework", "Roar", "Dynamite", "Counting Stars"] },
  { question: "Guess the song from the pictures.", clue: "😀 👏 ☀️", answer: "Happy", options: ["Happy", "Good as Hell", "Best Day Ever", "Smile"] },
  { question: "Guess the song from the pictures.", clue: "💡 🚗 🌃", answer: "Blinding Lights", options: ["Blinding Lights", "Lights", "Levitating", "As It Was"] },
];

const state = {
  gameTitle: "How Well Do You Know Ashika?",
  players: [],
  questions: [],
  currentQuestion: 0,
  editingQuestionIndex: null,
  revealed: false,
  awardedThisRound: new Set(),
};

const els = {
  setupView: document.querySelector("#setupView"),
  gameView: document.querySelector("#gameView"),
  winnerView: document.querySelector("#winnerView"),
  gameTitle: document.querySelector("#gameTitle"),
  roundLabel: document.querySelector("#roundLabel"),
  playerForm: document.querySelector("#playerForm"),
  playerName: document.querySelector("#playerName"),
  playerList: document.querySelector("#playerList"),
  questionForm: document.querySelector("#questionForm"),
  questionText: document.querySelector("#questionText"),
  answerText: document.querySelector("#answerText"),
  optionInputs: [...document.querySelectorAll(".optionInput")],
  questionSubmitBtn: document.querySelector("#questionSubmitBtn"),
  cancelEditBtn: document.querySelector("#cancelEditBtn"),
  questionList: document.querySelector("#questionList"),
  loadSampleBtn: document.querySelector("#loadSampleBtn"),
  loadMovieSongBtn: document.querySelector("#loadMovieSongBtn"),
  loadPlayersBtn: document.querySelector("#loadPlayersBtn"),
  shareSetupBtn: document.querySelector("#shareSetupBtn"),
  shareStatus: document.querySelector("#shareStatus"),
  resetBtn: document.querySelector("#resetBtn"),
  fullscreenBtn: document.querySelector("#fullscreenBtn"),
  startBtn: document.querySelector("#startBtn"),
  scoreboard: document.querySelector("#scoreboard"),
  questionCounter: document.querySelector("#questionCounter"),
  pointsLabel: document.querySelector("#pointsLabel"),
  pictureClue: document.querySelector("#pictureClue"),
  currentQuestion: document.querySelector("#currentQuestion"),
  answerGrid: document.querySelector("#answerGrid"),
  answerReveal: document.querySelector("#answerReveal"),
  awardGrid: document.querySelector("#awardGrid"),
  backBtn: document.querySelector("#backBtn"),
  revealBtn: document.querySelector("#revealBtn"),
  gameFullscreenBtn: document.querySelector("#gameFullscreenBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  winnerTitle: document.querySelector("#winnerTitle"),
  finalScores: document.querySelector("#finalScores"),
  playAgainBtn: document.querySelector("#playAgainBtn"),
  editGameBtn: document.querySelector("#editGameBtn"),
};

function saveState() {
  localStorage.setItem(
    "ashika-know-me-game",
    JSON.stringify({
      gameTitle: state.gameTitle,
      players: state.players,
      questions: state.questions,
    }),
  );
}

function cloneQuestions(questions) {
  return questions.map((item) => ({
    ...item,
    options: [...item.options],
  }));
}

function loadDefaultPlayers() {
  state.players = defaultPlayers.map((name) => ({ name, score: 0 }));
}

function encodeSetupPayload(payload) {
  const json = JSON.stringify(payload);
  const bytes = new TextEncoder().encode(json);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

function decodeSetupPayload(encoded) {
  const padded = encoded.replaceAll("-", "+").replaceAll("_", "/").padEnd(Math.ceil(encoded.length / 4) * 4, "=");
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return JSON.parse(new TextDecoder().decode(bytes));
}

function loadSetupFromUrl() {
  const match = window.location.hash.match(/^#setup=(.+)$/);
  if (!match) return false;

  try {
    const parsed = decodeSetupPayload(match[1]);
    state.gameTitle = String(parsed.gameTitle || "How Well Do You Know Ashika?");
    state.players = Array.isArray(parsed.players) ? parsed.players : [];
    state.questions = Array.isArray(parsed.questions) ? parsed.questions : cloneQuestions(sampleQuestions);
    state.players = state.players.map((player) => ({
      name: String(player.name ?? "").trim() || "Player",
      score: 0,
    }));
    saveState();
    return true;
  } catch {
    return false;
  }
}

function loadState() {
  if (loadSetupFromUrl()) return;

  const saved = localStorage.getItem("ashika-know-me-game");
  if (!saved) {
    loadDefaultPlayers();
    state.questions = cloneQuestions(sampleQuestions);
    return;
  }

  try {
    const parsed = JSON.parse(saved);
    state.gameTitle = String(parsed.gameTitle || "How Well Do You Know Ashika?");
    state.players = Array.isArray(parsed.players) ? parsed.players : [];
    state.questions = Array.isArray(parsed.questions) ? parsed.questions : cloneQuestions(sampleQuestions);
  } catch {
    loadDefaultPlayers();
    state.questions = cloneQuestions(sampleQuestions);
  }
}

function showView(viewName) {
  [els.setupView, els.gameView, els.winnerView].forEach((view) => view.classList.remove("view-active"));
  els[viewName].classList.add("view-active");
}

function renderSetup() {
  els.gameTitle.textContent = state.gameTitle;
  els.roundLabel.textContent = "Setup";
  els.playerList.innerHTML = "";
  els.questionList.innerHTML = "";
  const isEditing = state.editingQuestionIndex !== null;
  els.questionSubmitBtn.textContent = isEditing ? "Save Question" : "Add Question";
  els.cancelEditBtn.classList.toggle("hidden", !isEditing);

  state.players.forEach((player, index) => {
    const row = document.createElement("div");
    row.className = "chip";
    const name = document.createElement("span");
    name.textContent = player.name;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.setAttribute("aria-label", `Remove ${player.name}`);
    remove.textContent = "Remove";
    remove.addEventListener("click", () => {
      state.players.splice(index, 1);
      saveState();
      renderSetup();
    });
    row.append(name, remove);
    els.playerList.append(row);
  });

  state.questions.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "question-row";
    const text = document.createElement("div");
    const controls = document.createElement("div");
    const question = document.createElement("strong");
    const answer = document.createElement("span");
    const edit = document.createElement("button");
    const remove = document.createElement("button");
    controls.className = "row-actions";
    question.textContent = `${index + 1}. ${item.question}`;
    answer.textContent = `Answer: ${item.answer}`;
    edit.type = "button";
    edit.setAttribute("aria-label", `Edit question ${index + 1}`);
    edit.textContent = "Edit";
    edit.addEventListener("click", () => editQuestion(index));
    remove.type = "button";
    remove.setAttribute("aria-label", `Remove question ${index + 1}`);
    remove.textContent = "Remove";
    remove.addEventListener("click", () => {
      state.questions.splice(index, 1);
      if (state.editingQuestionIndex === index) {
        clearQuestionForm();
      } else if (state.editingQuestionIndex !== null && state.editingQuestionIndex > index) {
        state.editingQuestionIndex -= 1;
      }
      saveState();
      renderSetup();
    });
    text.append(question, answer);
    controls.append(edit, remove);
    row.append(text, controls);
    els.questionList.append(row);
  });

  els.startBtn.disabled = state.players.length === 0 || state.questions.length === 0;
}

function normalizeQuestionForm() {
  const question = els.questionText.value.trim();
  const answer = els.answerText.value.trim();
  const options = els.optionInputs.map((input) => input.value.trim()).filter(Boolean);

  if (!question || !answer) return null;
  if (!options.some((option) => option.toLowerCase() === answer.toLowerCase())) {
    options.unshift(answer);
  }

  return {
    question,
    answer,
    options: options.slice(0, 4),
  };
}

function editQuestion(index) {
  const item = state.questions[index];
  if (!item) return;

  state.editingQuestionIndex = index;
  els.questionText.value = item.question;
  els.answerText.value = item.answer;
  els.optionInputs.forEach((input, optionIndex) => {
    input.value = item.options[optionIndex] ?? "";
  });
  els.questionText.focus();
  renderSetup();
}

function clearQuestionForm() {
  state.editingQuestionIndex = null;
  els.questionForm.reset();
}

async function copySetupLink() {
  const payload = {
    gameTitle: state.gameTitle,
    players: state.players.map((player) => ({ name: player.name, score: 0 })),
    questions: state.questions,
  };
  const encoded = encodeSetupPayload(payload);
  const url = `${window.location.origin}${window.location.pathname}#setup=${encoded}`;

  try {
    await navigator.clipboard.writeText(url);
    els.shareStatus.textContent = "Setup link copied. Open it on the iPad to load these questions.";
  } catch {
    els.shareStatus.textContent = url;
  }
}

function renderScoreboard() {
  els.scoreboard.innerHTML = "";
  [...state.players]
    .sort((a, b) => b.score - a.score)
    .forEach((player) => {
      const tile = document.createElement("div");
      tile.className = "score-tile";
      const name = document.createElement("span");
      const score = document.createElement("span");
      name.className = "score-name";
      score.className = "score-value";
      name.textContent = player.name;
      score.textContent = player.score;
      tile.append(name, score);
      els.scoreboard.append(tile);
    });
}

function renderQuestion() {
  const item = state.questions[state.currentQuestion];
  const total = state.questions.length;
  els.gameTitle.textContent = state.gameTitle;
  els.roundLabel.textContent = `Question ${state.currentQuestion + 1} of ${total}`;
  els.questionCounter.textContent = `Question ${state.currentQuestion + 1}`;
  els.pointsLabel.textContent = "1 point";
  els.pictureClue.textContent = item.clue || "";
  els.pictureClue.classList.toggle("hidden", !item.clue);
  els.currentQuestion.textContent = item.question;
  els.answerGrid.innerHTML = "";
  els.answerReveal.textContent = state.revealed ? `Answer: ${item.answer}` : "";

  if (!item.clue) {
    item.options.forEach((option, index) => {
      const choice = document.createElement("div");
      const isCorrect = state.revealed && option.trim().toLowerCase() === item.answer.trim().toLowerCase();
      choice.className = `answer-choice${isCorrect ? " correct" : ""}`;
      choice.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
      els.answerGrid.append(choice);
    });
  }

  els.awardGrid.innerHTML = "";
  state.players.forEach((player, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `award-button${state.awardedThisRound.has(index) ? " awarded" : ""}`;
    button.textContent = state.awardedThisRound.has(index) ? `${player.name} +1` : player.name;
    button.addEventListener("click", () => toggleAward(index));
    els.awardGrid.append(button);
  });

  els.revealBtn.disabled = state.revealed;
  els.nextBtn.textContent = state.currentQuestion === state.questions.length - 1 ? "Finish" : "Next";
  renderScoreboard();
}

function toggleAward(playerIndex) {
  const player = state.players[playerIndex];
  if (!player) return;

  if (state.awardedThisRound.has(playerIndex)) {
    player.score = Math.max(0, player.score - 1);
    state.awardedThisRound.delete(playerIndex);
  } else {
    player.score += 1;
    state.awardedThisRound.add(playerIndex);
  }

  saveState();
  renderQuestion();
}

function startGame() {
  state.players = state.players.map((player) => ({ ...player, score: 0 }));
  state.currentQuestion = 0;
  state.revealed = false;
  state.awardedThisRound = new Set();
  showView("gameView");
  renderQuestion();
}

function showWinner() {
  const sorted = [...state.players].sort((a, b) => b.score - a.score);
  const topScore = sorted[0]?.score ?? 0;
  const winners = sorted.filter((player) => player.score === topScore);
  els.roundLabel.textContent = "Winner";
  els.winnerTitle.textContent =
    winners.length > 1 ? `${winners.map((player) => player.name).join(" & ")} tie!` : `${winners[0].name} wins!`;
  els.finalScores.innerHTML = "";
  sorted.forEach((player) => {
    const row = document.createElement("div");
    row.className = "final-score-row";
    const name = document.createElement("span");
    const score = document.createElement("span");
    name.textContent = player.name;
    score.textContent = player.score;
    row.append(name, score);
    els.finalScores.append(row);
  });
  showView("winnerView");
}

async function enterFullscreen() {
  if (document.fullscreenElement) {
    await document.exitFullscreen();
    return;
  }

  const target = document.documentElement;
  if (target.requestFullscreen) {
    await target.requestFullscreen();
  }
}

function resetAll() {
  state.players = [];
  state.gameTitle = "How Well Do You Know Ashika?";
  state.questions = cloneQuestions(sampleQuestions);
  state.currentQuestion = 0;
  state.editingQuestionIndex = null;
  state.revealed = false;
  state.awardedThisRound = new Set();
  els.questionForm.reset();
  saveState();
  renderSetup();
}

els.playerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = els.playerName.value.trim();
  if (!name) return;
  state.players.push({ name, score: 0 });
  els.playerName.value = "";
  saveState();
  renderSetup();
});

els.questionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formQuestion = normalizeQuestionForm();
  if (!formQuestion) return;

  if (state.editingQuestionIndex === null) {
    state.questions.push(formQuestion);
  } else {
    const existing = state.questions[state.editingQuestionIndex];
    if (existing?.clue) {
      formQuestion.clue = existing.clue;
    }
    state.questions[state.editingQuestionIndex] = formQuestion;
  }

  clearQuestionForm();
  saveState();
  renderSetup();
});

els.cancelEditBtn.addEventListener("click", () => {
  clearQuestionForm();
  renderSetup();
});

els.loadSampleBtn.addEventListener("click", () => {
  state.gameTitle = "How Well Do You Know Ashika?";
  state.questions = cloneQuestions(sampleQuestions);
  clearQuestionForm();
  saveState();
  renderSetup();
});

els.loadMovieSongBtn.addEventListener("click", () => {
  state.gameTitle = "Guess the Movie or Song";
  state.questions = cloneQuestions(movieSongQuestions);
  clearQuestionForm();
  saveState();
  renderSetup();
});

els.loadPlayersBtn.addEventListener("click", () => {
  loadDefaultPlayers();
  saveState();
  renderSetup();
});

els.shareSetupBtn.addEventListener("click", copySetupLink);
els.resetBtn.addEventListener("click", resetAll);
els.fullscreenBtn.addEventListener("click", enterFullscreen);
els.gameFullscreenBtn.addEventListener("click", enterFullscreen);
els.startBtn.addEventListener("click", startGame);
els.backBtn.addEventListener("click", () => {
  showView("setupView");
  renderSetup();
});

els.revealBtn.addEventListener("click", () => {
  state.revealed = true;
  renderQuestion();
});

els.nextBtn.addEventListener("click", () => {
  if (state.currentQuestion >= state.questions.length - 1) {
    showWinner();
    return;
  }
  state.currentQuestion += 1;
  state.revealed = false;
  state.awardedThisRound = new Set();
  renderQuestion();
});

els.playAgainBtn.addEventListener("click", startGame);
els.editGameBtn.addEventListener("click", () => {
  showView("setupView");
  renderSetup();
});

loadState();
renderSetup();
