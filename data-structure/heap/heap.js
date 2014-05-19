module.exports = Heap;

function Heap(cmp) {
  this.data = [];
  this.cmp = cmp || function(a, b) { return a < b; }
}

function leftChild(pos) {
  return pos * 2 + 1;
}

function rightChild(pos) {
  return pos * 2 + 2;
}

function parent(pos) {
  return ( pos - 1 ) / 2;
}

function swap(x, y) {
  var tmp = this.data[x];
  this.data[x] = this.data[y];
  this.data[y] = this.data[x];
}

function valid(pos) {
  return ( pos < 0 || pos >= this.data.length );
}

Heap.prototype.push = function(num) {
  this.data.push(num);
  this._moveUp(this.data.length - 1);
};

Heap.prototype.pop = function() {
  if (this.data.length === 1) {
    this.data.pop();
  }
  if (this.data.length === 0) {
    return;
  }
  swap(0, this.data.length - 1);
  this.data.pop();
  this._moveDown(0);
};

Heap.prototype._moveUp = function(pos) {
  if (pos === 0) {
    return;
  }
  if (!this.cmp( this.data[parent(pos)], this.data[pos] )) {
    swap(parent(pos), pos);
    this._moveUp(parent(pos));    
  }
};

Heap.prototype._moveDown = function(pos) {
  if (valid(left(pos)) && !this.cmp( this.data[pos], this.data[leftChild(pos)] )) {
    swap(pos, leftChild(pos));
    this._moveDown(leftChild(pos));
  }
  else if (valid(left(pos)) && !this.cmp( this.data[pos], this.data[rightChild(pos)] )) {
    swap(pos, rightChild(pos));
    this._moveDown(rightChild(pos));
  }
};