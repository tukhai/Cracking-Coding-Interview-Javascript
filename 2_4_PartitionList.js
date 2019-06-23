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

LinkedList.prototype.insertNodeAtTail = function(data) {
  if(!this.head) {
    this.head = {
      data: data,
      next: null
    };
    return this.head;
  }
  
  let tail = this.head;
  while (tail.next !== null) {
    tail = tail.next;
  }
  tail.next = {
    data: data,
    next: null
  }
  return this.head;
}

LinkedList.prototype.partitionList = function(val) {
  var beforeVal = new LinkedList();
  var afterVal = new LinkedList();
  var p1 = this.head; // using 1st pointer
  
  while (p1) {
    if (p1.data < val) {
      beforeVal.insertNodeAtTail(p1.data);
    } else if (p1.data >= val) {
      afterVal.insertNodeAtTail(p1.data);
    }
    p1 = p1.next;
  }
  
  // merge beforeVal & afterVal
  var p2 = beforeVal.head; // using 2nd pointer
  while (p2.next) {
    p2 = p2.next;
  } // transverse till and of beforeVal
  p2.next = afterVal.head;
  
  this.head = beforeVal.head;
}

var newList = new LinkedList();
newList.arrayToLinkedList([9, 8, 6, 4, 7, 8, 1]);
newList.partitionList(5);
/* newList.insertNodeAtTail(3);
newList.insertNodeAtTail(5); */
console.log(newList);