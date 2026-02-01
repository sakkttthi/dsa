a = [1, 7, 3, 6, 5, 6];

for (let i = 0; i < a.length; i++) {
    let left = 0;
    for (let j = 0; j < i; j++) {
        left += a[j];
    }
    let right = 0;
    for (let k = i + 1; k < a.length; k++) {
        right += a[k];
    }
    if (left == right) {
        console.log(i);
        return i;
    }
}

