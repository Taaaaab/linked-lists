// Two classes or factories
// factory function for linked list

class linkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(value) {
        const last = this.getLast();
        if (last == null) return null;

        last.next = new LinkedListNode(value, last.next);
        this.length++;
    }

    prepend(data) {
        const newNode = new LinkedListNode(data, this.head);
        this.head = newNode;
        this.length++;
    }

    size() {
        return this.length;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode;
    }

    at(index) {
        if (index < 0 || index >= this.length) return null

        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current;
    }

    pop() {
        let current = this.head,
        previous;

        while (current.next) {
            previous = current;
            current = current.next;
        }

        previous.next = null;
        current = null;
        return 
    }

    contains(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            } else {
                current = current.next;
            }

        }
        return false;
    }

    toString() {
        let output = '';
        let current = this.head;
        while (current) {
            output = `${output}${current.value} -> `
            current = current.next;
        }
        console.log(`${output}null`);
    }
};

class LinkedListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}



const ll = new linkedList()
ll.prepend(10);
ll.prepend(20);
ll.prepend(30);
ll.prepend(40);
ll.append(5);

ll.toString();
console.log(ll.size());
console.log(ll.getFirst().value);
console.log(ll.getLast().value);  
console.log(ll.at(2).value); 
ll.pop();
ll.toString();
console.log(ll.contains(30));


