a = [1, 2, 3]; k = 3;
count = 0;
for (let i = 0; i < a.length; i++) {
    sum = a[i];
    if (sum == k) {
        count++;
    }
    for (let j = i + 1; j < a.length; j++) {
        sum += a[j];
        if (sum == k) {
            count++
        }
    }
}

console.log(count);