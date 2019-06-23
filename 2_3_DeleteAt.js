console.clear();

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

LinkedList.prototype.getAt = function(index) {
  var counter = 0;
  var node = this.head;
  while (node) {
    if (counter === index) {
      return node;
    }
    counter++;
    node = node.next;
  }
  return null;
}

LinkedList.prototype.deleteAt = function(index) {
  if (!this.head) { // if empty linked list
    return;
  }
  
  if (index === 0) { // if single linked list
    this.head = this.head.next;
  }
  
  var previous = this.getAt(index - 1);
  if (!previous || !previous.next) return;
  previous.next = previous.next.next;
  return this.head;
}

var newList = new LinkedList();
newList.arrayToLinkedList([5, 6, 5, 4, 3, 0, 9]);
/* newList.arrayToLinkedList([]); */
newList.deleteAt(0);
console.log("main", newList);

