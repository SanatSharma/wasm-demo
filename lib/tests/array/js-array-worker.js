'use strict';

importScripts("worker-common.js");
importScripts("array.js");

// doIteration("js", fib);
for(var i=0;i<10;i++){
    var t0 = performance.now();
    ArrayTest(10000);
    var t1 = performance.now();
    postMessage(t1-t0);
}