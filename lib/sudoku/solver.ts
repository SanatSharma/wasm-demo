
var marray: int[][] = new Array(10);
export function calcMandel(coorX: int, coorY: int) {
    var xmin: int = -500, ymin: int = -500, xmax: int = 500, ymax: int = 500;
    var width: int = xmax - xmin;
    var height: int = ymax - ymin;
  
    for (var h: int = 0; h < 10; h++) {
        marray[h] = new Array(10);
    }
    for (var i: int = coorX; i < coorX + 10; i++) {
        for (var j: int = coorY; j < coorY + 10; j++) {
            var x0: double = (i - xmin) / (width * 3.5);
            var y0: double = (j - ymin) / (height * 2);
            var x: double = 0;
            var y: double = 0;
            var iteration: int = 0;
            var max_iteration: int = 1000;
            for (; iteration < max_iteration && (x * x + y * y < 4); iteration++) {
                var xtemp: double = x * x - y * y + x0;
                y = 2 * x * y + y0;
                x = xtemp;
            }
            marray[i - coorX][j - coorY] = iteration;
        }
    }
}

export function getModel(i:int, j: int): int {
    return marray[i][j];
}



// //type int = number;

// var modelLength: int = 9;
// var model: int[][] = new Array(9);
// var preSetNumbers: int[][] = new Array(9);

// function setBoard(): void {
//     model[0][0] = 9 ;
//     model[0][3] = 2 ;
//     model[0][6] = 7 ;
//     model[0][7] = 5 ;

    
//     model[1][0] = 6 ;
//     model[1][4] = 5 ;
//     model[1][7] = 4 ;
    

//     model[2][1] = 2 ;
//     model[2][3] = 4 ;
//     //model[2][7] = 1 ;
//     model[2][6] = 3;

//     //model[3][0] = 2 ;
//     model[3][2] = 8 ;

//     //model[4][1] = 7 ;
//     model[4][3] = 5 ;
//     model[4][5] = 9 ;
//     model[4][7] = 6 ;

//     model[5][6] = 4 ;
//     model[5][8] = 1 ;

//     model[6][1] = 1 ;
//     model[6][5] = 5 ;
//     model[6][7] = 8 ;

//     model[7][1] = 9 ;
//     model[7][4] = 7 ;
//     model[7][8] = 4 ;

//     model[8][1] = 8 ;
//     model[8][2] = 2 ;
//     model[8][4] = 4 ;
// }

// function cleanup(): void {
//     for (let i: int = 0; i < modelLength; i++) {
//         for (let j: int = 0; j < modelLength; j++) {
//             model[i][j] = 0;
//         }
//     }
//     setBoard(); 
// }

// function initBoard(): void {
//     let i: int = 0;
//     let j: int = 0;
    
//     for (i = 0; i < modelLength; i++) {
//         model[i] = new Array(9);
//         for (j = 0; j < modelLength; j++) {
//             model[i][j] = 0;
//         }
//     }  

//     setBoard();
//     //console.log("init arr " + model);

//  //   model[8][8] = 6 ;

//     // Create the initial board
// //     model[0][0] = randomArr[0];
// //     model[0][3] = randomArr[1];
// //     model[0][6] = randomArr[2];
// //     model[0][7] = randomArr[3];
// //     model[1][0] = randomArr[4];
// //     model[1][4] = randomArr[5];
// //     model[1][7] = randomArr[6];
// //     model[2][1] = randomArr[7];
// //     model[2][3] = randomArr[8];
// //     //model[2][7] = randomArr[9];
// //     model[2][6] = randomArr[10];
// //     //model[3][0] = randomArr[11];
// //     model[3][2] = randomArr[12];
// //     //model[4][1] = randomArr[13];
// //     model[4][3] = randomArr[14];
// //     model[4][5] = randomArr[15];
// //     model[4][7] = randomArr[16];
// //     model[5][6] = randomArr[17];
// //     model[5][8] = randomArr[18];
// //     model[6][1] = randomArr[19];
// //     model[6][5] = randomArr[20];
// //     model[6][7] = randomArr[21];
// //     model[7][1] = randomArr[22];
// //     model[7][4] = randomArr[23];
// //     model[7][8] = randomArr[24];
// //     model[8][1] = randomArr[25];
// //     model[8][2] = randomArr[26];
// //     model[8][4] = randomArr[27];
// //     // model[8][8] = randomArr[28];
// //    // console.log("init " +model);
//    for (i = 0; i < 9; i++) {
//         preSetNumbers[i] = new Array(9);
//         for (j = 0; j < 9; j++) {
//             if(model[i][j] == 0) {
//                 preSetNumbers[i][j] = 0;
//             }
//             else {
//                 preSetNumbers[i][j] = 1;
//             }
//         }
//     }
// }

