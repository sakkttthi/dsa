// List 1: 1 -> 3 -> 5
let l1 = {
    data: 1,
    next: {
        data: 3,
        next: {
            data: 5,
            next: null
        }
    }
};

// List 2: 2 -> 4 -> 6
let l2 = {
    data: 2,
    next: {
        data: 4,
        next: {
            data: 6,
            next: null
        }
    }
};

let dummy = { data: -1, next: null };
curr = dummy;

while (l1 && l2) {
    if (l1.data < l2.data) {
        curr.next = l1;
        l1 = l1.next;
    } else {
        curr.next = l2;
        l2 = l2.next;
    }
    curr = curr.next;

}
if (l1) {
    curr.next = l1;
}
if (l2) {
    curr.next = l2;
}
console.log(dummy.next)
return dummy.next;