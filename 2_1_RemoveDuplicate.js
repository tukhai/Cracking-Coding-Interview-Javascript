console.clear();

// Main logic: using 2 pointers p1 and p2, transverse the list together:
// - move p2 to the right one step first:
//   + if it's a new data, move p1 to the right 1 step also
//   + if it's an existed data, anchor link at p1 to the next link of p2
// - continue to move the right until p2 is null (end of list)

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.arrayToLinkedList = function(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = {
      data: arr[i],
      next: list
    }
  }
  this.head = list;
}

LinkedList.prototype.removeDuplicates = function() {
  // Empty or single linked list
  if (!this.head || !this.head.next) {
    return;
  }
  
  var p1 = this.head;
  var p2 = p1.next;
  var nodes = {};
  nodes[p1.data] = true; // save data in the head
  
  while (p2) {
    var data = p2.data;
    if (nodes[data]) {
      p1.next = p2.next; // if it's an existed data, link node at p1 to the next node of p2, which would delete the node at p2
    } else {
      nodes[data] = true;
      p1 = p2; // if it's the new data, move p1 to p2
    }
    p2 = p2.next; // continue to transverse
  }
}

console.log("test");
var newList = new LinkedList();
newList.arrayToLinkedList([6, 7, 7, 5, 5, 5, 1, 2, 2, 3, 3, 3, 6]);
/* newList.arrayToLinkedList([6, 7, 6]); */
newList.removeDuplicates();
console.log(newList);