function diagonalDifference(arr) {
    let leftToRight = 0;
    let rightToLeft = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++){
        leftToRight += arr[i][i];
        rightToLeft += arr[i][n - 1 - i];
    }
    return Math.abs(leftToRight - rightToLeft);
    }

    const matriz = [
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12]
    ]; 

console.log(diagonalDifference(matriz));