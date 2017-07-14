'use strict';

importScripts("worker-common.js");
importScripts("recur.js");

// doIteration("js", fib(1000));
const before = performance.now();
fib(40);
const after = performance.now();
postMessage(after-before);    