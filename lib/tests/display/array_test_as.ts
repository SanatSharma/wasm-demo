


export function sumArray(): int{
    let arr: int[] = [1,2,3,4,5];

    for(let i: int = 0; i < 5; i++){
        arr[i] = arr[i] + (i+1);   // [2,4,6,8,10]
    }

    let sum: int = 0;
    for(let i: int = 0; i < 5; i++){
        sum = sum + arr[i];
    }
    return sum;
}



