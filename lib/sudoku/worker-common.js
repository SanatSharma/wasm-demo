var objToPost = {model:[], time:0};

function doIteration(id, fn) {
    const wideLoop = () => {
        setTimeout(() => {
            let before = 0;
            let after = 0;
            let time = 0;
            //before = performance.now();
            for(let x = 0; x < 10; x++) {
                //initBoard();
                before = performance.now();
                var toReturnArr = new Array(1000);
                
                for(let h = 0; h < toReturnArr.length; h++) {
                    toReturnArr[h] = new Array(toReturnArr.length);
                }
                var tempArr;
                for(let i = 0; i < 1000; i = i + 10) {
                    for(let j = 0; j < 1000; j = j + 10) {
                        tempArr = fn(i, j);
                        for(let k = i; k < i + 10; k ++) {
                            for( let s = j; s < j + 10; s++) {
                                toReturnArr[k][s] = tempArr[k - i][s - j];
                            }
                        }
                    }
                }
                after = performance.now();
                objToPost.model = toReturnArr;
                objToPost.time = after - before;
                postMessage(objToPost);
                //after = performance.now();
                //time += (after - before);
            }
            after = performance.now();
            //postMessage(after - before);
            //wideLoop();
        }, 0);
    };

    wideLoop();
}

function doWasmIteration(id, fn, fn2) {
    const wideLoop = () => {
        setTimeout(() => {
            let before = 0;
            let after = 0;
            let time = 0;
            //before = performance.now();
            for(let x = 0; x < 10; x++) {
                //initBoard();
                before = performance.now();
                var toReturnArr = new Array(1000);
                
                for(let h = 0; h < toReturnArr.length; h++) {
                    toReturnArr[h] = new Array(toReturnArr.length);
                }
                var tempArr;
                for(let i = 0; i < 1000; i = i + 10) {
                    for(let j = 0; j < 1000; j = j + 10) {
                        fn(i, j);
                        for(let k = i; k < i + 10; k++) {
                            for( let s = j; s < j + 10; s++) {
                                toReturnArr[k][s] = fn2(k - i, s - j);
                            }
                        }
                    }
                }
                after = performance.now();
                objToPost.model = toReturnArr;
                objToPost.time = after - before;
                postMessage(objToPost);
                //after = performance.now();
                //time += (after - before);
            }
            after = performance.now();
            //postMessage(after - before);
            //wideLoop();
        }, 0);
    };

    wideLoop();
}