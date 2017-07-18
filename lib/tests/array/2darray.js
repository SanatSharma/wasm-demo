function ArrayTest(n) {
    var model = new Array(n);
    var i, j;
    for (i = 0; i < n; i++) {
        model[i] = new Array(n);
        for (j = 0; j < n; j++) {
            model[i][j] = j;
        }
    }
    return model[n - 1][n - 1];
}

