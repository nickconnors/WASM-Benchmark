#include <stdio.h>
#include <time.h>
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
void calcPrimes() {
	clock_t time;
	int numPrimes = 0;

	time = clock();

	for (int i = 2; i < 1000001; i++) {
		numPrimes += isPrime(i);
	}

	time = clock() - time;

	printf("%d\n", numPrimes);
	printf("Time taken: %f\n", (double) time / CLOCKS_PER_SEC);
}

// int main() {
// 	return 0;
// }