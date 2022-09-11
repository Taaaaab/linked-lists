// Two classes or factories
// factory function for linked list

const createList = (fullList) => {
    const append = (value) => createNode(value, end);
    const prepend = (value) => createNode(value, start);
    return {
        fullList: fullList
    }
};

const linkedList = createList(5);
console.log(linkedList.fullList)

// factory function for node
const createNode = (value, link) => {
    return {
        value: null,
        link: null,
    }

};

const node = createNode(1, null);
console.log(node.value)

// functions for linked lists
function append(value) {
    createNode(value)
};