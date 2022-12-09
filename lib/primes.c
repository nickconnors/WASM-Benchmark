#include <stdio.h>
#include <emscripten.h>

int isPrime(int n) {
	for (int i=2; i <= n/2; i++) {
		if (!(n % i)) {
			return 0;
		}
	}
	return 1;
}

EMSCRIPTEN_KEEPALIVE
int calcPrimes() {
	int numPrimes = 0;

	for (int i = 2; i < 1000001; i++) {
		numPrimes += isPrime(i);
	}

	return numPrimes;
}

// int main() {
// 	return 0;
// }