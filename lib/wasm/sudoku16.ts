let model: int[][] = new Array(16);
let modelLength: int = 16;
export declare function error(): void ;

export function initBoard() {
    let i: int = 0;
    let j: int = 0;

    for (i = 0; i < modelLength; i++){
        model[i] = new Array(16);
        for (j = 0; j < modelLength; j++){
            model[i][j] = 0;
        }
    }    
        model[0][4] = 6;
		model[0][5] = 14;
		model[0][6] = 15;
		model[0][7] = 9;
	//	model[0][8] = 4;
		model[0][9] = 8;
	//	model[0][10] = 13;
		model[0][11] = 7;
		
		model[1][1] = 9;
		model[1][2] = 10;
		model[1][4] = 11;
		model[1][11] = 1;
	//	model[1][13] = 13;
		model[1][14] = 15;
		
		model[2][1] = 4;
		model[2][2] = 1;
		model[2][3] = 13;
		model[2][4] = 10;
		model[2][5] = 2;
	//	model[2][7] = 3;
		model[2][8] = 16;
		model[2][10] = 5;
	//	model[2][11] = 15;
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

export function getElement(row: int, col: int): int{
    return model[row][col];
}

export function main(){

    initBoard();
    solve(0,0);
}

function solve (row: int, col: int) {
    if (row > modelLength-1){
        // finished computing the board
        error();        
    }

    if (model[row][col] != 0){
        nextElem (row, col);
    }
    else{
        for (let i: int = 1; i <= modelLength; i++){
            if(checkRow(row, i) && checkCol(col, i) && checkBox(row, col, i)){
                model[row][col] = i;
                nextElem (row, col);
            }
        }

        model[row][col] = 0;

    }

}

function nextElem (row: int, col: int){
    if (col < modelLength-1){
        // can go to next element in column
        solve (row, col + 1);
    }
    else{
        // reached the end of the row. Move on to the next row
        solve (row + 1, 0);
    }
}

// return number instead of boolean to work with AssemblyScript

// checks if the element is present in the row
function checkRow (row: int, value: int): int{
    for (let i: int = 0; i < modelLength; i++){
        if (value == model[row][i])
            return 0;
    }
    return 1;
}

// checks if the element is present in the column
function checkCol (col: int, value: int): int{
    for (let i: int = 0; i < modelLength; i++){
        if (value == model[i][col])
            return 0;
    }
    return 1;
}

// checks if the element is present in the box
function checkBox (row: int, col: int, value: int): int{
    // Need to floor to get integer value
    row = (row / 4) * 4;
    col = (col / 4) * 4;

    for (let i: int = 0; i < 4; i++){
        for (let j: int = 0; j < 4; j++){
            if (model[row + i][col + j] == value)
                return 0;
        }
    }
    return 1;
}
