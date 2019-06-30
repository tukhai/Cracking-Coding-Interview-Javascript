console.clear();

var last_logged;

class BinaryTree {
  constructor() {
    this.root = null;
  }
  
  isBST(node) {
    if (node === null) return true;
    if (!this.isBST(node.left)) return false;
    if (last_logged !== null && node.data <= last_logged) return false;
    
    console.log("Current Node:", node.data);
    last_logged = node.data;
    
    if (!this.isBST(node.right)) {
      return false;
    }
    return true;
  }
}

var root = {data: 8, left: null, right: null};
var n1 = {data: 10, left: null, right: null};
var n2 = {data: 6, left: null, right: null};

var BT = new BinaryTree();
BT.root = root;
BT.root.left = n2;
BT.root.right = n1;

// 6-8-10, increase => true
console.log(BT.isBST(BT.root));

// change left to 10, which is > 8 => false
BT.root.left = n1;
console.log(BT.isBST(BT.root));





