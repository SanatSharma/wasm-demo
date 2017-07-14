'use strict';

importScripts("worker-common.js");
importScripts("recur.js");

for(var i=0;i<10;i++){
    var before = performance.now();
    fib(40);
    var after = performance.now();
    postMessage(after-before);
}
