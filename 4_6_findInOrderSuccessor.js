// Main logic of of find parent: save it into constructor of node

console.clear();

class Node {
  constructor(data, parent) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = parent;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  insert(data) {
    var newNode = new Node(data, this.root);
    
    if (this.root === null) this.root = newNode;
    else {
      this.insertNode(this.root, newNode);
    }
  }
  
  insertNode(node, newNode) {
    newNode.parent = node;
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }
  
  findMinNode(node) {
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }
  
  findInOrderSuccessor(root, n) {
    if (n.right !== null) return this.findMinNode(n.right);
    
    var p = n.parent;
    while (p !== null) {
      if (n !== p.right) break; // if n is not its parent's right, we stop transverse up to parent
      n = p;
      p = p.parent;
    }
    return p;
  }
}

var BST = new BinarySearchTree();
BST.insert(15); 
BST.insert(25); 
BST.insert(10); 
BST.insert(7); 
BST.insert(22); 
BST.insert(17); 
BST.insert(13); 
BST.insert(5); 
BST.insert(9); 
BST.insert(27);

console.log(BST);
// console.log(BST.root.left.left);
// var temp = BST.root.left.left;
var temp = BST.root.left;
console.log("temp", temp);

var succ = BST.findInOrderSuccessor(BST.root, temp);
console.log("Successoris the node:", succ);

