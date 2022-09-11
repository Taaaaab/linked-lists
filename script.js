// Two classes or factories
// factory function for linked list

const createList = (nodeNumber) => {
    return {
        nodeNumber: nodeNumber
    }
};

const linkedList = createList(5);
console.log(linkedList.nodeNumber)

// factory function for node
const createNode = (nodeNumber) => {
    return {
        nodeNumber: nodeNumber
    }
};

const node = createNode(1);
console.log(node.nodeNumber)
