console.time("execution");
var model = new Array(9);
var modelLength = 9;
main();
function initBoard() {
    var i = 0;
    var j = 0;
    for (i = 0; i < modelLength; i++) {
        model[i] = new Array(9);
        for (j = 0; j < modelLength; j++) {
            model[i][j] = 0;
        }
    }
    // Create the initial board
    // model[0][0] = 9 ;
	// 	model[0][3] = 2 ;
	// 	//model[0][6] = 7 ;
	// 	model[0][7] = 5 ;

	// //	  model[1][0] = 6 ;
    // //  model[1][4] = 5 ;
    // //  model[1][7] = 4 ;

	// 	model[2][1] = 2 ;
	// 	model[2][3] = 4 ;
	// 	//    model[2][7] = 1 ;
	// 	model[2][6] = 3;

	// 	// model[3][0] = 2 ;
	// 	model[3][2] = 8 ;

	// 	//    model[4][1] = 7 ;
	// 	model[4][3] = 5 ;
	// 	model[4][5] = 9 ;
	// 	model[4][7] = 6 ;

	// 	model[5][6] = 4 ;
	// 	model[5][8] = 1 ;

	// 	model[6][1] = 1 ;
	// 	model[6][5] = 5 ;
	// 	model[6][7] = 8 ;

	// 	model[7][1] = 9 ;
	// 	model[7][4] = 7 ;
	// 	model[7][8] = 4 ;

	// 	model[8][1] = 8 ;
	// 	model[8][2] = 2 ;
	// 	model[8][4] = 4 ;
	// 	// model[8][8] = 6 ;
    model[0][2] = 8;
    model[0][6] = 1;
    model[0][7] = 5;
    model[1][0] = 4;
    model[1][2] = 6;
    model[1][3] = 5;
    model[1][5] = 9;
    model[1][7] = 8;
    model[2][5] = 8;
    model[4][2] = 2;
    model[4][4] = 4;
    model[4][8] = 3;
    model[5][0] = 3;
    model[5][3] = 8;
    model[5][5] = 1;
    model[6][0] = 9;
    model[6][4] = 7;
    model[7][0] = 6;
    model[7][8] = 4;
    model[8][0] = 1;
    model[8][1] = 5;
    model[8][7] = 9;
    
    
    
    
    
    
    
    
}
function main() {
    initBoard();
    solve(0, 0);
}
function solve(row, col) {
    if (row > 8) {
        // finished computing the board
        console.log("Solution Reached");
        console.log(model);
        console.timeEnd("execution");
    }
    if (model[row][col] != 0)
        nextElem(row, col);
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
    var r = (Math.floor(row/3)) * 3;
    var c = (Math.floor(col/3)) * 3;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (model[r + i][c + j] == value)
                return 0;
        }
    }
    return 1;
}
