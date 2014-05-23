/*


 */

// just a small amount of possible functions to start testing with.
var addOne = function(e) {return e + 1;};
var square = function(e) {return e * e;};

// Extend the Function prototype with a method pipe
Function.prototype.pipe = function(fn) {
  var that = this;
  return function(num) {
    return fn.call(null, that.call(null, num));
  };
};

