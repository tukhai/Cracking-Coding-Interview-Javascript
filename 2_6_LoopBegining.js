console.clear();

function LinkedList() {
  this.head = null;
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

LinkedList.prototype.loopBegining = function() {
  var isLoop;
  var p1 = this.head; var p2 = this.head;
  
  while (p2.next.next) { // loop detection, transverse p2 2 steps & p1 1 step until they collide
    p1 = p1.next;
    p2 = p2.next.next;
    if (p2 === p1) {
      isLoop = true;
      break;
    }
  }
  
  if (isLoop) {
    p1 = this.head;
    while (p1 !== p2) {
      p1 = p1.next;
      p2 = p2.next;
    }
    return p1; // transverse both p1 and p2 and till they meet
  } else return;
}

var L1 = new LinkedList();
var testData = [1, 2, 3, 4, 5, 6];
testData.forEach(el => { L1.insertNodeAtTail(el); });
L1.head.next.next.next.next.next.next = L1.head.next.next;

console.log(L1.loopBegining());
