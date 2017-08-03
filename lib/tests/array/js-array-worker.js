'use strict';

importScripts("worker-common.js");
importScripts("math-partial-sum.js");

// doIteration("js", fib);
var t0 = performance.now();
    for(var i=0;i<10;i++){
    main();
}
    var t1 = performance.now();
    postMessage(t1-t0);
