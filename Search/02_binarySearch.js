a = [2, 5, 8, 9, 25]; k = 2;
s = 0; e = a.length - 1;

while (s <= e) {
    mid = Math.floor((s + e) / 2);
    if (a[mid] == k) {
        console.log(mid);
        return mid;
    }
    if (a[mid] < k) {
        s = mid;
    } else {
        e = mid;
    }
}
return -1;