// function main(): int {
//     //console.log(model);
//     //solve(0,0);
//     let bool: int = 0;
//     let firstTime: int = 0;
//     let k: int = 0;
//     let firstValueIndex: int = 0;
//     let goingBackLoop: int = 0;
//     let goingForward: int = 1;
//     let indexLastGBLoop: int = 10;
//     for(let i: int = 0; i < 9; i++) {
//         //console.log("new row");
//         for(let j: int = 0; j < 9; j++) {
//             if(i == 3 && j == 1) {
//                // console.log(j);
//             }
//             if(bool == 0 && model[i][j] == 0) {
//                 firstTime = 1;
//             }

//             if(firstTime == 1) {
//                 bool = 1;
//                 if(goingBackLoop == 1 && goingForward == 0) {
//                     k = model[i][j];
//                     if(k >= firstValueIndex) {
//                        if(k == firstValueIndex) {
//                            k++;
//                        } 
//                        while(k < 10 && bool == 1) {
//                           if(checkRow(i, k) == 1 && checkCol(j, k) == 1) {
//                             model[i][j] = k;
//                             bool = 0;
//                             firstTime = 0;
//                             goingForward = 1;
//                           }
//                           k++; 
//                        }
//                     }
//                 }
//                 else {
//                     k = 1;
//                     while(k < 10 && bool == 1) {
//                         if(checkRow(i, k) == 1 && checkCol(j, k) == 1) {
//                             model[i][j] = k;
//                             bool = 0;
//                             firstTime = 0;
//                             goingBackLoop = 0;
//                             goingForward = 1;
//                         }
//                         k++;
//                     }
//                 } 
//             } 
//             if(bool == 1) {
//                 if(j == 0) {
//                     if(preSetNumbers[i][j] == 0){
//                         model[i][j] = 0;
//                     }
                    
//                     if(goingBackLoop == 0 || indexLastGBLoop == j) {
//                         firstValueIndex = model[i - 1][8];
//                         indexLastGBLoop = 8;
//                     }
//                     i = i - 1;
//                     j = 7;
//                     goingBackLoop = 1;
//                     goingForward = 0;
//                 }
//                 else {
//                     if(preSetNumbers[i][j] == 0) {
//                         model[i][j] = 0;
//                     }
//                     if(goingBackLoop == 0 || indexLastGBLoop == j) {
//                         firstValueIndex = model[i][j - 1];
//                         indexLastGBLoop = j - 1;
//                     }
//                     j = j - 2;
//                     goingBackLoop = 1;
//                     goingForward = 0;
//                 }
//             }

//         }
//     }
//     // for(let h = 0; h < 9; h++) {
//     //     console.log(model[h]);
//     // }
//     // console.log(model);
    
//     cleanup();

//     // for(let h = 0; h < 9; h++) {
//     //     console.log(model[h]);
//     // }
//     // console.log(model);
//     // return model[8][3];

// }

// //RECURSIVE SOLUTION

// //function solve(row, col) {
// //     if (row > 8) {
// //         // finished computing the board
// //         //console.log("solution arr " + model);
// //         //const after = performance.now()
// //         //time = (after - before);
// //         //console.log(time);
// //          console.log(model);
// //         // throw new Error("solution");
// //         throw new Error("solution");
// //     }
// //     else if (model[row][col] != 0) {
// //          nextElem(row, col);
// //     }
// //     else {
// //         for (var i = 1; i <= 9; i++) {
// //             if (checkRow(row, i) && checkCol(col, i) && checkBox(row, col, i)) {
// //                 model[row][col] = i;
// //                  nextElem(row, col);
        
// //             }
// //         }
// //         model[row][col] = 0;
// //     }
// // }
// // function nextElem(row, col) {
// //     if (col < 8) {
// //         // can go to next element in column
// //         return solve(row, col + 1);
// //     }
// //     else {
// //         // reached the end of the row. Move on to the next row
// //         return solve(row + 1, 0);
// //     }
// // }
// // // return int instead of boolean to work with AssemblyScript
// // // checks if the element is present in the row

// function checkRow(row: int, value: int): int {
//     for (var i: int = 0; i < modelLength; i++) {
//         if (value == model[row][i])
//             return 0;
//     }
//     return 1;
// }
// // // checks if the element is present in the column
// function checkCol(col: int, value: int): int {
//     for (var i: int = 0; i < modelLength; i++) {
//         if (value == model[i][col])
//             return 0;
//     }
//     return 1;
// }
// // checks if the element is present in the box
// // function checkBox(row, col, value) {
// //     // Need to floor to get integer value
// //     row = ((row / 3) | 0) * 3;
// //     col = ((col / 3) | 0) * 3;
// //     for (var i = 0; i < 3; i++) {
// //         for (var j = 0; j < 3; j++) {
// //             if (model[row + i][col + j] == value)
// //                 return 0;
// //         }
// //     }
// //     return 1;
// // }

// // function getJSModel() {
// //     return model;
// // }
// // function getTime() {
// //     return time;
// // }
