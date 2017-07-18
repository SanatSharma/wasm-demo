'use strict';

importScripts("worker-common.js");
importScripts("iter.js");

// doIteration("js", fib);
for(var i=0;i<10;i++){
    var t0 = performance.now();
    fib(100);
    var t1 = performance.now();
    postMessage(t1-t0);
}