// Create nodes
const node1 = { data: 1, next: null };
const node2 = { data: 2, next: null };
const node3 = { data: 3, next: null };

// Link nodes: 1 -> 2 -> 3
node1.next = node2;
node2.next = node3;

// Create a cycle: 3 -> 2
node3.next = node2;

// Head of linked list
let head = node1;

// sum explanation
// 1 → 2 → 3
//       ↑   ↓
//       ← ← ←
// We have to check if the given linked list is circular / not 

// slow fast pointer approach

slow = head;
fast = head
while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) {
        console.log('true')
        return true;
    }
} return false;




