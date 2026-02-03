let head = { data: 1, next: { data: 2, next: { data: 3, next: null } } };

// slow fast approach 

slow = head;
fast = head;

while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
}
console.log(slow.data);
return slow.data;