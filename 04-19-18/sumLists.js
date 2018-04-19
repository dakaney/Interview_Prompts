/*
You have two numbers represented by a linked list, where each node containes a single
digit. The digits are stored in reverse order, such that the 1's digits is at the head
of the list. Write a function that adds the two numbers and returns the sum as a linked
list.

EXAMPLE:
Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is 617 + 295.
Output: 2 -> 1 -> 9. That is 912.

Follow Up
Suppose the digits are stored in the forward order. Repeat the above problem.

EXAMPLE:
Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). That is, 617 + 295.
Output: 9 -> 1 -> 2. That is 912.

Hints #7, #30, #71, #95, #109
*/

let linkedListSum = (linkedListA , linkedListB) => {
    let storageA = [];
    let storageB = [];
    let search = (node, storage) => {
        storage.unshift(node.value);
        if(node.next) {
            search(node.next, storage);
        }
    }
    search(linkedListA.head, storageA);
    search(linkedListB.head, storageB);
    let sum = JSON.parse(storageA.join('')) + JSON.parse(storageB.join(''));
    let result = new LinkedList;
    JSON.stringify(sum).split('').forEach(item => result.addToTail(item));
    return result;
}

var LinkedList = function() {
  this.tail = null;
  this.head = null;
};

LinkedList.prototype.addToTail = function(value) {
  const node = new this.makeNode(value);
  if(this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;      
  }
};

LinkedList.prototype.makeNode = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
