// 左小右大二叉树
var Node = JSON.stringify({
  num: -1,
  size: 1,
  cnt: 1,
  left: null,
  right: null
});
var updateSize = function(node) {
  node.size = node.cnt;
  if (node.left) {
    node.size += node.left.size;
  }
  if (node.right) {
    node.size += node.right.size;
  }
};

function SortedList() {
  this.root = null;
  this.length = 0;
}
SortedList.prototype.add = function(num) {
  this.length ++;
  this._insert(this.root, num);
};

SortedList.prototype._insert = function(curNode, num) {
  if (!this.root) {
    this.root = JSON.parse(Node);
    this.root.num = num;
    return;
  }

  var parentNodesList = [], parentNode = null;
  while (true) {
    if (!curNode) {
      curNode = JSON.parse(Node);
      curNode.num = num;
      if (parentNode.num < num) {
        parentNode.right = curNode;
      }
      else {
        parentNode.left = curNode;
      }
      break;
    }
    else if (curNode.num === num) {
      curNode.cnt ++;
      break;
    }
    else if (curNode.num < num) {
      parentNode = curNode;
      parentNodesList.push(curNode);
      curNode = curNode.right;
    }
    else {
      parentNode = curNode;
      parentNodesList.push(curNode);
      curNode = curNode.left;
    }
  }

  while (parentNodesList.length > 0) {
    updateSize(parentNodesList.pop());
  }
};
SortedList.prototype.get = function(i) {
  if (!this.root) {
    return 0;
  }
  return this._find(this.root, i + 1);
};
SortedList.prototype._find = function(curNode, i) {
  var leftChildSize;
  while (true) {
    leftChildSize = curNode.left ? curNode.left.size : 0;
    if (leftChildSize >= i) {
      curNode = curNode.left;
    }
    else if (i > leftChildSize && i <= leftChildSize + curNode.cnt) {
      return curNode.num;
    }
    else {
      i = i - leftChildSize - curNode.cnt;
      curNode = curNode.right;
    }
  }
};
