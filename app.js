// Novengl Trainer — categories, flashcards, quiz, typing minigame

// --- LEXICON (category-tagged) ---
const LEXICON = [
  // core
  {eng:"I", nov:"miu", pos:"pronoun", category:"core"},
  {eng:"you", nov:"sai", pos:"pronoun", category:"core"},
  {eng:"he", nov:"hen", pos:"pronoun", category:"core"},
  {eng:"she", nov:"sha", pos:"pronoun", category:"core"},
  {eng:"we", nov:"nau", pos:"pronoun", category:"core"},
  {eng:"they", nov:"dai", pos:"pronoun", category:"core"},
  {eng:"this", nov:"dis", pos:"det", category:"core"},
  {eng:"that", nov:"dat", pos:"det", category:"core"},
  {eng:"here", nov:"hiren", pos:"adv", category:"core"},
  {eng:"there", nov:"deren", pos:"adv", category:"core"},
  {eng:"yes", nov:"ya", pos:"interj", category:"core"},
  {eng:"no", nov:"na", pos:"interj", category:"core"},
  {eng:"and", nov:"en", pos:"conj", category:"core"},
  {eng:"but", nov:"vra", pos:"conj", category:"core"},
  {eng:"or", nov:"orun", pos:"conj", category:"core"},
  {eng:"because", nov:"kosaen", pos:"conj", category:"core"},
  {eng:"if", nov:"ifa", pos:"conj", category:"core"},
  {eng:"the", nov:"lo", pos:"article", category:"core"},
  {eng:"a", nov:"un", pos:"article", category:"core"},
  {eng:"is", nov:"es", pos:"verb", category:"core"},
  {eng:"have", nov:"kren", pos:"verb", category:"core"},
  {eng:"do", nov:"tal", pos:"verb", category:"core"},
  {eng:"go", nov:"voro", pos:"verb", category:"core"},
  {eng:"come", nov:"mela", pos:"verb", category:"core"},
  {eng:"see", nov:"spek", pos:"verb", category:"core"},
  {eng:"say", nov:"lore", pos:"verb", category:"core"},
  {eng:"want", nov:"desi", pos:"verb", category:"core"},
  {eng:"can", nov:"mogi", pos:"verb", category:"core"},
  {eng:"need", nov:"nevi", pos:"verb", category:"core"},
  {eng:"what", nov:"kwo", pos:"qword", category:"core"},
  {eng:"who", nov:"khen", pos:"qword", category:"core"},
  {eng:"where", nov:"loka", pos:"qword", category:"core"},
  {eng:"when", nov:"tima", pos:"qword", category:"core"},
  {eng:"why", nov:"kosa", pos:"qword", category:"core"},
  {eng:"how", nov:"koma", pos:"qword", category:"core"},

  // people
  {eng:"person", nov:"huma", pos:"noun", category:"people"},
  {eng:"man", nov:"humen", pos:"noun", category:"people"},
  {eng:"woman", nov:"humae", pos:"noun", category:"people"},
  {eng:"child", nov:"kida", pos:"noun", category:"people"},
  {eng:"friend", nov:"felo", pos:"noun", category:"people"},
  {eng:"family", nov:"famli", pos:"noun", category:"people"},
  {eng:"mother", nov:"mara", pos:"noun", category:"people"},
  {eng:"father", nov:"fara", pos:"noun", category:"people"},
  {eng:"teacher", nov:"leron", pos:"noun", category:"people"},
  {eng:"student", nov:"studan", pos:"noun", category:"people"},

  // home
  {eng:"house", nov:"brin", pos:"noun", category:"home"},
  {eng:"home", nov:"domi", pos:"noun", category:"home"},
  {eng:"room", nov:"cham", pos:"noun", category:"home"},
  {eng:"door", nov:"dora", pos:"noun", category:"home"},
  {eng:"window", nov:"fenra", pos:"noun", category:"home"},
  {eng:"kitchen", nov:"kucha", pos:"noun", category:"home"},
  {eng:"bathroom", nov:"lav", pos:"noun", category:"home"},
  {eng:"bed", nov:"bena", pos:"noun", category:"home"},
  {eng:"table", nov:"mesa", pos:"noun", category:"home"},
  {eng:"chair", nov:"seda", pos:"noun", category:"home"},

  // food
  {eng:"food", nov:"menga", pos:"noun", category:"food"},
  {eng:"water", nov:"aqua", pos:"noun", category:"food"},
  {eng:"bread", nov:"pana", pos:"noun", category:"food"},
  {eng:"rice", nov:"risa", pos:"noun", category:"food"},
  {eng:"meat", nov:"karn", pos:"noun", category:"food"},
  {eng:"fruit", nov:"fruta", pos:"noun", category:"food"},
  {eng:"vegetable", nov:"vega", pos:"noun", category:"food"},
  {eng:"apple", nov:"apla", pos:"noun", category:"food"},
  {eng:"milk", nov:"laka", pos:"noun", category:"food"},
  {eng:"coffee", nov:"kofa", pos:"noun", category:"food"},
  {eng:"eat", nov:"mang", pos:"verb", category:"food"},
  {eng:"drink", nov:"sorv", pos:"verb", category:"food"},

  // travel
  {eng:"travel", nov:"viaja", pos:"verb", category:"travel"},
  {eng:"trip", nov:"viajan", pos:"noun", category:"travel"},
  {eng:"car", nov:"auto", pos:"noun", category:"travel"},
  {eng:"bus", nov:"busa", pos:"noun", category:"travel"},
  {eng:"train", nov:"trena", pos:"noun", category:"travel"},
  {eng:"plane", nov:"avion", pos:"noun", category:"travel"},
  {eng:"ticket", nov:"bila", pos:"noun", category:"travel"},
  {eng:"hotel", nov:"hotela", pos:"noun", category:"travel"},
  {eng:"left", nov:"leva", pos:"adv", category:"travel"},
  {eng:"right", nov:"dexa", pos:"adv", category:"travel"},

  // time
  {eng:"today", nov:"daiya", pos:"adv", category:"time"},
  {eng:"yesterday", nov:"yesta", pos:"adv", category:"time"},
  {eng:"tomorrow", nov:"toma", pos:"adv", category:"time"},
  {eng:"morning", nov:"morn", pos:"noun", category:"time"},
  {eng:"evening", nov:"evna", pos:"noun", category:"time"},
  {eng:"night", nov:"nigt", pos:"noun", category:"time"},
  {eng:"now", nov:"nuna", pos:"adv", category:"time"},
  {eng:"later", nov:"lata", pos:"adv", category:"time"},
  {eng:"always", nov:"alwe", pos:"adv", category:"time"},
  {eng:"never", nov:"neva", pos:"adv", category:"time"},

  // emotions
  {eng:"love", nov:"amur", pos:"noun", category:"emotions"},
  {eng:"to love", nov:"amura", pos:"verb", category:"emotions"},
  {eng:"like", nov:"gusta", pos:"verb", category:"emotions"},
  {eng:"hate", nov:"odina", pos:"verb", category:"emotions"},
  {eng:"happy", nov:"brena", pos:"adj", category:"emotions"},
  {eng:"sad", nov:"trista", pos:"adj", category:"emotions"},
  {eng:"angry", nov:"irita", pos:"adj", category:"emotions"},
  {eng:"tired", nov:"fata", pos:"adj", category:"emotions"},

  // nature
  {eng:"sun", nov:"suna", pos:"noun", category:"nature"},
  {eng:"moon", nov:"luna", pos:"noun", category:"nature"},
  {eng:"star", nov:"stela", pos:"noun", category:"nature"},
  {eng:"tree", nov:"arba", pos:"noun", category:"nature"},
  {eng:"flower", nov:"flora", pos:"noun", category:"nature"},
  {eng:"rain", nov:"pluva", pos:"noun", category:"nature"},
  {eng:"snow", nov:"neva", pos:"noun", category:"nature"},
  {eng:"wind", nov:"venta", pos:"noun", category:"nature"},

  // school_work
  {eng:"school", nov:"skola", pos:"noun", category:"school_work"},
  {eng:"class", nov:"klasa", pos:"noun", category:"school_work"},
  {eng:"lesson", nov:"leksa", pos:"noun", category:"school_work"},
  {eng:"book", nov:"libra", pos:"noun", category:"school_work"},
  {eng:"pen", nov:"pena", pos:"noun", category:"school_work"},
  {eng:"paper", nov:"papra", pos:"noun", category:"school_work"},
  {eng:"job", nov:"labra", pos:"noun", category:"school_work"},
  {eng:"money", nov:"moni", pos:"noun", category:"school_work"},

  // verbs_actions
  {eng:"walk", nov:"marcha", pos:"verb", category:"verbs_actions"},
  {eng:"run", nov:"kura", pos:"verb", category:"verbs_actions"},
  {eng:"sit", nov:"sedaen", pos:"verb", category:"verbs_actions"},
  {eng:"stand", nov:"stada", pos:"verb", category:"verbs_actions"},
  {eng:"sleep", nov:"dorma", pos:"verb", category:"verbs_actions"},
  {eng:"open", nov:"opra", pos:"verb", category:"verbs_actions"},
  {eng:"close", nov:"kluda", pos:"verb", category:"verbs_actions"},
  {eng:"help", nov:"ajuda", pos:"verb", category:"verbs_actions"},
  {eng:"use", nov:"usa", pos:"verb", category:"verbs_actions"},
  {eng:"play", nov:"luda", pos:"verb", category:"verbs_actions"},

  // verbs_speech
  {eng:"speak", nov:"parla", pos:"verb", category:"verbs_speech"},
  {eng:"listen", nov:"harn", pos:"verb", category:"verbs_speech"},
  {eng:"ask", nov:"kosta", pos:"verb", category:"verbs_speech"},
  {eng:"answer", nov:"respa", pos:"verb", category:"verbs_speech"},
  {eng:"think", nov:"pensa", pos:"verb", category:"verbs_speech"},
  {eng:"remember", nov:"memra", pos:"verb", category:"verbs_speech"},
  {eng:"understand", nov:"kompre", pos:"verb", category:"verbs_speech"},
  {eng:"believe", nov:"krede", pos:"verb", category:"verbs_speech"},

  // adjectives_basic
  {eng:"good", nov:"bren", pos:"adj", category:"adjectives_basic"},
  {eng:"bad", nov:"neth", pos:"adj", category:"adjectives_basic"},
  {eng:"big", nov:"gros", pos:"adj", category:"adjectives_basic"},
  {eng:"small", nov:"minu", pos:"adj", category:"adjectives_basic"},
  {eng:"new", nov:"nova", pos:"adj", category:"adjectives_basic"},
  {eng:"old", nov:"veta", pos:"adj", category:"adjectives_basic"},
  {eng:"easy", nov:"fasil", pos:"adj", category:"adjectives_basic"},
  {eng:"difficult", nov:"difik", pos:"adj", category:"adjectives_basic"},

  // phrases_common
  {eng:"hello", nov:"helo", pos:"phrase", category:"phrases_common"},
  {eng:"good morning", nov:"bren morn", pos:"phrase", category:"phrases_common"},
  {eng:"good night", nov:"bren nigt", pos:"phrase", category:"phrases_common"},
  {eng:"how are you?", nov:"koma es sai?", pos:"phrase", category:"phrases_common"},
  {eng:"I am fine", nov:"miu es bren", pos:"phrase", category:"phrases_common"},
  {eng:"thank you", nov:"thara", pos:"phrase", category:"phrases_common"},
  {eng:"please", nov:"plisa", pos:"phrase", category:"phrases_common"},
  {eng:"sorry", nov:"sori", pos:"phrase", category:"phrases_common"}
];

