function ArrayTest(n) {
    var myArray = new Array(n);
    var i;
    for (i = 0; i < n; i++) {
        myArray[i] = i;
    }
    return myArray[n - 1];
}
