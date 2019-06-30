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
  
  checkHeight(node) {
    if (node === null) return 0;
    
    // Check if left is balanced
    var leftHeight = this.checkHeight(node.left);
    if (leftHeight === -1) return -1;
    
    // Check if right is balanced
    var rightHeight = this.checkHeight(node.right);
    if (rightHeight === -1) return -1;
    
    // Check if current node is balanced
    var heightDiff = leftHeight - rightHeight;
    if (Math.abs(heightDiff) > 1) {
      return -1;
    } else {
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }
  
  isBalanced() {
    if (this.checkHeight(this.root) == -1) {
      return false;
    } else {
      return true;
    }
  }
}

var BST = new BinarySearchTree();
BST.insert(8);
BST.insert(3);
BST.insert(10);
BST.insert(1);
BST.insert(6);
BST.insert(14);
BST.insert(4);
BST.insert(7);
/* BST.insert(13); */

console.log(BST.isBalanced(BST.root));


