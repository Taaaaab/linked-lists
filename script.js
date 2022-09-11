// Two classes or factories
// factory function for linked list

const linkedList = () => {
    let length = 0;
    let headNode = null;
    let tailNode = null;

    const append = function(value) {
        let node = createNode(value);
        if (headNode === null) {
            headNode = node;
        } else {
            tailNode = node;
        }
    };
    const prepend = function(value) {
        let node = createNode(value);
        if (headNode === null) {
            headNode = node;
        } else {
            headNode = node;
        }
    };
    const size = () => {return length};
    const head = () => {return headNode};
    const tail = () => {return tailNode};
    const at = (index) => {return fullList[index]};
    const pop = () => {return};
    const contains = (value) => {
        if (value === fullList) {
            return true
        } else {
            return false
        }
     };
    const find = (value) => {return };
    const toString = () => {
        return linkedList.toString;
    };
    
};

const list = linkedList(5);
console.log(linkedList.head);

// factory function for node
const createNode = function(value) {
    this.value = value;
    this.next = null;
};

const node = createNode(2);
