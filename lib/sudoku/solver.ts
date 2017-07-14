let modelLength: int = 9;
let model: Array<int>[] = new Array(9);
let solutionModel: Array<int>[] = new Array(9);
let counter = 0;

export function initBoard(): void {
    let i: int = 0;
    let j: int = 0;

    for (i = 0; i < modelLength; i++){
        model[i] = new Array(9);
        for (j = 0; j < modelLength; j++){
            model[i][j] = 0;
        }
    }
    let randomArr: int[] = getRandomArr();
    model[0][0] = randomArr[0];
    model[0][3] = randomArr[1];
    model[0][6] = randomArr[2];
    model[0][7] = randomArr[3];
    model[1][0] = randomArr[4];
    model[1][4] = randomArr[5];
    model[1][7] = randomArr[6];
    model[2][1] = randomArr[7];
    model[2][3] = randomArr[8];
    //model[2][7] = randomArr[9];
    model[2][6] = randomArr[10];
    //model[3][0] = randomArr[11];
    model[3][2] = randomArr[12];
    //model[4][1] = randomArr[13];
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
    // Create the initial board
    // model[0][0] = 9 ;
    // model[0][3] = 2 ;
    // model[0][6] = 7 ;
    // model[0][7] = 5 ;

    
    // model[1][0] = 6 ;
    // model[1][4] = 5 ;
    // model[1][7] = 4 ;
    

    // model[2][1] = 2 ;
    // model[2][3] = 4 ;
    // //model[2][7] = 1 ;
    // model[2][6] = 3;

    // //model[3][0] = 2 ;
    // model[3][2] = 8 ;

    // //model[4][1] = 7 ;
    // model[4][3] = 5 ;
    // model[4][5] = 9 ;
    // model[4][7] = 6 ;

    // model[5][6] = 4 ;
    // model[5][8] = 1 ;

    // model[6][1] = 1 ;
    // model[6][5] = 5 ;
    // model[6][7] = 8 ;

    // model[7][1] = 9 ;
    // model[7][4] = 7 ;
    // model[7][8] = 4 ;

    // model[8][1] = 8 ;
    // model[8][2] = 2 ;
    // model[8][4] = 4 ;
    // //model[8][8] = 6 ;
}

function getRandomArr() {
    var exampleSudoku1 = [9,2,7,5,6,5,4,2,4,1,3,2,8,7,5,9,6,4,1,1,5,8,9,7,4,8,2,4];
    var exampleSudoku2 = [0,2,7,5,6,0,4,2,4,1,0,2,8,7,5,0,6,4,1,1,0,8,9,7,4,8,0,4];
    var randomArr = new Array(28);
    // for(let i = 0; i < 9; i++) {
    //     randomArr[i] = Math.ceil(Math.random() * 9);
    // }
    // //console.log(randomArr);
    if (counter % 2 == 0){
        for(let i = 0; i < 28; i++) {
            randomArr[i] = exampleSudoku1[i];
        }
    }
    else {
        for(let i = 0; i < 28; i++) {
            randomArr[i] = exampleSudoku1[i];
        }
    }
    return randomArr;
}
export function getModel(a: int, b: int): int {
    return solutionModel[a][b];
}

export function main(): int {
    initBoard();
    return solve(0,0,0);

}

function solve (row: int, col: int, sum: int): int {
    if (row > 8){

        for (let i: int = 0; i < 9; i++){
            solutionModel[i] = new Array(9);
            for (let j: int = 0; j < 9; j++){
                solutionModel[i][j] = model[i][j];
            }
        }
        return 1;
    }

    else if (model[row][col] != 0)
        sum = nextElem (row, col, sum);
    else{
        for (let i: int = 1; i <= 9; i++){
            if(checkRow(row, i) && checkCol(col, i) && checkBox(row, col, i)){
                model[row][col] = i;
                sum = nextElem (row, col, sum);
            }
        }

        model[row][col] = 0;

    }
    return sum;
}

function nextElem (row: int, col: int, sum: int): int {
    if (col < 8){
        // can go to next element in column
        return solve (row, col + 1, sum);
    }
    else{
        // reached the end of the row. Move on to the next row
        return solve (row + 1, 0, sum);
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
    row = (row / 3) * 3;
    col = (col / 3) * 3;

    for (let i: int = 0; i < 3; i++){
        for (let j: int = 0; j < 3; j++){
            if (model[row + i][col + j] == value)
                return 0;
        }
    }
    return 1;
}
