var n = parseInt(readline());
function trav(n, cb) {
  var i;
  for (i = 1; i <= n; i ++) {
    cb(i);
  }
}
function createZeroFilledArray() {
  return Array.apply( void 0, Array( 1e5 + 1 ) ).map(Number.prototype.valueOf, 0);
}

var recX = createZeroFilledArray(),
    recY = createZeroFilledArray(),
    totX = createZeroFilledArray();

trav(n, function(cur) {
  recX[cur] = readline().split(" ");
  recY[cur] = parseInt(recX[cur][1], 10);
  recX[cur] = parseInt(recX[cur][0], 10);
  totX[ recX[cur] ] ++;
});

trav(n, function(cur) {
  var resX = (n - 1) + totX[ recY[cur] ],
    resY = 2 * (n - 1) - resX;
  print(resX, resY);
});
