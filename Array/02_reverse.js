let a1 = [1, 4, 3, 2, 6, 5];

// Approach 1: 
let res = [];

for (let i = a1.length - 1; i >= 0; i--) {
    res.push(a1[i]);
}
console.log(res + " is reverse to " + a1);

// Approach 2: Swapping
let a = [1, 4, 3, 2, 6, 5];
let start = 0; end = a.length - 1
while (end > start) {
    let temp = a[start];
    a[start] = a[end];
    a[end] = temp;
    start++;
    end--;
}

console.log(a + ' is reverse')