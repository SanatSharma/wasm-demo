'use strict';

importScripts("worker-common.js");

const instanceP =
    fetch('itern.wasm').then(response =>
      response.arrayBuffer()
    ).then(bytes =>
      WebAssembly.instantiate(bytes)
    );



instanceP.then(instance => {

  const iter = () => {
    setTimeout(() => {
            const before = performance.now();
            //for (let i = 0; i < 10; i++) {
                instance.instance.exports.fib(10000000);
            //}\
            const after = performance.now();
            postMessage(after - before);
            iter();
        }, 0);
  };
  iter();
}
);

// instanceP.then(instance => {
//  var t0 = performance.now();
//     instance.instance.exports.fib(10000000);
//     var t1 = performance.now();
//     postMessage(t1-t0);
// });
