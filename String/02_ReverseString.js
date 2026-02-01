// Direct reversal with negative mindexing
let greet = 'Hello All';
let result ='';

for(let i = greet.length -1; i >= 0; i--){
    result += greet[i]
}
console.log(result) 

// Converting to array and reversing 
const arr = [];
for(let i = 0; i< greet.length;i++){
    arr.push(greet[i]);
}
let revarr = []
for(let i=arr.length-1;i>=0;i--){
    revarr.push(arr[i])
}
console.log(revarr.toString())

// Two pointer swap approach
let greet_Hell0 = ['h','e','l','l','o'];
for (let i = 0,j=greet_Hell0.length-1;i<j;i++,j--){
    let temp = greet_Hell0[i];
    greet_Hell0[i] = greet_Hell0[j];
    greet_Hell0[j] = temp;
}
console.log(greet_Hell0);