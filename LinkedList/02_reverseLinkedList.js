let head = { data: 1, next: { data: 2, next: { data: 3, next: null } } };

curr = head;
prev = null;

while (curr) {
    next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next
}
console.log(prev);
return prev;
