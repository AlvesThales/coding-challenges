// Diagonal Difference Challenge
//
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.



function diagonalDifference(arr) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    for (let i = 0; i < arr.length; i++) {
        firstDiagonal += arr[i][i];
    }
    for (let i = 0; i < arr.length; i++) {
        secondDiagonal += arr[i][(arr.length - 1) - i];
    }
    return Math.abs(firstDiagonal - secondDiagonal);
}