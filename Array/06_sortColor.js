a = [2, 1, 0, 0, 2, 1];

function reverseOnce(start, end) {
    let temp = a[start];
    a[start] = a[end];
    a[end] = temp;
}

start = 0;
mid = 0;
end = a.length - 1
while (start <= end) {
    if (a[start] == 2) {
        reverseOnce(start, end);
        end--;
    } else if (a[start] == 1) {
        start++;
    } else {
        reverseOnce(start, mid);
        start++;
        mid++
    }
}


console.log(a)