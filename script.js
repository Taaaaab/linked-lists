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

    size() {
        return this.length;
    }

    at(index) {
        if (index < 0 || index >= this.length) return null

        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current;
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
// console.log(ll);
console.log(ll.at(0));
ll.toString();
console.log(ll.size());
