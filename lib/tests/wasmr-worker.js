'use strict';

importScripts("worker-common.js");

const instanceP =
    fetch('recur.wasm').then(response =>
      response.arrayBuffer()
    ).then(bytes =>
      WebAssembly.instantiate(bytes)
    );

instanceP.then(instance => {
  for(var i=0; i<10; i++){
    var t0= performance.now();
    //instance.instance.exports.initBoard();
    instance.instance.exports.fib(40);
    var t1= performance.now();
    postMessage(t1-t0);
  }
});
