importScripts('primes.js');

function calcPrimesJS(n) {
  var primes = new Uint8Array(n).fill(true);

  let limit = Math.sqrt(n) + 1;
  for (var i = 2; i < limit; i++) {
    if (primes[i - 1]) {
      for (var j = i * i; j <= n; j+=i) {
        primes[j-1] = 0;
      }
    }
  }

  /* Output the results */
  var count = 0;
  for (var i = 2; i <= n; i++) {
    if (primes[i-1]) {
      count++;
    }
  }

  return count;
}

onmessage = function(e) {
  if (e.data == "JS") {
    calcPrimesJS(900000000);
    postMessage(null);
  }

  if (e.data == "WASM") {
    _calcPrimesWASM(900000000);
    postMessage(null);
  }
}