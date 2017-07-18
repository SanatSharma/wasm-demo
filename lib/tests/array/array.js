// TS:
// function ArrayTest(n: number): number {
//   let myArray = new Array[n];
//   let i: number;
//   for (i = 0; i < n; i++) {
//     myArray[i] = i;
//   }
//   return myArray[n - 1];
// }

function ArrayTest(n) {
    var myArray = new Array(n);
    var i;
    for (i = 0; i < n; i++) {
        myArray[i] = i;
    }
    return myArray[n - 1];
}
