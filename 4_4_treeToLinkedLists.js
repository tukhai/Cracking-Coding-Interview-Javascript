console.clear();

class LinkedList {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  
  add(data) {
    if (this.next === null) {
      this.next = new LinkedList(data);
    } else {
      this.next.add(data);
    }
  }
}

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
  
  getRootNode() { 
    return this.root; 
  }
  
  depth(node) {
    if (node === null) return 0;
    if (node.left === null && node.right === null) {
      return 1;
    } else {
      var depthLeft = 1 + this.depth(node.left);
      var depthRight = 1 + this.depth(node.right);
      
      if (depthLeft > depthRight) return depthLeft;
      else return depthRight;
    }
  }
  
  treeToLinkedLists(node, lists, d) {
    if (d === null) d = this.depth(node);

    if (lists[d] === undefined) {
      lists[d] = new LinkedList(node.data);
    } else {
      lists[d].add(node.data);
      if (d === 1) return lists;
    }

    if (node.left !== null) {
      lists = this.treeToLinkedLists(node.left, lists, d - 1);
    }
    if (node.right !== null) {
      lists = this.treeToLinkedLists(node.right, lists, d - 1);
    }
    
    return lists;
  }
}

var BST = new BinarySearchTree();
var lists = []; // store list into hashmap
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

console.log("BST", BST);
var root = BST.getRootNode();
console.log(BST.treeToLinkedLists(root, lists, 0));