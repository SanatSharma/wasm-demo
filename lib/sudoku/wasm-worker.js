'use strict';

importScripts("worker-common.js");

const instanceP =
    fetch('solver.wasm').then(response =>
      response.arrayBuffer()
    ).then(bytes =>
      WebAssembly.instantiate(bytes)
    );

instanceP.then(instance => {
    instance.instance.exports.initBoard();
    doIteration("wasm", instance.instance.exports.main);
});

function getWasmModel() {
  instanceP.then(instance => {
    var getElementOfModel = instance.instance.exports.getModel();
  });
  console.log(getElementOfModel(0,0));
}
