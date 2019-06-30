console.clear();

function printVector(v, i) {
  var pathStr = "";
  for (let j = i; j < v.length; j++) {
    pathStr += v[j] + ((j === v.length - 1) ? "" : " + ");
  }
  console.log(pathStr);
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
}

function printKPathUtil(root, path, k) {
  if (root === null) return;
  
  path.push(root.data);
  
  // check if there's any k sum path in the left sub-tree.
  printKPathUtil(root.left, path, k);
  
  // check if there's any k sum path in the right sub-tree.
  printKPathUtil(root.right, path, k);
  
  // check if there's any k sum path that terminates at this node Traverse the entire path as there can be negative elements too
  var f = 0;
  for (let j = path.length - 1; j >= 0; j--) {
    f += path[j];
    
    // If path sum is k, console.log the path  
    if (f == k) {
      // console.log("-----");
      printVector(path, j); 
    }
  }
  
  // Remove the current element from the path  
  path.pop(-1);
}

function printKPath(root, k) {
  var path = [];
  printKPathUtil(root, path, k);
}

var BT = new BinaryTree();
BT.root = new Node(1);
BT.root.left = new Node(3);
BT.root.left.left = new Node(2);
BT.root.left.right = new Node(1);
BT.root.left.right.left = new Node(1);
BT.root.right = new Node(-1);
BT.root.right.left = new Node(4);
BT.root.right.left.left = new Node(1);
BT.root.right.left.right = new Node(2);
BT.root.right.right = new Node(5);
BT.root.right.right.right = new Node(2);

var k = 5;
printKPath(BT.root, k);
