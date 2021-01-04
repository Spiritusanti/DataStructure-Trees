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