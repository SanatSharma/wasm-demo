type int = number;

let modelLength: int = 9;
let model: int[][] = new Array(9);

export function initBoard(): void {
    let i: int = 0;
    let j: int = 0;

    for (i = 0; i < modelLength; i++){
        model[i] = new Array(9);
        for (j = 0; j < modelLength; j++){
            model[i][j] = 0;
        }
    }

    
    // Create the initial board
    model[0][0] = 9 ;
    model[0][3] = 2 ;
    model[0][6] = 7 ;
    model[0][7] = 5 ;

    
    model[1][0] = 6 ;
    model[1][4] = 5 ;
    model[1][7] = 4 ;
    

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

export function main(): void {
    solve(0,0);
}

function solve (row: int, col: int): void {
    if (row > 8){
        // finished computing the board
    }

    else if (model[row][col] != 0)
        nextElem (row, col);
    else{
        for (let i: int = 1; i <= 9; i++){
            if(checkRow(row, i) && checkCol(col, i) && checkBox(row, col, i)){
                model[row][col] = i;
                nextElem (row, col);
            }
        }

        model[row][col] = 0;

    }

}

function nextElem (row: int, col: int): void {
    if (col < 8){
        // can go to next element in column
        solve (row, col + 1);
    }
    else{
        // reached the end of the row. Move on to the next row
        solve (row + 1, 0);
    }
}

// return int instead of boolean to work with AssemblyScript

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
    row = ((row / 3) | 0) * 3;
    col = ((row / 3) | 0) * 3;

    for (let i: int = 0; i < 3; i++){
        for (let j: int = 0; j < 3; j++){
            if (model[row + i][col + j] == value)
                return 0;
        }
    }
    return 1;
}
