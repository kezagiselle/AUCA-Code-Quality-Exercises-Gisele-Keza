function calculateMatrixSum(matrix){
    return matrix.reduce((rowSum, row) =>
        rowSum + row.reduce((colSum, num) => colSum + num, 0), 0
    );
}
console.log(calculateMatrixSum(
    [
     [1, 2, 3],
  [4, 5, 6]
]))
    