const a = [1, 2, 3, 0, 0, 0], b = [2, 5, 6];
const m = 3, n = 3;

let i = 0, j = 0;
const temp = [];

while (i < m && j < n) {
    if (a[i] < b[j]) {
        temp.push(a[i]);
        i++
    }
    else {
        temp.push(b[j]);
        j++;
    }
}

while (i < m) {
    temp.push(a[i]);
    i++;
}
while (j < n) {
    temp.push(b[j]);
    j++;
}
console.log(temp)

// Merging value to a[]
for (let i = 0; i < temp.length; i++) {
    a[i] = temp[i];
}
console.log(a)