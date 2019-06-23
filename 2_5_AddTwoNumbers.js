console.clear();

// Main logic: turn the linked list into array, sum by array, then turn into linked list again

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

var addTwoNumber = function(l1, l2) {
  var digits1 = []; var digits2 = [];
  
  var item = l1.head;
  while (item) {
    digits1.push(item.data);
    item = item.next;
  }
  item = l2.head;
  while (item) {
    digits2.push(item.data);
    item = item.next;
  }

  var index1 = digits1.length; var index2 = digits2.length;
  var total = ''; var carry = 0;
  for (let i = Math.max(index1, index2); i > 0; i--) {
    var a = 0;
    if (index1 > 0) {
      a = digits1[index1 - 1];
    }
    
    var b = 0;
    if (index2 > 0) {
      b = digits2[index2 - 1];
    }

    var sum = a + b + carry;
    if (sum > 9) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    total = sum + total;
    index1--;
    index2--;
  }
  
  if (carry) total = carry + total; // for the last digit sum
  var finalArr = total.split('').map(function(value) { return parseInt(value); });
  var finalList = new LinkedList();
  
  finalList.arrayToLinkedList(finalArr);
  return finalList;
}

var newList1 = new LinkedList();
newList1.arrayToLinkedList([9, 1, 3, 4, 6]);

var newList2 = new LinkedList();
newList2.arrayToLinkedList([6, 5, 4]);

console.log("FINAL--", addTwoNumber(newList1, newList2));