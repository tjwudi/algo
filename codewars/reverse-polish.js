function calc(expr) {
  var exprs = expr.split(/\s+/),
      stack = [];
  if (expr.length === 0 || !exprs || exprs.length === 0) {
    return 0;
  }
  exprs.map(function(val) {
    var first, second;
    if (['+', '-', '*', '/'].indexOf(val) !== -1) {
      second = '(' + stack.pop() + ')';
      first = '(' + stack.pop() + ')';
      stack.push(eval(first + val + second));
    }
    else {
      stack.push(val);
    }
  });
  return parseFloat(stack[stack.length - 1]);
}

