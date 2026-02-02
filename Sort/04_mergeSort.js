a = [5, 4, 3, 2, 1];

mergeSort(0, a.length - 1)

function mergeSort(s, e) {
    if (s == e) {
        return;
    }
    let m = Math.floor((s + e) / 2);

    mergeSort(s, m);
    mergeSort(m + 1, e);
    merge(s, m, e);

}

// Same mergeTwoSortedArray problem code
function merge(s, m, e) {
    let i = s, j = m + 1;
    const temp = [];

    while (i <= m && j <= e) {
        if (a[i] < a[j]) {
            temp.push(a[i]);
            i++;
        }
        else {
            temp.push(a[j]);
            j++;
        }
    }
    while (i <= m) {
        temp.push(a[i]);
        i++;
    }
    while (j <= e) {
        temp.push(a[j]);
        j++;
    }
    // Merging value to a[]
    for (let i = s; i <= e; i++) {
        a[i] = temp[i - s];
    }
    console.log(a)
}