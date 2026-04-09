// Novengl learning app — category-based lexicon, larger dictionary scaffold

// CATEGORY-BASED LEXICON
// Add more entries to each category to push toward 1000+ words.
// Pattern: { eng:"...", nov:"...", pos:"...", category:"..." }

const LEXICON = {
  core: [
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
    {eng:"are", nov:"esn", pos:"verb", category:"core"},
    {eng:"have", nov:"kren", pos:"verb", category:"core"},
    {eng:"do", nov:"tal", pos:"verb", category:"core"},
    {eng:"go", nov:"voro", pos:"verb", category:"core"},
    {eng:"come", nov:"mela", pos:"verb", category:"core"},
    {eng:"see", nov:"spek", pos:"verb", category:"core"},
    {eng:"say", nov:"lore", pos:"verb", category:"core"},
    {eng:"make", nov:"forma", pos:"verb", category:"core"},
    {eng:"know", nov:"senti", pos:"verb", category:"core"},
    {eng:"want", nov:"desi", pos:"verb", category:"core"},
    {eng:"can", nov:"mogi", pos:"verb", category:"core"},
    {eng:"must", nov:"duti", pos:"verb", category:"core"},
    {eng:"need", nov:"nevi", pos:"verb", category:"core"},
    {eng:"what", nov:"kwo", pos:"qword", category:"core"},
    {eng:"who", nov:"khen", pos:"qword", category:"core"},
    {eng:"where", nov:"loka", pos:"qword", category:"core"},
    {eng:"when", nov:"tima", pos:"qword", category:"core"},
    {eng:"why", nov:"kosa", pos:"qword", category:"core"},
    {eng:"how", nov:"koma", pos:"qword", category:"core"}
  ],

  people: [
    {eng:"person", nov:"huma", pos:"noun", category:"people"},
    {eng:"man", nov:"humen", pos:"noun", category:"people"},
    {eng:"woman", nov:"humae", pos:"noun", category:"people"},
    {eng:"child", nov:"kida", pos:"noun", category:"people"},
    {eng:"friend", nov:"felo", pos:"noun", category:"people"},
    {eng:"family", nov:"famli", pos:"noun", category:"people"},
    {eng:"mother", nov:"mara", pos:"noun", category:"people"},
    {eng:"father", nov:"fara", pos:"noun", category:"people"},
    {eng:"brother", nov:"brata", pos:"noun", category:"people"},
    {eng:"sister", nov:"sista", pos:"noun", category:"people"},
    {eng:"teacher", nov:"leron", pos:"noun", category:"people"},
    {eng:"student", nov:"studan", pos:"noun", category:"people"},
    {eng:"neighbor", nov:"nebra", pos:"noun", category:"people"},
    {eng:"stranger", nov:"strana", pos:"noun", category:"people"},
    {eng:"guest", nov:"gosta", pos:"noun", category:"people"},
    {eng:"host", nov:"hesta", pos:"noun", category:"people"},
    {eng:"worker", nov:"labra", pos:"noun", category:"people"},
    {eng:"boss", nov:"chefa", pos:"noun", category:"people"},
    {eng:"doctor", nov:"meda", pos:"noun", category:"people"},
    {eng:"friendship", nov:"felon", pos:"noun", category:"people"}
  ],

  home: [
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
    {eng:"light", nov:"luma", pos:"noun", category:"home"},
    {eng:"floor", nov:"sola", pos:"noun", category:"home"},
    {eng:"wall", nov:"mura", pos:"noun", category:"home"},
    {eng:"ceiling", nov:"tapa", pos:"noun", category:"home"},
    {eng:"key", nov:"kela", pos:"noun", category:"home"},
    {eng:"garden", nov:"jarda", pos:"noun", category:"home"},
    {eng:"street", nov:"strada", pos:"noun", category:"home"},
    {eng:"city", nov:"talan", pos:"noun", category:"home"},
    {eng:"village", nov:"vilan", pos:"noun", category:"home"},
    {eng:"building", nov:"struk", pos:"noun", category:"home"}
  ],

  food: [
    {eng:"food", nov:"menga", pos:"noun", category:"food"},
    {eng:"water", nov:"aqua", pos:"noun", category:"food"},
    {eng:"bread", nov:"pana", pos:"noun", category:"food"},
    {eng:"rice", nov:"risa", pos:"noun", category:"food"},
    {eng:"meat", nov:"karn", pos:"noun", category:"food"},
    {eng:"fish", nov:"fiska", pos:"noun", category:"food"},
    {eng:"fruit", nov:"fruta", pos:"noun", category:"food"},
    {eng:"vegetable", nov:"vega", pos:"noun", category:"food"},
    {eng:"apple", nov:"apla", pos:"noun", category:"food"},
    {eng:"banana", nov:"banan", pos:"noun", category:"food"},
    {eng:"milk", nov:"laka", pos:"noun", category:"food"},
    {eng:"coffee", nov:"kofa", pos:"noun", category:"food"},
    {eng:"tea", nov:"teya", pos:"noun", category:"food"},
    {eng:"sugar", nov:"sukra", pos:"noun", category:"food"},
    {eng:"salt", nov:"salta", pos:"noun", category:"food"},
    {eng:"egg", nov:"ova", pos:"noun", category:"food"},
    {eng:"cheese", nov:"chisa", pos:"noun", category:"food"},
    {eng:"breakfast", nov:"mornmang", pos:"noun", category:"food"},
    {eng:"lunch", nov:"midmang", pos:"noun", category:"food"},
    {eng:"dinner", nov:"nigmang", pos:"noun", category:"food"},
    {eng:"eat", nov:"mang", pos:"verb", category:"food"},
    {eng:"drink", nov:"sorv", pos:"verb", category:"food"},
    {eng:"cook", nov:"kuka", pos:"verb", category:"food"},
    {eng:"hungry", nov:"fama", pos:"adj", category:"food"},
    {eng:"thirsty", nov:"sorna", pos:"adj", category:"food"}
  ],

  travel: [
    {eng:"travel", nov:"viaja", pos:"verb", category:"travel"},
    {eng:"trip", nov:"viajan", pos:"noun", category:"travel"},
    {eng:"car", nov:"auto", pos:"noun", category:"travel"},
    {eng:"bus", nov:"busa", pos:"noun", category:"travel"},
    {eng:"train", nov:"trena", pos:"noun", category:"travel"},
    {eng:"plane", nov:"avion", pos:"noun", category:"travel"},
    {eng:"airport", nov:"aviondom", pos:"noun", category:"travel"},
    {eng:"station", nov:"stason", pos:"noun", category:"travel"},
    {eng:"ticket", nov:"bila", pos:"noun", category:"travel"},
    {eng:"passport", nov:"pasdok", pos:"noun", category:"travel"},
    {eng:"bag", nov:"saka", pos:"noun", category:"travel"},
    {eng:"luggage", nov:"bagan", pos:"noun", category:"travel"},
    {eng:"map", nov:"karta", pos:"noun", category:"travel"},
    {eng:"left", nov:"leva", pos:"adv", category:"travel"},
    {eng:"right", nov:"dexa", pos:"adv", category:"travel"},
    {eng:"straight", nov:"direk", pos:"adv", category:"travel"},
    {eng:"near", nov:"nira", pos:"adj", category:"travel"},
    {eng:"far", nov:"lonta", pos:"adj", category:"travel"},
    {eng:"hotel", nov:"hotela", pos:"noun", category:"travel"},
    {eng:"address", nov:"adres", pos:"noun", category:"travel"}
  ],

  time: [
    {eng:"today", nov:"daiya", pos:"adv", category:"time"},
    {eng:"yesterday", nov:"yesta", pos:"adv", category:"time"},
    {eng:"tomorrow", nov:"toma", pos:"adv", category:"time"},
    {eng:"morning", nov:"morn", pos:"noun", category:"time"},
    {eng:"afternoon", nov:"aftan", pos:"noun", category:"time"},
    {eng:"evening", nov:"evna", pos:"noun", category:"time"},
    {eng:"night", nov:"nigt", pos:"noun", category:"time"},
    {eng:"day", nov:"dai", pos:"noun", category:"time"},
    {eng:"week", nov:"vika", pos:"noun", category:"time"},
    {eng:"month", nov:"mona", pos:"noun", category:"time"},
    {eng:"year", nov:"yera", pos:"noun", category:"time"},
    {eng:"now", nov:"nuna", pos:"adv", category:"time"},
    {eng:"later", nov:"lata", pos:"adv", category:"time"},
    {eng:"soon", nov:"sona", pos:"adv", category:"time"},
    {eng:"always", nov:"alwe", pos:"adv", category:"time"},
    {eng:"never", nov:"neva", pos:"adv", category:"time"},
    {eng:"sometimes", nov:"soma", pos:"adv", category:"time"},
    {eng:"often", nov:"ofta", pos:"adv", category:"time"},
    {eng:"early", nov:"erla", pos:"adv", category:"time"},
    {eng:"late", nov:"leta", pos:"adv", category:"time"}
  ],

  emotions: [
    {eng:"love", nov:"amur", pos:"noun", category:"emotions"},
    {eng:"to love", nov:"amura", pos:"verb", category:"emotions"},
    {eng:"like", nov:"gusta", pos:"verb", category:"emotions"},
    {eng:"hate", nov:"odina", pos:"verb", category:"emotions"},
    {eng:"happy", nov:"brena", pos:"adj", category:"emotions"},
    {eng:"sad", nov:"trista", pos:"adj", category:"emotions"},
    {eng:"angry", nov:"irita", pos:"adj", category:"emotions"},
    {eng:"afraid", nov:"frena", pos:"adj", category:"emotions"},
    {eng:"surprised", nov:"sorpre", pos:"adj", category:"emotions"},
    {eng:"bored", nov:"tedia", pos:"adj", category:"emotions"},
    {eng:"tired", nov:"fata", pos:"adj", category:"emotions"},
    {eng:"excited", nov:"exita", pos:"adj", category:"emotions"},
    {eng:"calm", nov:"kalm", pos:"adj", category:"emotions"},
    {eng:"proud", nov:"prida", pos:"adj", category:"emotions"},
    {eng:"shy", nov:"timid", pos:"adj", category:"emotions"},
    {eng:"worried", nov:"ansia", pos:"adj", category:"emotions"},
    {eng:"hope", nov:"esper", pos:"noun", category:"emotions"},
    {eng:"to hope", nov:"espera", pos:"verb", category:"emotions"},
    {eng:"fear", nov:"fren", pos:"noun", category:"emotions"},
    {eng:"joy", nov:"jova", pos:"noun", category:"emotions"}
  ],

  nature: [
    {eng:"world", nov:"munda", pos:"noun", category:"nature"},
    {eng:"earth", nov:"tera", pos:"noun", category:"nature"},
    {eng:"sky", nov:"sela", pos:"noun", category:"nature"},
    {eng:"sun", nov:"suna", pos:"noun", category:"nature"},
    {eng:"moon", nov:"luna", pos:"noun", category:"nature"},
    {eng:"star", nov:"stela", pos:"noun", category:"nature"},
    {eng:"river", nov:"riva", pos:"noun", category:"nature"},
    {eng:"sea", nov:"mara", pos:"noun", category:"nature"},
    {eng:"mountain", nov:"monta", pos:"noun", category:"nature"},
    {eng:"forest", nov:"bosta", pos:"noun", category:"nature"},
    {eng:"tree", nov:"arba", pos:"noun", category:"nature"},
    {eng:"flower", nov:"flora", pos:"noun", category:"nature"},
    {eng:"grass", nov:"herba", pos:"noun", category:"nature"},
    {eng:"stone", nov:"stona", pos:"noun", category:"nature"},
    {eng:"wind", nov:"venta", pos:"noun", category:"nature"},
    {eng:"rain", nov:"pluva", pos:"noun", category:"nature"},
    {eng:"snow", nov:"neva", pos:"noun", category:"nature"},
    {eng:"hot", nov:"kald", pos:"adj", category:"nature"},
    {eng:"cold", nov:"kold", pos:"adj", category:"nature"},
    {eng:"weather", nov:"klima", pos:"noun", category:"nature"}
  ],

  school_work: [
    {eng:"school", nov:"skola", pos:"noun", category:"school_work"},
    {eng:"class", nov:"klasa", pos:"noun", category:"school_work"},
    {eng:"lesson", nov:"leksa", pos:"noun", category:"school_work"},
    {eng:"homework", nov:"domtask", pos:"noun", category:"school_work"},
    {eng:"exam", nov:"exama", pos:"noun", category:"school_work"},
    {eng:"book", nov:"libra", pos:"noun", category:"school_work"},
    {eng:"page", nov:"paja", pos:"noun", category:"school_work"},
    {eng:"pen", nov:"pena", pos:"noun", category:"school_work"},
    {eng:"paper", nov:"papra", pos:"noun", category:"school_work"},
    {eng:"desk", nov:"banka", pos:"noun", category:"school_work"},
    {eng:"job", nov:"labra", pos:"noun", category:"school_work"},
    {eng:"work", nov:"labraen", pos:"noun", category:"school_work"},
    {eng:"office", nov:"ofisa", pos:"noun", category:"school_work"},
    {eng:"meeting", nov:"mitan", pos:"noun", category:"school_work"},
    {eng:"project", nov:"proja", pos:"noun", category:"school_work"},
    {eng:"money", nov:"moni", pos:"noun", category:"school_work"},
    {eng:"salary", nov:"salari", pos:"noun", category:"school_work"},
    {eng:"boss", nov:"chefa", pos:"noun", category:"school_work"},
    {eng:"colleague", nov:"kolega", pos:"noun", category:"school_work"},
    {eng:"computer", nov:"kompu", pos:"noun", category:"school_work"}
  ],

  verbs_actions: [
    {eng:"walk", nov:"marcha", pos:"verb", category:"verbs_actions"},
    {eng:"run", nov:"kura", pos:"verb", category:"verbs_actions"},
    {eng:"sit", nov:"sedaen", pos:"verb", category:"verbs_actions"},
    {eng:"stand", nov:"stada", pos:"verb", category:"verbs_actions"},
    {eng:"sleep", nov:"dorma", pos:"verb", category:"verbs_actions"},
    {eng:"wake up", nov:"desdorm", pos:"verb", category:"verbs_actions"},
    {eng:"open", nov:"opra", pos:"verb", category:"verbs_actions"},
    {eng:"close", nov:"kluda", pos:"verb", category:"verbs_actions"},
    {eng:"give", nov:"dona", pos:"verb", category:"verbs_actions"},
    {eng:"take", nov:"taka", pos:"verb", category:"verbs_actions"},
    {eng:"put", nov:"posa", pos:"verb", category:"verbs_actions"},
    {eng:"help", nov:"ajuda", pos:"verb", category:"verbs_actions"},
    {eng:"use", nov:"usa", pos:"verb", category:"verbs_actions"},
    {eng:"play", nov:"luda", pos:"verb", category:"verbs_actions"},
    {eng:"work", nov:"labra", pos:"verb", category:"verbs_actions"},
    {eng:"study", nov:"studia", pos:"verb", category:"verbs_actions"},
    {eng:"learn", nov:"lerna", pos:"verb", category:"verbs_actions"},
    {eng:"teach", nov:"lera", pos:"verb", category:"verbs_actions"},
    {eng:"buy", nov:"kupa", pos:"verb", category:"verbs_actions"},
    {eng:"sell", nov:"venta", pos:"verb", category:"verbs_actions"}
  ],

  verbs_speech: [
    {eng:"speak", nov:"parla", pos:"verb", category:"verbs_speech"},
    {eng:"talk", nov:"parlaen", pos:"verb", category:"verbs_speech"},
    {eng:"listen", nov:"harn", pos:"verb", category:"verbs_speech"},
    {eng:"hear", nov:"harnen", pos:"verb", category:"verbs_speech"},
    {eng:"ask", nov:"kosta", pos:"verb", category:"verbs_speech"},
    {eng:"answer", nov:"respa", pos:"verb", category:"verbs_speech"},
    {eng:"tell", nov:"narra", pos:"verb", category:"verbs_speech"},
    {eng:"explain", nov:"expra", pos:"verb", category:"verbs_speech"},
    {eng:"think", nov:"pensa", pos:"verb", category:"verbs_speech"},
    {eng:"remember", nov:"memra", pos:"verb", category:"verbs_speech"},
    {eng:"forget", nov:"oblida", pos:"verb", category:"verbs_speech"},
    {eng:"believe", nov:"krede", pos:"verb", category:"verbs_speech"},
    {eng:"understand", nov:"kompre", pos:"verb", category:"verbs_speech"},
    {eng:"agree", nov:"akorda", pos:"verb", category:"verbs_speech"},
    {eng:"disagree", nov:"desakorda", pos:"verb", category:"verbs_speech"},
    {eng:"promise", nov:"promi", pos:"verb", category:"verbs_speech"},
    {eng:"decide", nov:"decida", pos:"verb", category:"verbs_speech"},
    {eng:"plan", nov:"plana", pos:"verb", category:"verbs_speech"},
    {eng:"imagine", nov:"imajna", pos:"verb", category:"verbs_speech"},
    {eng:"guess", nov:"supra", pos:"verb", category:"verbs_speech"}
  ],

  adjectives_basic: [
    {eng:"good", nov:"bren", pos:"adj", category:"adjectives_basic"},
    {eng:"bad", nov:"neth", pos:"adj", category:"adjectives_basic"},
    {eng:"big", nov:"gros", pos:"adj", category:"adjectives_basic"},
    {eng:"small", nov:"minu", pos:"adj", category:"adjectives_basic"},
    {eng:"long", nov:"longa", pos:"adj", category:"adjectives_basic"},
    {eng:"short", nov:"korta", pos:"adj", category:"adjectives_basic"},
    {eng:"new", nov:"nova", pos:"adj", category:"adjectives_basic"},
    {eng:"old", nov:"veta", pos:"adj", category:"adjectives_basic"},
    {eng:"young", nov:"jova", pos:"adj", category:"adjectives_basic"},
    {eng:"beautiful", nov:"bela", pos:"adj", category:"adjectives_basic"},
    {eng:"ugly", nov:"leda", pos:"adj", category:"adjectives_basic"},
    {eng:"easy", nov:"fasil", pos:"adj", category:"adjectives_basic"},
    {eng:"difficult", nov:"difik", pos:"adj", category:"adjectives_basic"},
    {eng:"fast", nov:"rapa", pos:"adj", category:"adjectives_basic"},
    {eng:"slow", nov:"lenta", pos:"adj", category:"adjectives_basic"},
    {eng:"full", nov:"plena", pos:"adj", category:"adjectives_basic"},
    {eng:"empty", nov:"vakua", pos:"adj", category:"adjectives_basic"},
    {eng:"clean", nov:"klena", pos:"adj", category:"adjectives_basic"},
    {eng:"dirty", nov:"susa", pos:"adj", category:"adjectives_basic"},
    {eng:"important", nov:"importa", pos:"adj", category:"adjectives_basic"}
  ],

  phrases_common: [
    {eng:"hello", nov:"helo", pos:"phrase", category:"phrases_common"},
    {eng:"good morning", nov:"bren morn", pos:"phrase", category:"phrases_common"},
    {eng:"good night", nov:"bren nigt", pos:"phrase", category:"phrases_common"},
    {eng:"see you later", nov:"spek sai lata", pos:"phrase", category:"phrases_common"},
    {eng:"how are you?", nov:"koma es sai?", pos:"phrase", category:"phrases_common"},
    {eng:"I am fine", nov:"miu es bren", pos:"phrase", category:"phrases_common"},
    {eng:"thank you", nov:"thara", pos:"phrase", category:"phrases_common"},
    {eng:"you are welcome", nov:"sai es wel", pos:"phrase", category:"phrases_common"},
    {eng:"please", nov:"plisa", pos:"phrase", category:"phrases_common"},
    {eng:"sorry", nov:"sori", pos:"phrase", category:"phrases_common"},
    {eng:"excuse me", nov:"parda miu", pos:"phrase", category:"phrases_common"},
    {eng:"I don't understand", nov:"miu na kompre", pos:"phrase", category:"phrases_common"},
    {eng:"can you repeat?", nov:"mogi sai repeta?", pos:"phrase", category:"phrases_common"},
    {eng:"how much is this?", nov:"koma moni es dis?", pos:"phrase", category:"phrases_common"},
    {eng:"where is the bathroom?", nov:"loka es lo lav?", pos:"phrase", category:"phrases_common"},
    {eng:"I am lost", nov:"miu es perda", pos:"phrase", category:"phrases_common"},
    {eng:"I need help", nov:"miu nevi ajuda", pos:"phrase", category:"phrases_common"},
    {eng:"nice to meet you", nov:"bren spek sai", pos:"phrase", category:"phrases_common"},
    {eng:"good luck", nov:"bren fortuna", pos:"phrase", category:"phrases_common"},
    {eng:"see you tomorrow", nov:"spek sai toma", pos:"phrase", category:"phrases_common"}
  ]
};

