var ret;

snail = function (arr) {
  if ( !arr || (arr.length === 1 && arr[0].length === 0) ) {
    return [];
  }
  ret = [];
  destruct(arr, 0);
  return ret;
};

function destruct(arr, level) {
  var n = arr.length - level * 2,
      cur, i,
      len = arr.length;
  for (i = 0, cur = level; i < n; i++, cur++) {
    ret.push( arr[level][cur] );
  }
  for (i = 0, cur = level + 1; i < n - 1; i++, cur++) {
    ret.push( arr[cur][len - 1 - level] );
  }
  for (i = 0, cur = len - 2 - level; i < n - 1; i++, cur--) {
    ret.push( arr[len - 1 - level][cur] );
  }
  for (i = 0, cur = len - 2 - level; i < n - 2; i++, cur--) {
    ret.push( arr[cur][level] );  
  }
  if (n > 2) {
    destruct(arr, level + 1);
  }
}

var array = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];

console.log(snail(array));

