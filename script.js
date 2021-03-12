// global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const maxLives = 3;

/// Global Variables
var pattern = [6, 2, 7, 3, 9, 1, 2, 4];
var progress = 0;
var level = 1;
var lives = maxLives;
var difficulty = 5;
var gamePlaying = false;
var isEndless = false;
var numScores = 0;

var tonePlaying = false;
var volume = 0.5; // must be between 0.0 and 1.0

var guessCounter = 0;

function startGame() {
  // initialize game variables
  progress = 0;
  lives = maxLives;
  gamePlaying = true;

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("lives").innerHTML = String(lives);
  document.getElementById("level").innerHTML = String(progress + 1);

  isEndless = document.getElementById("endlessCheckBox").checked;
  if (isEndless) {
    pattern = [];
    playEndlessClueSequence();
  } else {
    pattern = generateRandomPattern(difficulty);
    playClueSequence();
  }
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("level").innerHTML = level;
  lives = maxLives;
  document.getElementById("lives").innerHTML = String(lives);
  if(isEndless)
    addScore(level);
  level = 1;
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function playEndlessClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  pattern = generateNextClue(pattern);
  console.log(pattern);
  for (let i = 0; i < pattern.length; i++) {
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function generateRandomPattern(length) {
  var pattern = [];
  for (let i = 0; i < length; i++) {
    pattern.push(Math.floor(Math.random() * 9 + 1));
  }
  console.log(pattern);
  return pattern;
}

function generateNextClue(pattern) {
  pattern.push(Math.floor(Math.random() * 9 + 1));
  return pattern;
}

function guess(btn) {
  if (!gamePlaying) {
    return;
  }

  if (btn == pattern[guessCounter]) {
    // Guessed correct   
    if(isEndless){
      if (guessCounter == pattern.length - 1){
        level++;
        document.getElementById("level").innerHTML = level;
        playEndlessClueSequence();
      }
      else
        guessCounter++;
    }
    else if (guessCounter == progress && !isEndless) {
      // End of current sequence
      if (progress == pattern.length - 1)
        // End of entire pattern
        winGame();
      else
        progress++;

      document.getElementById("level").innerHTML = progress + 1;
      playClueSequence();
    } else
        guessCounter++;
    
  } else {
    if (lives <= 1) 
      loseGame();
    else {
      lives--;
      document.getElementById("lives").innerHTML = lives;
    }
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Congratulations. You won!");
}

function addScore(score){
  var list = document.getElementById('scoreBoard');
  var entry = document.createElement('li');
  numScores++;
  entry.appendChild(document.createTextNode(numScores + ". " + score));
  list.appendChild(entry);
}

// Sound Synthesis Functions
const freqMap = {
  1: 200,
  2: 220,
  3: 240,
  4: 261.6,
  5: 329.6,
  6: 392,
  7: 466.2,
  8: 480,
  9: 512
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);