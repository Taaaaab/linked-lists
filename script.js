// Two classes or factories
// factory function for linked list

class linkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    prepend(data) {
        const newNode = new LinkedListNode(data, this.head);
        this.head = newNode;
        this.length++;
    }

    append(data) {

    }
}

class LinkedListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

const ll = new linkedList()
ll.prepend(10);
ll.prepend(20);
console.log(ll);