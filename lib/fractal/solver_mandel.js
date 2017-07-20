var xmin = -100, ymin = -100, xmax = 100, ymax = 100;
var width = xmax - xmin;
var height = ymax - ymin;
var marray = new Array(width);
function initArray() {
    for (var i = 0; i < width; i++) {
        marray[i] = new Array(height);
    }
}
function calcMandel() {

    for (var i = xmin; i < xmax; i++) {
        for (var j = ymin; j < ymax; j++) {
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
            marray[i-xmin][j-xmin] = iteration;
        }
    }
}

// initArray();

// calcMandel();
// for (var i = xmin; i < xmax; i++) {
//     console.log(marray[i-xmin])
    // for (var j = ymin; j < ymax; j++) {
    //     console.log(marray[i-xmin][j-xmin]);
    // }
}

