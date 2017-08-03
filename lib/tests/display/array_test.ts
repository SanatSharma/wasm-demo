export function sumArray(): number{
    let arr: number[] = [1,2,3,4,5];

    for(let i: number = 0; i < arr.length; i++){
        arr[i] = arr[i] + (i+1);   // [2,4,6,8,10]
    }

    let sum: number = 0;
    for(let i: number = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}