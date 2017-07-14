'use strict';

importScripts("worker-common.js");
importScripts("recur.js");

for(var i=0;i<10;i++){
    var t0 = performance.now();
    fib(40);
    var t1 = performance.now();
    postMessage(t1-t0);
}