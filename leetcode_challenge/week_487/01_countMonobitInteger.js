let n = 0;

let count = 0;
let i = 0;
while (i <= n) {
    if (2 ** i - 1 <= n) {
        count++
    }
    i++;
}
console.log(count);