// Flatten to a single array for deck/quiz logic
const ALL_WORDS = Object.values(LEXICON).flat();

// STORAGE
const STORAGE_KEY = "novengl_progress_v2";
let state = {
  deck: [],
  settings: {audio:true}
};

function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
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

// CATEGORY HANDLING
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

/* Navigation */
document.querySelectorAll(".nav-btn").forEach(btn=>{
  btn.addEventListener("click", ()=> {
    document.querySelectorAll(".nav-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    showView(btn.dataset.view);
  });
});
function showView(name){
  document.querySelectorAll(".view").forEach(v=>v.classList.add("hidden"));
  document.getElementById(name).classList.remove("hidden");
}

/* Lessons */
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
      <button data-start="${i}">Study</button>
    `;
    container.appendChild(card);
    card.querySelector("button").addEventListener("click", ()=> {
      // push these words to front of deck (due now)
      lesson.forEach(w=>{
        const idx = ALL_WORDS.indexOf(w);
        const item = state.deck[idx];
        item.nextReview = 0;
        item.interval = 0;
      });
      saveState();
      showView("flashcards");
      prepareCard();
    });
  }
}
document.getElementById("category-select").addEventListener("change", ()=>{
  renderLessons();
  prepareCard();
});
renderLessons();

/* Flashcards */
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
document.getElementById("flip").addEventListener("click", ()=> {
  cardBack.classList.toggle("hidden");
  cardFront.classList.toggle("hidden");
});
document.getElementById("again").addEventListener("click", ()=> {
  if(!currentCard) return;
  const item = state.deck[currentCard.idx];
  item.interval = Math.max(1, Math.floor(item.interval/2));
  item.nextReview = Date.now() + 1000 * 60 * 1;
  saveState();
  prepareCard();
});
document.getElementById("known").addEventListener("click", ()=> {
  if(!currentCard) return;
  const item = state.deck[currentCard.idx];
  item.correct = (item.correct||0)+1;
  item.interval = item.interval ? item.interval * 2 : 1;
  item.nextReview = Date.now() + item.interval * 1000 * 60 * 60 * 24;
  saveState();
  prepareCard();
});
prepareCard();

/* Quiz */
let quizState = {score:0,current:null};
function makeQuestion(){
  const cat = getActiveCategory();
  const words = wordsForCategory(cat);
  const pool = words.length ? words : ALL_WORDS;
  const correct = pool[Math.floor(Math.random()*pool.length)];
  const correctIdx = ALL_WORDS.indexOf(correct);
  const choices = new Set([correct.eng]);
  while(choices.size < 4 && choices.size < ALL_WORDS.length){
    const c = ALL_WORDS[Math.floor(Math.random()*ALL_WORDS.length)].eng;
    choices.add(c);
  }
  const arr = Array.from(choices).sort(()=>Math.random()-0.5);
  return {idx:correctIdx,nov:correct.nov,correct:correct.eng,choices:arr};
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
    btn.addEventListener("click", ()=> {
      const correct = c === quizState.current.correct;
      document.getElementById("quiz-result").textContent =
        correct ? "Correct!" : `Wrong — correct: ${quizState.current.correct}`;
      if(correct) quizState.score++;
    });
    choicesDiv.appendChild(btn);
  });
}
document.getElementById("next-question").addEventListener("click", ()=> {
  renderQuiz();
});
renderQuiz();

/* Practice Conversations (unchanged, still small but uses Novengl) */
const DIALOGUES = [
  {title:"Greeting", lines:[
    {who:"miu", text:"Helo. Miu es miu."},
    {who:"sai", text:"Koma es sai?"},
    {who:"miu", text:"Miu es bren. Thara."}
  ]},
  {title:"Asking for directions", lines:[
    {who:"sai", text:"Loka es lo brin?"},
    {who:"miu", text:"Lo brin es nira lo talan."},
    {who:"sai", text:"Thara. Miu voro deren."}
  ]}
];
let dlgIndex = 0;
let lineIndex = 0;
function renderDialogue(){
  const area = document.getElementById("dialogue-area");
  const dlg = DIALOGUES[dlgIndex];
  area.innerHTML = `<strong>${dlg.title}</strong>
    <div class="dialogue-line">
      ${dlg.lines.map((l,i)=>`<div data-line="${i}" class="${i===lineIndex?'active':''}">
        <strong>${l.who}:</strong> ${l.text}
      </div>`).join("")}
    </div>`;
}
document.getElementById("next-line").addEventListener("click", ()=> {
  const dlg = DIALOGUES[dlgIndex];
  lineIndex = Math.min(dlg.lines.length-1, lineIndex+1);
  renderDialogue();
});
document.getElementById("prev-line").addEventListener("click", ()=> {
  lineIndex = Math.max(0, lineIndex-1);
  renderDialogue();
});
document.getElementById("play-line").addEventListener("click", ()=> {
  const dlg = DIALOGUES[dlgIndex];
  const line = dlg.lines[lineIndex].text;
  speak(line);
});
renderDialogue();

/* Audio */
function speak(text){
  if(!state.settings.audio) return;
  if('speechSynthesis' in window){
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  }
}

/* Settings */
document.getElementById("enable-audio").checked = state.settings.audio;
document.getElementById("enable-audio").addEventListener("change", (e)=>{
  state.settings.audio = e.target.checked;
  saveState();
});
document.getElementById("reset-data").addEventListener("click", ()=>{
  if(confirm("Reset all progress?")) {
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
  a.href = url; a.download = "novengl_progress.csv"; a.click();
  URL.revokeObjectURL(url);
});
document.getElementById("import-file").addEventListener("change", (e)=>{
  const f = e.target.files[0];
  if(!f) return;
  const reader = new FileReader();
  reader.onload = ()=> {
    const text = reader.result;
    const lines = text.split(/\r?\n/).slice(1);
    lines.forEach(line=>{
      if(!line.trim()) return;
      const cols = line.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/).map(s=>s.replace(/^"|"$/g,'').replace(/""/g,'"'));
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

/* Init */
document.getElementById("status").textContent = "Ready.";
