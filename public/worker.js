importScripts('primes.js');

function isPrime(n) {
  for (let i = 2; i <= n/2; i++) {
    if (!(n % i)) {
      return 0;
    }
  }
  return 1;
}

function calcPrimesJS() {
  var numPrimes = 0;

  for (let i = 2; i < 1000001; i++) {
    numPrimes += isPrime(i);
  }
}

onmessage = function(e) {
  if (e.data == "JS") {
    calcPrimesJS();
    postMessage(null);
  }

  if (e.data == "WASM") {
    _calcPrimesWASM();
    postMessage(null);
  }
}