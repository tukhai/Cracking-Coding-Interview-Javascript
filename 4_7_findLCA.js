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
  
  // Method to insert a node in a tree
  // it moves over the tree to find the location to insert a node with a given data
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
  
  findLCA(root, n1, n2) {
    if (root === null) return null;
    if (root.data === n1 || root.data === n2) return root;
    
    var left_lca = this.findLCA(root.left, n1, n2);
    var right_lca = this.findLCA(root.right, n1, n2);
    
    if (left_lca && right_lca) return root;
    if (left_lca !== null) {
      return left_lca;
    } else {
      return right_lca;
    }
  }
}

var BST = new BinarySearchTree();
// Inserting nodes to the BinarySearchTree 
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
var root = BST.getRootNode();
console.log(root);
console.log(BST.findLCA(root, 27, 22).data);




