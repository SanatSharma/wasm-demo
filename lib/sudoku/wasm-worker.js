'use strict';

importScripts("worker-common.js");

const instanceP =
    fetch('module.wasm').then(response =>
      response.arrayBuffer()
    ).then(bytes =>
      WebAssembly.instantiate(bytes)
    );

instanceP.then(instance => {
    //instance.instance.exports.initBoard();
    doWasmIteration("wasm", instance.instance.exports.calcMandel, instance.instance.exports.getModel);
});
