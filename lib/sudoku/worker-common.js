function doIteration(id, fn) {
    const wideLoop = () => {
        setTimeout(() => {
            let before = 0;
            let after = 0;
            let time = 0;
            before = performance.now();
            for(let i = 0; i < 10; i++) {
                //initBoard();
                //before = performance.now();
                fn();
                //after = performance.now();
                //time += (after - before);
            }
            after = performance.now();
            postMessage(after - before);
            wideLoop();
        }, 0);
    };

    wideLoop();
}
