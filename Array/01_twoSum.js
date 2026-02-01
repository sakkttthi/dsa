let a = [3, 2, 4];
let target = 6;

for (i = 0; i < a.length; i++) {
    for (j = i + 1; j < a.length; j++) {
        sum = a[i] + a[j];
        if (sum == target) {
            console.log(i, j);
            return (i, j);
        }
    }
}