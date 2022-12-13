importScripts('primes.js');

// function isPrime(n) {
//   for (let i = 2; i <= n/2; i++) {
//     if (!(n % i)) {
//       return 0;
//     }
//   }
//   return 1;
// }

// function calcPrimesJS() {
//   var numPrimes = 0;

//   for (let i = 2; i < 1000001; i++) {
//     numPrimes += isPrime(i);
//   }
// }

function calcPrimesJS(n) {
  var primes = new Array(n).fill(true);

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
      //printf("%d\n", i);
      count++;
    }
  }

  console.log(count);

  return count;
}

onmessage = function(e) {
  if (e.data == "JS") {
    calcPrimesJS(100000000);
    postMessage(null);
  }

  if (e.data == "WASM") {
    _calcPrimesWASM(100000000);
    postMessage(null);
  }
}