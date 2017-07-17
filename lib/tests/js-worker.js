'use strict';

importScripts("worker-common.js");
importScripts("iter.js");

//doIteration("js", fib);
// function iter(){
//     var t0 = performance.now();
//     fib(10000000);
//     var t1 = performance.now();
//     postMessage(t1-t0);
// }

// for(var i=0;i<10;i++){
//     setTimeout(() => {
//         iter()
//     }, 0);
// }


  const iter = () => {
    setTimeout(() => {
            const before = performance.now();
            fib(10000000);
            const after = performance.now();
            postMessage(after - before);
            iter();
        }, 0);
  };
  iter();
