'use strict';

importScripts("worker-common.js");

const instanceP =
    fetch('recur.wasm').then(response =>
      response.arrayBuffer()
    ).then(bytes =>
      WebAssembly.instantiate(bytes)
    );

instanceP.then(instance => {
    //instance.instance.exports.initBoard();
    //doIteration("wasm", instance.instance.exports.fib(1000));
    const before = performance.now();
    instance.exports.fib(10);
    const after = performance.now();
    postMessage(after-before);    
});

