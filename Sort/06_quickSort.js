let a = [5, 4, 2, 6, 8, 1, 0, 9];

function swap(i, j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

function rearrange(start, end) {
    let pivot = a[start];
    let s = start + 1; let e = end;
    while (s <= e) {
        while (a[s] <= pivot && s < end) {
            s++;
        }
        while (a[e] >= pivot && e > start) {
            e--;
        }
        if (s < e) {
            swap(s, e)
        }
    }
    swap(start, e);
    return e;
}

function quickSort(s, e) {
    if (s < e) {
        let pivotIndex = rearrange(s, e);
        quickSort(s, pivotIndex - 1);
        quickSort(pivotIndex + 1, e)
    }
}

quickSort(0, a.length - 1)
console.log(a);
