console.time("execution");
var model = new Array(16);
var modelLength = 16;
main();
function initBoard() {
    var i = 0;
    var j = 0;
    for (i = 0; i < modelLength; i++) {
        model[i] = new Array(16);
        for (j = 0; j < modelLength; j++) {
            model[i][j] = 0;
        }
    }
    // Create the initial board
    // model[0][2] = 8;
    // model[0][6] = 1;
    // model[0][7] = 5;
    // model[1][0] = 4;
    // model[1][2] = 6;
    // model[1][3] = 5;
    // model[1][5] = 9;
    // model[1][7] = 8;
    // model[2][5] = 8;
    // model[4][2] = 2;
    // model[4][4] = 4;
    // model[4][8] = 3;
    // model[5][0] = 3;
    // model[5][3] = 8;
    // model[5][5] = 1;
    // model[6][0] = 9;
    // model[6][4] = 7;
    // model[7][0] = 6;
    // model[7][8] = 4;
    // model[8][0] = 1;
    // model[8][1] = 5;
    // model[8][7] = 9;  
    
    // model[0][1] = 15;
    // model[0][2] = 7;  
    // model[0][3] = 4;  
    // model[0][4] = 13;  
    // model[0][5] = 14;  
    // model[0][8] = 6;  
    // model[0][9] = 8;
    // model[0][12] = 11;  
    // model[0][14] = 16;  
    
    // model[1][0] = 6;  
    // model[1][3] = 11;
    // model[1][4] = 5;
    // model[1][9] = 4;  
    // model[1][10] = 7;
    // model[1][13] = 1;
    // model[1][15] = 12;  
  
    // model[2][2] = 14;
    // model[2][11] = 16;
    // model[2][12] = 8;
    // model[2][13] = 7;
    // model[2][14] = 6;

    // model[3][1] = 1;
    // model[3][2] = 10;
    // model[3][3] = 16;
    // model[3][5] = 6;
    // model[3][6] = 8;
    // model[3][10] = 13;

    // model[4][1] = 16;
    // model[4][8] = 10;
    // model[4][9] = 15;

    // model[5][3] = 1;
    // model[5][4] = 7;
    // model[5][5] = 10;
    // model[5][6] = 14;
    // model[5][8] = 12;
    // model[5][9] = 16;
    // model[5][11] = 13;
    // model[5][13] = 4;

    // model[6][1] = 9;
    // model[6][2] = 6;
    // model[6][3] = 3;
    // model[6][4] = 2;
    // model[6][8] = 4;
    // model[6][15] = 7;

    // model[7][1] = 4;
    // model[7][2] = 13;
    // model[7][7] = 3;
    // model[7][8] = 9;
    // model[7][9] = 1;
    // model[7][11] = 8;
    // model[7][13] = 14;
    // model[7][14] = 5;
    // model[7][15] = 11;
    
    // model[8][0] = 2;
    // model[8][1] = 3;
    // model[8][2] = 12;
    // model[8][4] = 14;
    // model[8][6] = 16;
    // model[8][7] = 13;
    // model[8][8] = 1;
    // model[8][13] = 10;
    // model[8][14] = 11;

    // model[9][0] = 14;
    // model[9][7] = 2;
    // model[9][11] = 12;
    // model[9][12] = 4;
    // model[9][13] = 6;
    // model[9][14] = 14;

    // model[10][2] = 4;
    // model[10][4] = 1;
    // model[10][6] = 15;
    // model[10][7] = 6;
    // model[10][9] = 13;
    // model[10][10] = 10;
    // model[10][11] = 5;
    // model[10][12] = 3;

    // model[11][6] = 4;
    // model[11][7] = 10;
    // model[11][14] = 7;

    // model[12][5] = 11;
    // model[12][9] = 12;
    // model[12][10] = 15;
    // model[12][12] = 7;
    // model[12][13] = 9;
    // model[12][14] = 4;
    
    // model[13][1] = 12;
    // model[13][2] = 5;
    // model[13][3] = 15;
    // model[13][4] = 16;
    // model[13][13] = 11;
    
    // model[14][0] = 10;
    // model[14][2] = 1;
    // model[14][5] = 9;
    // model[14][6] = 7;
    // model[14][11] = 4;
    // model[14][12] = 6;
    // model[14][15] = 3;

    // model[15][0] = 16;
    // model[15][1] = 7;
    // model[15][2] = 9;
    // model[15][3] = 6;
    // model[15][4] = 3;
    // model[15][7] = 14;
    // model[15][11] = 11;
    // model[15][12] = 13;
    // model[15][13] = 12;
    // model[15][14] = 15;


        model[0][4] = 6;
		model[0][5] = 14;
		model[0][6] = 15;
		model[0][7] = 9;
		//model[0][8] = 4;
		model[0][9] = 8;
		//model[0][10] = 13;
		model[0][11] = 7;
		
		model[1][1] = 9;
		model[1][2] = 10;
		model[1][4] = 11;
		model[1][11] = 1;
		model[1][13] = 13;
		model[1][14] = 15;
		
		model[2][1] = 4;
		model[2][2] = 1;
		model[2][3] = 13;
		model[2][4] = 10;
		model[2][5] = 2;
		model[2][7] = 3;
		model[2][8] = 16;
		model[2][10] = 5;
		model[2][11] = 15;
		model[2][12] = 11;
		model[2][13] = 7;
		model[2][14] = 9;
		
		model[4][2] = 15;
		model[4][3] = 6;
		//model[4][4] = 5;
		model[4][6] = 16;
		//model[4][9] = 9;
		model[4][11] = 11;
		model[4][12] = 8;
		model[4][13] = 3;
		
		model[5][3] = 1;
		model[5][4] = 14;
		model[5][5] = 15;
		model[5][6] = 4;
		model[5][7] = 10;
		model[5][8] = 12;
		model[5][9] = 13;
		model[5][10] = 6;
		model[5][11] = 2;
		model[5][12] = 7;
		
		model[7][3] = 11;
		model[7][5] = 3;
		model[7][6] = 12;
		model[7][7] = 13;
		model[7][8] = 15;
		model[7][9] = 16;
		model[7][10] = 4;
		model[7][12] = 9;
		
		model[8][0] = 7;
		model[8][1] = 13;
		model[8][6] = 11;
		model[8][9] = 15;
		model[8][14] = 7;
		model[8][15] = 3;
		
		model[9][0] = 4;
		model[9][1] = 7;
		model[9][2] = 2;
		model[9][3] = 9;
		model[9][4] = 3;
		model[9][5] = 8;
		// model[9][6] = 6;
		model[9][7] = 15;
		model[9][8] = 5;
		//model[9][9] = 11;
		model[9][10] = 16;
		model[9][11] = 14;
		model[9][12] = 13;
		model[9][13] = 12;
		model[9][14] = 1;
		//model[9][15] = 10;
		
		model[10][0] = 15;
		model[10][1] = 1;
		model[10][5] = 7;
		//model[10][10] = 9;
		model[10][14] = 11;
		//model[10][15] = 5;
		
		model[12][1] = 11;
		model[12][2] = 4;
		model[12][4] = 7;
		model[12][7] = 8;
		model[12][11] = 3;
		
		model[13][0] = 7;
		model[13][1] = 10;
		model[13][2] = 13;
		model[13][4] = 12;
		//model[13][9] = 4;
		model[13][10] = 1;
		model[13][15] = 2;
		
		model[14][0] = 1;
		model[14][1] = 6;
		model[14][4] = 15;
		model[14][8] = 14;
		model[14][14] = 13;
		
		model[15][0] = 14;
		model[15][3] = 16;
		model[15][4] = 4;
		
    


}

function main() {
    initBoard();
   // for(var i = 0 ;i<20;i++){
        //console.log(1);
        solve(0,0);
   // }

   console.log("Solution");
   console.timeEnd("execution");
    
//    console.timeEnd("execution");

}


function solve(row, col) {
    if (row > 15) {
        // finished computing the board
        //console.log("1");
        // solution reached

    }
    else{
        if (model[row][col] != 0)
            nextElem(row, col);
        else {
            for (var i = 1; i <= modelLength; i++) {
                if (checkRow(row, i) && checkCol(col, i) && checkBox(row, col, i)) {
                    model[row][col] = i;
                    nextElem(row, col);
                    // if(i>10)
                    //     console.log(i);
                }
            }
            model[row][col] = 0;
        }
    }
}
function nextElem(row, col) {
    if (col < 15) {
        // can go to next element in column
        solve(row, col + 1);
    }
    else {
        // reached the end of the row. Move on to the next row
        solve(row + 1, 0);
    }
}
// return number instead of boolean to work with AssemblyScript
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
    var r = (Math.floor(row/4)) * 4;
    var c = (Math.floor(col/4)) * 4;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (model[r + i][c + j] == value)
                return 0;
        }
    }
    return 1;
}
