Array.prototype.binary_search = function(item) {
  var array = this;
  var low = 0;
  var high = array.length - 1;
  var mid;
  while (low <= high) {
    mid = (low + high) >> 1;
    guess = array[mid];
    if (guess == item) {
      return mid;
    } else if (item < guess) {
      high = mid - 1;
    } else if (item > guess) {
      low = mid + 1;
    }
  }
  return -1;
}

var TestList = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(TestList.binary_search(1));
console.log(TestList.binary_search(11));
