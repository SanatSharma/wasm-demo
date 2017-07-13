
var modelLength = 9;
var model = new Array(9);
var time = 0;
var before;
function initBoard(randomArr) {
    var i = 0;
    var j = 0;
    for (i = 0; i < modelLength; i++) {
        model[i] = new Array(9);
        for (j = 0; j < modelLength; j++) {
            model[i][j] = 0;
        }
    }  

    // var k = 0;
    // for (i = 0; i < modelLength; i++) {
    //     for (j = 0; j < modelLength; j % 2 == 0? j++ : j = j + 2) {
    //         model[i][j] = randomArr[k];
    //         if(k == 8) {
    //             k = 0;
    //         }
    //         else {
    //             k++;
    //         }
            
    //     }
    // }
    //console.log("init arr " + model);
    // model[0][0] = 9;
    // model[0][3] = 2;
    // model[0][6] = 7;
    // model[0][7] = 5;
    // model[1][0] = 6;
    // model[1][4] = 5;
    // model[1][7] = 4;
    // model[2][1] = 2;
    // model[2][3] = 4;
    // model[2][7] = 1 ;
    // model[2][6] = 3;
    // model[3][0] = 2 ;
    // model[3][2] = 8;
    // model[4][1] = 7 ;
    // model[4][3] = 5;
    // model[4][5] = 9;
    // model[4][7] = 6;
    // model[5][6] = 4;
    // model[5][8] = 1;
    // model[6][1] = 1;
    // model[6][5] = 5;
    // model[6][7] = 8;
    // model[7][1] = 9;
    // model[7][4] = 7;
    // model[7][8] = 4;
    // model[8][1] = 8;
    // model[8][2] = 2;
    // model[8][4] = 4;
   // model[8][8] = 6;

    // Create the initial board
    model[0][0] = randomArr[0];
    model[0][3] = randomArr[1];
    model[0][6] = randomArr[2];
    model[0][7] = randomArr[3];
    model[1][0] = randomArr[4];
    model[1][4] = randomArr[5];
    model[1][7] = randomArr[6];
    model[2][1] = randomArr[7];
    model[2][3] = randomArr[8];
    model[2][7] = randomArr[9];
    model[2][6] = randomArr[10];
    model[3][0] = randomArr[11];
    model[3][2] = randomArr[12];
    model[4][1] = randomArr[13];
    model[4][3] = randomArr[14];
    model[4][5] = randomArr[15];
    model[4][7] = randomArr[16];
    model[5][6] = randomArr[17];
    model[5][8] = randomArr[18];
    model[6][1] = randomArr[19];
    model[6][5] = randomArr[20];
    model[6][7] = randomArr[21];
    model[7][1] = randomArr[22];
    model[7][4] = randomArr[23];
    model[7][8] = randomArr[24];
    model[8][1] = randomArr[25];
    model[8][2] = randomArr[26];
    model[8][4] = randomArr[27];
    // model[8][8] = randomArr[28];
    console.log("init " +model);
}
function main(randomArr) {
    before = performance.now();
    initBoard(randomArr);
    solve(0, 0);
}
function solve(row, col) {
    if (row > 8) {
        // finished computing the board
        console.log("solution arr " + model);
        const after = performance.now()
        time = (after - before);
        console.log(time);
        throw new Error("solution");
    }
    else if (model[row][col] != 0) {
        nextElem(row, col);
    
    }
    else {
        for (var i = 1; i <= 9; i++) {
            if (checkRow(row, i) && checkCol(col, i) && checkBox(row, col, i)) {
                model[row][col] = i;
                nextElem(row, col);
        
            }
        }
        model[row][col] = 0;
    }
}
function nextElem(row, col) {
    if (col < 8) {
        // can go to next element in column
        solve(row, col + 1);
    }
    else {
        // reached the end of the row. Move on to the next row
        solve(row + 1, 0);
    }
}
// return int instead of boolean to work with AssemblyScript
// checks if the element is present in the row
function checkRow(row, value) {
    for (var i = 0; i < modelLength; i++) {
        if (value == model[row][i])
            return 0;
    }
    return 1;
}
// checks if the element is present in the column
function checkCol(col, value) {
    for (var i = 0; i < modelLength; i++) {
        if (value == model[i][col])
            return 0;
    }
    return 1;
}
// checks if the element is present in the box
function checkBox(row, col, value) {
    // Need to floor to get integer value
    row = ((row / 3) | 0) * 3;
    col = ((col / 3) | 0) * 3;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (model[row + i][col + j] == value)
                return 0;
        }
    }
    return 1;
}

function getModel() {
    return model;
}
function getTime() {
    return time;
}
