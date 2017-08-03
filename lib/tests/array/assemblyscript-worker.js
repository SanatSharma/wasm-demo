'use strict';

importScripts("worker-common.js");

const instanceP =
    fetch('as-wasm.wasm').then(response =>
      response.arrayBuffer()
    ).then(bytes =>
      WebAssembly.instantiate(bytes)
    );

instanceP.then(instance => {
   var t0= performance.now();
    for(var i=0; i<10; i++){
    //instance.instance.exports.initBoard();
    instance.instance.exports.main();
  }
    var t1= performance.now();
    postMessage(t1-t0);
});
