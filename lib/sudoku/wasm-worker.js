'use strict';

importScripts("worker-common.js");

const instanceP =
    fetch('solver.wasm').then(response =>
      response.arrayBuffer()
    ).then(bytes =>
      WebAssembly.instantiate(bytes)
    );

instanceP.then(instance => {
    //instance.instance.exports.initBoard();
    doIteration("wasm", instance.instance.exports.main);
});
