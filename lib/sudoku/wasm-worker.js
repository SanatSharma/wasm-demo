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

var wasmSolutionArr = new Array(9);
for(let i = 0; i < 9; i++) {
      wasmSolutionArr[i] = new Array(9);
      for(let j = 0; j < 9; j++) {
        //console.log(j)
        wasmSolutionArr[i][j] = 0;
      }
  }
function getWasmModel() {
  instanceP.then(instance => {
    
    for(let i = 0; i < 9; i++) {
      //console.log("for loop")
      wasmSolutionArr[i] = new Array(9);
      for(let j = 0; j < 9; j++) {
        //console.log(wasmSolutionArr[i][j])
        wasmSolutionArr[i][j] = instance.instance.exports.getModel(i, j);
        //console.log(wasmSolutionArr[i][j])
      }
    }
    
  });
  //console.log("whats");
  //getWasmModel2();
   console.log(wasmSolutionArr);
  return wasmSolutionArr;
}

function getWasmModel2() {
  instanceP.then(instance => {
    
    for(let i = 0; i < 9; i++) {
      //console.log("for loop")
      wasmSolutionArr[i] = new Array(9);
      for(let j = 0; j < 9; j++) {
        //console.log(wasmSolutionArr[i][j])
        wasmSolutionArr[i][j] = instance.instance.exports.getModel(i, j);
        //console.log(wasmSolutionArr[i][j])
      }
    }
    
  });
}