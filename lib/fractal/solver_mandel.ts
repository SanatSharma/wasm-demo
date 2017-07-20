type int = number;
type double = number;
let xmin: int = -100, ymin: int = -100, xmax: int = 100, ymax:int = 100;
let marray: int[][] = new Array(xmax-xmin);

function initArray(): void {
    for (let i:int = 0; i < (xmax-xmin); i++) {
        marray[i] = new Array(ymax-ymin);
    }

function calcMandel(maxIter:int): void {
    let width:double = xmax-xmin;
    let height: double = ymax-ymin;
    for (let i:int = xmin; i < xmax; i++){
        for (let j:int = ymin; j< ymax; j++){
            let x0: double = (i - xmin)/(width*3.5)
            let y0: double = (j - ymin)/(height*2)
            let x: double = 0;
            let y: double = 0;
            let iteration:int = 0;
            let max_iteration = 1000;
            for ( ; iteration<max_iteration && (x*x + y*y < 4); iteration++) {
                let xtemp:double = x*x - y*y + x0;
                y = 2*x*y + y0;
                x = xtemp;
            }
            marray[i][j]=iteration;
        }
    }   
}

