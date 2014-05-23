function SortedList() {
  this.length = 0;
  this.nums = [];
}

SortedList.prototype.add = function(val) {
  this.nums.splice(this.find(val, this.nums) + 1, 0, val)
  this.length++;
}

SortedList.prototype.find = function(element, array, start, end) {
  start = start || 0;
  end = end || array.length;
  var pivot = parseInt(start + (end - start) / 2, 10);
  if (array[pivot] === element) return pivot;
  if (end <= 1 + start)
    return array[pivot] > element ? pivot - 1 : pivot;
  if (array[pivot] < element) {
    return this.find(element, array, pivot, end);
  } else {
    return this.find(element, array, start, pivot);
  }
}

SortedList.prototype.get = function(i) {
  return this.nums[i];
}