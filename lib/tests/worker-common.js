function doIteration(id, fn) {
    const wideLoop = () => {
        setTimeout(() => {
            const before = performance.now();
            for (let i = 0; i < 1000; i++) {
                fn();
            }
            const after = performance.now();
            postMessage(after - before);
            wideLoop();
        }, 0);
    };

    wideLoop();
}
