let a = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

function reverseArr(start, end) {
    while (end >= start) {
        let temp = a[start];
        a[start] = a[end];
        a[end] = temp;
        start++;
        end--;
    }
}
reverseArr(0, a.length - 1);
reverseArr(0,k-1);
reverseArr(k,a.length-1);
console.log(a);
