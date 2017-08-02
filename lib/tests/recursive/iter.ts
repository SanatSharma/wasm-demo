export function fib(n: double): double {
  let i: int, t: double , a: double = 0, b: double = 1;
  for (i = 0; i < n; i++) {
    t = a + b; 
    a = b; 
    b = t;
  }
  return b;
}
