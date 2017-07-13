var count = 0;
var bool = true;
var objToPost = {model:[], time:0}
function doIteration(id, fn) {
        const wideLoop = () => {
            setTimeout(() => {
                try {
                    //const before = performance.now();
                    for(let i = 0; i < 10; i++) {
                        count++;
                        // const before = performance.now();
                        fn(getRandomArr(bool));
                        // const after = performance.now();
                        // //console.log("solved");
                        // console.log(after - before);
                        // console.log(getModel());

                        // postMessage(getModel());
                    }
                    //const after = performance.now();
                    //console.log(after-before);
                    
                    wideLoop();
                }
                catch(err) {
                    //console.log(getModel());
                    objToPost.model = getModel();
                    objToPost.time = getTime();
                    postMessage(objToPost);
                    if(count <10000) {
                        bool = !bool;
                        doIteration(id, fn);
                    }
                }
            }, 0);
        };

        wideLoop();
}

function getRandomArr(bool) {
    
    var exampleSudoku1 = [9,2,7,5,6,5,4,2,4,1,3,2,8,7,5,9,6,4,1,1,5,8,9,7,4,8,2,4];
    var exampleSudoku2 = [0,2,7,5,6,0,4,2,4,1,0,2,8,7,5,0,6,4,1,1,0,8,9,7,4,8,0,4];
    var randomArr = new Array(exampleSudoku1.length);
    // for(let i = 0; i < 9; i++) {
    //     randomArr[i] = Math.ceil(Math.random() * 9);
    // }
    // //console.log(randomArr);
    if (bool){
        for(let i = 0; i < randomArr.length; i++) {
            randomArr[i] = exampleSudoku1[i];
        }
    }
    else {
        for(let i = 0; i < randomArr.length; i++) {
            randomArr[i] = exampleSudoku2[i];
        }
    }
    
    return randomArr;

}