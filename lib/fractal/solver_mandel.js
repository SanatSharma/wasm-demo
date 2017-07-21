
var xmin = -10, ymin = -10, xmax = 10, ymax = 10;
var width = xmax - xmin;
var height = ymax - ymin;
var marray = new Array(width);
function initArray() {
    for (var i = 0; i < width; i++) {
        marray[i] = new Array(height);
    }
}
function calcMandel() {
    initArray();
    for (var i = 0; i < width; i++) {
        for (var j = ymin; j < height; j++) {
            var x0 = (i - xmin) / (width * 3.5);
            var y0 = (j - ymin) / (height * 2);
            var x = 0;
            var y = 0;
            var iteration = 0;
            var max_iteration = 1000;
            for (; iteration < max_iteration && (x * x + y * y < 4); iteration++) {
                var xtemp = x * x - y * y + x0;
                y = 2 * x * y + y0;
                x = xtemp;
            }
            marray[i][j] = iteration;
        }
    }
}

