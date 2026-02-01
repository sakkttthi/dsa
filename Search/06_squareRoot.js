let x = 25;

// brute force 
// for (let i = 1; i <= x; i++) {
//     sqrt = i * i;
//     if (sqrt == x) {
//         console.log(i);
//         return i;
//     }
// }

// binary seach 
let s = 1; e = Math.floor(x / 2);


while (s <= e) {
    let m = Math.floor((s + e) / 2);
    let sqrt = m * m;
    if (sqrt == x) {
        console.log(m);
        return true;
    } else if (sqrt < x) {
        s = m + 1
    } else {
        e = m - 1;
    }
    console.log(e)
    return e;
}