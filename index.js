// DataStructure: trees module
// look very similar to how React's component architecture is built


// Binary Trees:
// rules --> each node can only have 0, 1, or 2 nodes and each child can only have one parent

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// perfect binary trees have all nodes filled in - full binary trees have nodes with at least one child.
// --> perfect Binary Trees double as they move down each level
// --> all the nodes above the bottom level plus one will equal the number of nodes in that level. 
// number of nodes in a tree where x = 'steps', nodes = 2^x - 1 - simplified log 100 = 2 (log nodes = x)
// New big O notation O(log N) - low time complexity


// Binary Search Tree - great at searching and comparing things
// this structure conserves relationships - allows look up without iterating
// insert and delete - delete gets a little more complex

// Balanced vs unbalanced 
// balanced - log(n)
// unbalanced - O(n)

// pros of BSTs - better than O(n), ordered, flexible size
// cons of BSTs - no O(1) operations

class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value) {
    // add a new value to the tree
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true) {
        if(value < currentNode.value) {
          // left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left
        } else {
          // right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }

  }
  lookup(value) {
    if (!this.root) {
      return false
    } 
    let currentNode = this.root;
    while(currentNode) {
      // traverse left
      if(value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        // traverse right
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode
      }
    }
    return false;
  }
  remove(value) {
    if(!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode) {
      if(value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        // option 1 - no right child
        if(currentNode.right === null) {
          parentNode.left = currentNode.left;
          // option 2 right child doesn't have a left child
        } else if (currentNode.right.left === null){
          if(parentNode === null) {
            this.root = currentNode.left;
          } else {       
            currentNode.right.left = currentNode.left;
          // if parent > current, make right child left of the parent
          if(currentNode.value < parentNode.value) {
            parentNode.left = currentNode.right;
          } else if (currentNode.value > parentNode.value) {
            parentNode.right = currentNode.right;
          }
          }
          // option 3 right child has a left child
        } else {
          // find the right child's left most child
          let leftMost = currentNode.right.left;
          let leftMostParent = currentNode.right;
          while(leftMost.left !== null) {
            leftMostParent = leftMost;
            leftMost = leftMost.left;
          }

          // parent's left subtree is now leftmost's right subtree
          leftMostParent.left = leftMost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null) {
            this.root = leftMost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftMost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftMost;
            }
          }
        }
        return true;
      }
    }
  }
}

const tree = new BinarySearchTree();

function traverse(node) {
  const tree = {value: node.value};
  tree.left = node.left === null ? null :
  traverse(node.left);
  tree.right = node.right === null ? null :
  traverse(node.right);
  return tree;
}




// Binary Heap
//  --> every child belongs to a parent node that has a greater value - max Heap
//  --> every child belongs to a parent node that has a smaller value - min Heap

// -- Binary heaps are really good at doing comparative operations. Take up the least amount of space possible - do left to right insertion, preserving order of insertion.
// Priority Queues - allow for "VIPs"

// Trie --> specialized tree used in searching most often used with text
  // --> can outperform binary search trees
  // Starts with an empty root node and then goes from there
  // Trie also known as prefix-tree
  // big O of trie is O(length of word) === O(n)
  // space complexity is also an advantage - only have to store a value once.
