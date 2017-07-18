
var bool = true;
var objToPost = {model:[], time:0};
var after = 0;
var before = 0;

function doIteration(id, fn) {

        const wideLoop = () => {
            setTimeout(() => {
                // try {
                //     console.log("entered for loop")
                //     for(let i = 0; i< 10; i++) {
                //         if(id == "js"){
                //             console.log("before")
                //             before = performance.now();
                //             console.log("after")
                //             console.log(before);
                //             console.log(fn(getRandomArr()));
                //         }
                //     }
                //     before = performance.now();
                //     console.log(fn());
                //     after = performance.now();
                //     objToPost.model = getWasmModel();
                //     console.log(objToPost.model)
                //     objToPost.time = (after - before);
                //     console.log(objToPost.time);
                //      postMessage(objToPost);
                //     wideLoop();
                   
                // }
                // catch(err) {
                //     console.log("error")
                //     after = performance.now();
                //     objToPost.model = getJSModel();
                //     console.log(getJSModel());
                //     objToPost.time = (after - before);
                //     postMessage(objToPost);
                //     doIteration(id, fn);
                // }
                fn(getRandomArr());
            }, 1000);
        };

        wideLoop();
}

function getRandomArr() {
    bool = !bool;
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
            randomArr[i] = exampleSudoku1[i];
        }
    }
    console.log(randomArr);
    return randomArr;

}