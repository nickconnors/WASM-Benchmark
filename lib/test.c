#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <time.h>


int main() {
	int n = 100000000;

  time_t t = clock();

  char *primes = malloc(sizeof(char) * n);
  for (int i = 0; i < n; i++) {
    primes[i] = 1;
  }

  int limit = sqrt(n) + 1;
  for (int i = 2; i < limit; i++) {
    if (primes[i - 1]) {
      for (int j = i * i; j <= n; j+=i) {
        primes[j - 1] = 0;
      }
    }
  }

  /* Output the results */
  int count = 0;
  for (int i = 2; i <= n; i++) {
    if (primes[i - 1]) {
      count++;
    }
  }

  t = clock() - t;
  free(primes);
  printf("%f\n", (double) t / CLOCKS_PER_SEC);
  printf("%d\n", count);

  return count;
}