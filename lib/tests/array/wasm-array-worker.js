'use strict';

importScripts("worker-common.js");

const instanceP =
    fetch('array.wasm').then(response =>
      response.arrayBuffer()
    ).then(bytes =>
      WebAssembly.instantiate(bytes)
    );

instanceP.then(instance => {
    //instance.instance.exports.initBoard();
    // doIteration("wasm", instance.instance.exports.fib, 37);
    for(var i=0; i<10; i++){
    var t0= performance.now();
    //instance.instance.exports.initBoard();
    instance.instance.exports.ArrayTest(10000);
    var t1= performance.now();
    postMessage(t1-t0);
  }
});
