function pascalsTriangle(n) {
  if (n === 1) {
    return [1];
  }
  var prev = pascalsTriangle(n - 1), len = prev.length;
  prev.push(1);
  for (var i = len - n + 1; i < len - 1; i ++) {
    prev.push(prev[i] + prev[i + 1]);
  }
  prev.push(1);
  return prev;
}

/*
Write a function that, given a depth (n), returns a single-dimensional array representing Pascal's Triangle to the n-th level.

For example:

    pascalsTriangle(4) == [1,1,1,1,2,1,1,3,3,1]

 */