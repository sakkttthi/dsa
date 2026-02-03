let a = [5, 4, 2, 6, 8, 1, 0, 9];

pivot = a[0];
s = 1; e = a.length - 1;

function swap(i, j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

while (s < e) {
    if (a[s] < pivot && s < a.length) {
        s++;
    }
    if (a[e] > pivot && e > 0) {
        e--;
    }
    if (s < e) {
        swap(s, e)
    }
}
console.log(a) //arranged min in left and max in right
swap(0, e); //swapping pivot to right position
console.log(a)

//quick sort is based on this logic