let a = [5, 4, -1, 7, 8]


// Approach 1: Brute force
let max = -Infinity; //instead of 0 - since we have negative value in array

// for (i = 0; i < a.length; i++) {
//     let sum = a[i]
//     for (j = i + 1; j < a.length; j++) {
//         sum += a[j];
//         if (max < sum) {
//             max = sum;
//         }
//     }
// }

// console.log(max);

// Kadane's Algo
for (i = 0; i < a.length; i++) {
    let sum = a[i]
    for (j = i + 1; j < a.length; j++) {
        sum += a[j];
        if (max < sum) {
            max = sum;
        }
        if (sum < 0) { // resetting to 0 when values goes negative as it may increase the time of execution
            sum = 0;
        }
    }
}
console.log(max)
