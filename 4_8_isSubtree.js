console.clear();

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right= null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  insert(data) {
    var newNode = new Node(data);
    
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }
  
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (node.right == null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }
  
  getRootNode() {
    return this.root;
  }
}

function areIdentical(root1, root2) {
  if (root1 === null && root2 === null) return true;
  if (root1 === null || root2 === null) return false; // before this line, we're sure that both root1, root2 not null

  return (
    root1.data === root2.data &&
    areIdentical(root1.left, root2.left) &&
    areIdentical(root1.right, root2.right)
  );
}

function isSubtree(T, S) {
  if (S === null) return true;
  if (T === null) return false;
  // console.log(T, S);
  if (areIdentical(T, S)) return true;
  
  return (isSubtree(T.left, S) || isSubtree(T.right, S));
}

// TREE 1:
var T = new BinarySearchTree();
T.root = new Node(26);
T.root.right = new Node(3);
T.root.right.right = new Node(3);
T.root.left = new Node(10);
T.root.left.left = new Node(4);
T.root.left.left.right = new Node(30);
T.root.left.right = new Node(6);
console.log(T);

// TREE 2:
var S = new BinarySearchTree();
S.root = new Node(10);
S.root.left = new Node(4);
S.root.left.right = new Node(30);
S.root.right = new Node(6);
console.log(S);

console.log("main final", isSubtree(T.root, S.root));


