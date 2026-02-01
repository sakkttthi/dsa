nums = [1, 2, 1, 3, 5, 6, 4];
let n = nums.length;
let s = 1; e = nums.length - 1;
if (nums[0] > nums[1]) { return 0; }
if (nums[n - 1] > nums[n - 2]) { return 0; }
if (n == 1) { return 0; }

while (s <= e) {
    let m = Math.floor((s + e) / 2);
    let prev = m - 1;
    let next = m + 1;

    if (nums[prev] < nums[m] && nums[next] < nums[m]) {
        console.log(m)
        return m;
    } else if (nums[m] < nums[next]) {
        s = m + 1;
    } else {
        e = m - 1;
    }

}