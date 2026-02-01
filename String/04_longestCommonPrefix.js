const str = ['flower', 'flow', 'flight'];

if (str.length === 0) { return "" }

let first = str[0];
let answer = '';

for (let i = 1; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
        if (first[j] != str[i][j]) {
            return answer;
        }
    }
    answer += first[i];
}
console.log(answer);
