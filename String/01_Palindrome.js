let a = 'racecar';
let res = "";
// Clean the string first to remove non-alphanumeric 
let cleaned = '';
for (let i = 0; i < a.length; i++) {
    let ch = a[i];

    if (ch >= "a" && ch <= "z") {
        cleaned += ch;
    }
    else if (ch >= "A" && ch <= "Z") {
        cleaned += ch.toLowerCase();
    }
    else if (ch >= "0" && ch <= "9") {
        cleaned += ch;
    }
}

console.log(cleaned)

// Reverse the string - Approach 1
for (let i = cleaned.length - 1; i >= 0; i--) {
    res += cleaned[i];
}
console.log(res)
if (a == res) {
    console.log(a + " is a Palindrome")
}

// Check each first & last char are same - Approach 2
function isPalindrome() {
    let start = 0, end = a.length - 1;
    while (start <= end) {
        if (a[start] != a[end]) {
            return false;
        }
        start++;
        end--;
        return true
    }
}
console.log("Palindrome " + isPalindrome());



