a = [1, 3, 5, 6];
target = 6;

s = 0; e = a.length - 1;

while (s <= e) {
    m = Math.floor((s + e) / 2);

    if (a[m] == target) {
        console.log(m)
        return m;
    }
    if (a[m] < target) {
        s = m + 1;
    } else {
        e = m - 1
    }
}
console.log(s)
