let head = { data: 1, next: { data: 2, next: { data: 3, next: null } } };

let curr = head;

while(curr){
    console.log(curr.data);
    curr = curr.next;
}