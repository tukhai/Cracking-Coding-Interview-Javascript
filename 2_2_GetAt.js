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
  let counter = 0; //counter to get the index
  let node = this.head;
  while (node) {
    if (counter === index) {
      return node.data;
    }
    counter++;
    node = node.next;
  }
}

var newList = new LinkedList();
newList.arrayToLinkedList([9, 9, 9, 8, 0, 6]);
console.log(newList.getAt(5));