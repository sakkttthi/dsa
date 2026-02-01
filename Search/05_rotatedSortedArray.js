nums = [4, 5, 6, 7, 0, 1, 2], target = 0

// Brute force 
// for (let i = 0; i < nums.length; i++) {

//     value = nums[i];
//     if(value == target){
//         console.log(i);
//         return true;
//     }

// }

s = 0; e = nums.length - 1;
while (s <= e) {
    mid = Math.floor((s + e) / 2);

    if (nums[mid] == target) {
        console.log(mid)
        return mid;
    }

    if (nums[s] <= nums[mid]) {
        if (nums[s] <= target && nums[mid] > target) {
            e = mid - 1;
        } else {
            s = mid + 1
        }
    } else {
        if (nums[mid] < target && target <= nums[e]) {
            s = mid + 1;
        } else {
            e = mid - 1
        }
    }
}