const STORAGE_KEY = "novengl_progress_v3";
const ALL_WORDS = LEXICON.slice();

// --- STATE ---
let state = {
  deck: [],
  settings: {audio:true}
};

function saveState(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
function loadState(){
  const raw = localStorage.getItem(STORAGE_KEY);
  if(raw){
    try{ state = JSON.parse(raw); }catch(e){ console.warn(e); }
  }
  if(!state.deck || state.deck.length !== ALL_WORDS.length){
    state.deck = ALL_WORDS.map((w,i)=>({idx:i,nextReview:0,interval:0,correct:0}));
    saveState();
  }
}
loadState();

// --- CATEGORY HELPERS ---
function getActiveCategory(){
  const sel = document.getElementById("category-select");
  if(!sel) return "all";
  return sel.value || "all";
}
function wordsForCategory(cat){
  if(cat==="all") return ALL_WORDS;
  return ALL_WORDS.filter(w=>w.category===cat);
}
function indicesForCategory(cat){
  if(cat==="all") return state.deck.map((_,i)=>i);
  const allowed = new Set(wordsForCategory(cat).map(w=>ALL_WORDS.indexOf(w)));
  return state.deck.map((_,i)=>i).filter(i=>allowed.has(i));
}

// --- NAVIGATION ---
document.querySelectorAll(".nav-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelectorAll(".nav-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    document.querySelectorAll(".view").forEach(v=>v.classList.add("hidden"));
    document.getElementById(btn.dataset.view).classList.remove("hidden");
  });
});

