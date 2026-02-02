// Storing the min value in entire array and then swapping with first index 

let a = [5, 1, 4, 2];

for (let i = 0; i < a.length; i++) {
    let minIndex = i;

    for (j = i + 1; j < a.length; j++) {
        if (a[j] < a[minIndex]) {
            minIndex = j; //finding the min index and storing it
        }
    }
    let temp = a[i];
    a[i] = a[minIndex];
    a[minIndex] = temp; //swapping minIndex with position
}

console.log(a)