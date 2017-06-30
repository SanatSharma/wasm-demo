let model: number[][];
let modelLength: number = 9;

main();

function initBoard() {
    let i: number = 0;
    let j: number = 0;

    for (i = 0; i < modelLength; i++){
        for (j = 0; j < modelLength; j++){
            model[i][j] = 0;
        }
    }

    // Create the initial situation
	model[0][0] = 9 ;
	model[0][3] = 2 ;
	//model[0][6] = 7 ;
	model[0][7] = 5 ;

    /*model[1][0] = 6 ;
    model[1][4] = 5 ;
    model[1][7] = 4 ;*/

    model[2][1] = 2 ;
    model[2][3] = 4 ;
    //model[2][7] = 1 ;
    model[2][6] = 3;

    //model[3][0] = 2 ;
    model[3][2] = 8 ;

    //model[4][1] = 7 ;
    model[4][3] = 5 ;
    model[4][5] = 9 ;
    model[4][7] = 6 ;

    model[5][6] = 4 ;
    model[5][8] = 1 ;

    model[6][1] = 1 ;
    model[6][5] = 5 ;
    model[6][7] = 8 ;

    model[7][1] = 9 ;
    model[7][4] = 7 ;
    model[7][8] = 4 ;

    model[8][1] = 8 ;
    model[8][2] = 2 ;
    model[8][4] = 4 ;
    //model[8][8] = 6 ;
}

function main() {

    console.log("HERE");
    initBoard();
    solve(0,0);
}

function solve (row: number, col: number) {
    if (row > 8){
        // finished computing the board
        console.log(model);
    }

    console.log("REACHING HERE");
    if (model[row][col] != 0)
        nextElem (row, col);
    else{
        for (let i: number = 1; i <= 9; i++){
            if(!checkRow(row, i) && !checkCol(col, i) && !checkBox(row, col, i)){
                model[row][col] = i;
                nextElem (row, col);
            }
        }

        model[row][col] = 0;

    }

}

function nextElem (row: number, col: number){
    if (col < 8){
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
function checkRow (row: number, value: number): number{
    for (let i: number = 0; i < modelLength; i++){
        if (value == model[row][i])
            return 1;
    }
    return 0;
}

// checks if the element is present in the column
function checkCol (col: number, value: number): number{
    for (let i: number = 0; i < modelLength; i++){
        if (value == model[i][col])
            return 1;
    }
    return 0;
}

// checks if the element is present in the box
function checkBox (row: number, col: number, value: number): number{
    row = (row % 3) * 3;
    col = (col % 3) * 3;

    for (let i: number = 0; i < 3; i++){
        for (let j: number = 0; j < 3; j++){
            if (model[row + i][col + j] == value)
                return 1;
        }
    }

    return 0;
}


