//#include <emscripten.h>
#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <time.h>


int main(/*int n*/) {
	int n = 100000000;

  time_t t = clock();
  /* Create an array of values, where '1' indicates that a number is prime.
   * Start by assuming all numbers are prime by setting them to 1.
   */

  char *primes = malloc(sizeof(char) * n);
  for (int i = 0; i < n; i++) {
    primes[i] = 1;
  }

  /* Loop through a portion of the array (up to the square root of n). If
   * it's a prime, ensure all multiples of it are set to zero (false), as they
   * clearly cannot be prime.
   */
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
      //printf("%d\n", i);
      count++;
    }
  }

  t = clock() - t;
  free(primes);
  printf("%f\n", (double) t / CLOCKS_PER_SEC);
  printf("%d\n", count);

  return count;
}