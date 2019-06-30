console.clear();

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  insert(data) {
    var newNode = new Node(data);
    
    if (this.root === null) this.root = newNode;
    else {
      this.insertNode(this.root, newNode); // find the correct position in the tree and add the node
    }
  }
  
  insertNode(node, newNode) {
    // if the data is less than the node, data move left of the tree
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else {
        // if left is not null, recurr untill null is found
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }
  
  createMinHeightBST(sortedArr) {
    var middle;
    if (sortedArr.length === 0) {
      return 0;
    } else if (sortedArr.length === 1) {
      middle = 0;
    } else {
      middle = Math.floor(sortedArr.length / 2);
    }
    
    this.insert(sortedArr[middle]);
    var leftArr = sortedArr.slice(0, middle);
    var rightArr = sortedArr.slice(middle + 1, sortedArr.length);
    this.createMinHeightBST(leftArr);
    this.createMinHeightBST(rightArr);
  }
}

var BST = new BinarySearchTree();
var sortedUniqueArr = [0, 1, 2, 3, 4, 5, 6];
BST.createMinHeightBST(sortedUniqueArr);
console.log(BST);



