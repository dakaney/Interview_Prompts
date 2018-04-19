/*
 * Interview Questions (Part VIII)
 * Chapter 2: Linked Lists
 * Problem 2.3
 * 
 * 
 * Implement an algorithm to delete a node in the middle of
 * a singly linked-list, given only access to that node.
 * 
 * Example:
 * Input: Node C from linked list a -> b -> c -> d -> e
 * Result: Nothing is returned, but new linked list is a -> b -> d -> e
 *
*/
// i: target node from a singly Linked List
// o: nothing returned, but linked list has deleted the target node
// c: nothing
// e: nothing passed in?

const deleteMiddleNode = (node) => {
  let currentNode = node;
  
  while (currentNode) {
    currentNode.val = currentNode.next.val;
    if (!currentNode.next.next) {
      currentNode.next = null
    }
    currentNode = currentNode.next;
  }
  return undefined;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var head1 = new ListNode(1);
var tail1 = new ListNode(2);
var tail2 = new ListNode(3);
var tail3 = new ListNode(4);
var tail4 = new ListNode(5);
head1.next = tail1;
tail1.next = tail2;
tail2.next = tail3;
tail3.next = tail4;
