a = [10, 5, 20, 60, 100]; k = 60;
for (let i = 0; i < a.length; i++) {
    if (a[i] == k) {
        console.log(i)
        return i;
    }
}
return -1;