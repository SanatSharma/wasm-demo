var xmin: int = -10, ymin: int = -10, xmax: int = 10, ymax: int = 10;
var width: int = xmax - xmin;
var height: int = ymax - ymin;
var marray: int[][] = new Array(width);
function initArray() {
    for (var i: int = 0; i < width; i++) {
        marray[i] = new Array(height);
    }
}
function calcMandel() {
    initArray();
    for (var i: int = xmin; i < xmax; i++) {
        for (var j: int = ymin; j < ymax; j++) {
            var x0: double = (i - xmin) / (width * 3.5);
            var y0: double = (j - ymin) / (height * 2);
            var x: double = 0;
            var y: double = 0;
            var iteration: int = 0;
            var max_iteration: int = 10;
            for (; iteration < max_iteration && (x * x + y * y < 4); iteration++) {
                var xtemp: double = x * x - y * y + x0;
                y = 2 * x * y + y0;
                x = xtemp;
            }
            marray[i-xmin][j-ymin] = iteration;
        }
    }
}