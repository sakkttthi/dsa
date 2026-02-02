// Comparing i with i+1 and swapping

let a = [5, 1, 4, 2];

for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) { //j condition is to not check the last index
        if (a[j] > a[j + 1]) { //here we check with last index with j+1
            let temp = a[j + 1];
            a[j + 1] = a[j];
            a[j] = temp;
        }
    }
}

console.log(a)

// bubble sort is O(nsqaure) so we dont use it often