// --- LESSONS ---
function renderLessons(){
  const container = document.getElementById("lessons");
  const cat = getActiveCategory();
  const words = wordsForCategory(cat);
  container.innerHTML = "";
  const chunkSize = 8;
  for(let i=0;i<words.length;i+=chunkSize){
    const lesson = words.slice(i,i+chunkSize);
    const card = document.createElement("div");
    card.className = "lesson";
    const lessonNum = Math.floor(i/chunkSize)+1;
    card.innerHTML = `
      <strong>${cat==="all" ? "Lesson" : cat} ${lessonNum}</strong>
      <div>${lesson.map(x=>`${x.nov} — ${x.eng}`).join(" · ")}</div>
      <button>Study</button>
    `;
    const btn = card.querySelector("button");
    btn.addEventListener("click", ()=>{
      lesson.forEach(w=>{
        const idx = ALL_WORDS.indexOf(w);
        const item = state.deck[idx];
        item.nextReview = 0;
        item.interval = 0;
      });
      saveState();
      document.querySelector('[data-view="flashcards"]').click();
      prepareCard();
    });
    container.appendChild(card);
  }
}
document.getElementById("category-select").addEventListener("change", ()=>{
  renderLessons();
  prepareCard();
});
renderLessons();

// --- FLASHCARDS ---
const cardFront = document.getElementById("card-front");
const cardBack = document.getElementById("card-back");
let currentCard = null;

