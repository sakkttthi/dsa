matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
]
target = 30

row = 0;
col = matrix[0].length - 1

while (row < matrix.length - 1 && col >= 0) {
    value = matrix[row][col];

    if (value == target) {
        console.log('true', row, col)
        return true;
    } else if (value > target) {
        col--;
    } else {
        row++;
    }
}
console.log('false', row, col);
// return false;

// brute force 
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         value = matrix[i][j];
//         if (value == target) {
//             console.log(i, j);
//             return true
//         }
//     }
// }