const worker = new Worker('worker.js');

var pJS = document.getElementById("timerJS");
var pWASM = document.getElementById("timerWASM");

var timerID;

var tens = 0;
var seconds = 0;
var appendTens;
var appendSeconds;

function startTimer () {
  tens++; 
  
  if(tens <= 9){
    appendTens.innerHTML = "0" + tens;
  }
  if (tens > 9){
    appendTens.innerHTML = tens;
  } 
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
  if (seconds > 9){
    appendSeconds.innerHTML = seconds;
  }
}

function resetCounts () {
  clearInterval(timerID);
  tens = "00";
  seconds = "00";
}

function resetTimer () {
  clearInterval(timerID);
  appendTens.innerHTML = "00";
  appendSeconds.innerHTML = "00";
}

document.getElementById("calcPrimesJS").addEventListener("click", function() {
  appendSeconds = pJS.querySelector('.seconds');
  appendTens = pJS.querySelector('.tens');

  resetTimer();
  timerID = setInterval(startTimer, 10);

  worker.postMessage("JS");

  worker.onmessage = (e) => {
    resetCounts();
  }
});

document.getElementById("calcPrimesWASM").addEventListener("click", function() {
  appendSeconds = pWASM.querySelector('.seconds');
  appendTens = pWASM.querySelector('.tens');

  resetTimer();
  timerID = setInterval(startTimer, 10);

  worker.postMessage("WASM");

  worker.onmessage = (e) => {
    resetCounts();
  }
});