function getDueIndices(){
  const now = Date.now();
  const cat = getActiveCategory();
  const allowed = new Set(indicesForCategory(cat));
  return state.deck
    .map((d,i)=>({d,i}))
    .filter(x=>x.d.nextReview <= now && allowed.has(x.i))
    .map(x=>x.i);
}

function prepareCard(){
  const due = getDueIndices();
  if(due.length===0){
    cardFront.textContent = "No cards due in this category. Start a lesson or change category.";
    cardBack.textContent = "";
    document.getElementById("fc-progress").textContent = "0 due";
    currentCard = null;
    return;
  }
  const idx = due[Math.floor(Math.random()*due.length)];
  currentCard = {idx};
  const w = ALL_WORDS[idx];
  cardFront.textContent = w.nov;
  cardBack.textContent = w.eng;
  document.getElementById("fc-progress").textContent = `${due.length} due`;
  cardBack.classList.add("hidden");
  cardFront.classList.remove("hidden");
}
document.getElementById("flip").addEventListener("click", ()=>{
  cardBack.classList.toggle("hidden");
  cardFront.classList.toggle("hidden");
});
document.getElementById("again").addEventListener("click", ()=>{
  if(!currentCard) return;
  const item = state.deck[currentCard.idx];
  item.interval = Math.max(1, Math.floor(item.interval/2));
  item.nextReview = Date.now() + 1000*60; // 1 minute
  saveState();
  prepareCard();
});
document.getElementById("known").addEventListener("click", ()=>{
  if(!currentCard) return;
  const item = state.deck[currentCard.idx];
  item.correct = (item.correct||0)+1;
  item.interval = item.interval ? item.interval*2 : 1;
  item.nextReview = Date.now() + item.interval*1000*60*60*24;
  saveState();
  prepareCard();
});
prepareCard();

// --- QUIZ ---
let quizState = {score:0,current:null};
function makeQuestion(){
  const cat = getActiveCategory();
  const pool = wordsForCategory(cat);
  const list = pool.length ? pool : ALL_WORDS;
  const correct = list[Math.floor(Math.random()*list.length)];
  const choices = new Set([correct.eng]);
  while(choices.size < 4 && choices.size < ALL_WORDS.length){
    const c = ALL_WORDS[Math.floor(Math.random()*ALL_WORDS.length)].eng;
    choices.add(c);
  }
  const arr = Array.from(choices).sort(()=>Math.random()-0.5);
  return {nov:correct.nov, correct:correct.eng, choices:arr};
}
function renderQuiz(){
  quizState.current = makeQuestion();
  document.getElementById("question").textContent =
    `What is the meaning of "${quizState.current.nov}"?`;
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";
  document.getElementById("quiz-result").textContent = "";
  quizState.current.choices.forEach(c=>{
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = c;
    btn.addEventListener("click", ()=>{
      const correct = c === quizState.current.correct;
      document.getElementById("quiz-result").textContent =
        correct ? "Correct!" : `Wrong — correct: ${quizState.current.correct}`;
      if(correct) quizState.score++;
    });
    choicesDiv.appendChild(btn);
  });
}
document.getElementById("next-question").addEventListener("click", renderQuiz);
renderQuiz();

