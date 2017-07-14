export function fib(): number {
  let n: number = 1000;
  let i: number, t: number, a: number = 0, b: number = 1;
  for (i = 0; i < n; i++) {
    t = a + b; a = b; b = t;
  }
  return b;
}