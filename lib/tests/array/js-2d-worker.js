'use strict';

importScripts("worker-common.js");
importScripts("2darray.js");

// doIteration("js", fib);
for(var i=0;i<10;i++){
    var t0 = performance.now();
    ArrayTest(25);
    var t1 = performance.now();
    postMessage(t1-t0);
}