// --- MINIGAME: WORD RUSH ---
let gameTimer = null;
let gameTimeLeft = 60;
let gameScore = 0;
let gameCurrent = null;

const gameTimerEl = document.getElementById("game-timer");
const gameScoreEl = document.getElementById("game-score");
const gamePromptEl = document.getElementById("game-prompt");
const gameInputEl = document.getElementById("game-input");
const gameFeedbackEl = document.getElementById("game-feedback");
const gameStartBtn = document.getElementById("game-start");

function pickGameWord(){
  const cat = getActiveCategory();
  const pool = wordsForCategory(cat);
  const list = pool.length ? pool : ALL_WORDS;
  return list[Math.floor(Math.random()*list.length)];
}
function updateGameUI(){
  gameTimerEl.textContent = `Time: ${gameTimeLeft}`;
  gameScoreEl.textContent = `Score: ${gameScore}`;
}
function nextGamePrompt(){
  gameCurrent = pickGameWord();
  gamePromptEl.textContent = `English: ${gameCurrent.eng}`;
  gameInputEl.value = "";
  gameInputEl.focus();
}
function endGame(){
  clearInterval(gameTimer);
  gameTimer = null;
  gameFeedbackEl.textContent = `Time! Final score: ${gameScore}`;
}
gameInputEl.addEventListener("keydown", (e)=>{
  if(e.key === "Enter" && gameCurrent && gameTimer){
    const val = gameInputEl.value.trim().toLowerCase();
    const target = gameCurrent.nov.toLowerCase();
    if(val === target){
      gameScore++;
      gameFeedbackEl.textContent = "Correct!";
      nextGamePrompt();
    }else{
      gameFeedbackEl.textContent = `Wrong — "${gameCurrent.nov}"`;
      nextGamePrompt();
    }
    updateGameUI();
  }
});
gameStartBtn.addEventListener("click", ()=>{
  gameTimeLeft = 60;
  gameScore = 0;
  updateGameUI();
  nextGamePrompt();
  gameFeedbackEl.textContent = "Go!";
  if(gameTimer) clearInterval(gameTimer);
  gameTimer = setInterval(()=>{
    gameTimeLeft--;
    updateGameUI();
    if(gameTimeLeft <= 0){
      endGame();
    }
  },1000);
});

// --- AUDIO (minimal, for future use) ---
function speak(text){
  if(!state.settings.audio) return;
  if('speechSynthesis' in window){
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  }
}

// --- SETTINGS ---
const audioCheckbox = document.getElementById("enable-audio");
audioCheckbox.checked = state.settings.audio;
audioCheckbox.addEventListener("change", e=>{
  state.settings.audio = e.target.checked;
  saveState();
});
document.getElementById("reset-data").addEventListener("click", ()=>{
  if(confirm("Reset all progress?")){
    localStorage.removeItem(STORAGE_KEY);
    loadState();
    prepareCard();
    document.getElementById("status").textContent = "Progress reset.";
  }
});
document.getElementById("export-data").addEventListener("click", ()=>{
  const rows = [["nov","eng","nextReview","interval","correct","category"]];
  state.deck.forEach(d=>{
    const w = ALL_WORDS[d.idx];
    rows.push([w.nov,w.eng,d.nextReview,d.interval,d.correct||0,w.category]);
  });
  const csv = rows.map(r=>r.map(c=>`"${String(c).replace(/"/g,'""')}"`).join(",")).join("\n");
  const blob = new Blob([csv],{type:"text/csv"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "novengl_progress.csv";
  a.click();
  URL.revokeObjectURL(url);
});
document.getElementById("import-file").addEventListener("change", e=>{
  const f = e.target.files[0];
  if(!f) return;
  const reader = new FileReader();
  reader.onload = ()=>{
    const text = reader.result;
    const lines = text.split(/\r?\n/).slice(1);
    lines.forEach(line=>{
      if(!line.trim()) return;
      const cols = line.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/)
        .map(s=>s.replace(/^"|"$/g,'').replace(/""/g,'"'));
      const nov = cols[0], eng = cols[1];
      const idx = ALL_WORDS.findIndex(x=>x.nov===nov || x.eng===eng);
      if(idx>=0){
        const item = state.deck[idx];
        item.nextReview = Number(cols[2])||item.nextReview;
        item.interval = Number(cols[3])||item.interval;
        item.correct = Number(cols[4])||item.correct;
      }
    });
    saveState();
    document.getElementById("status").textContent = "Import complete.";
    prepareCard();
  };
  reader.readAsText(f);
});

document.getElementById("status").textContent = "Ready.";
