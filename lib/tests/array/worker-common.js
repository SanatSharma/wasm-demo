function doIteration(id, fn, element = 0) {
    const wideLoop = () => {
        setTimeout(() => {
            const before = performance.now();
            for (let i = 0; i < 1000; i++) {
                if(element > 0);
                    fn(element);
            }
            const after = performance.now();
            postMessage(after - before);
            wideLoop();
        }, 0);
    };

    wideLoop();
}
