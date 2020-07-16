let mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const leftSide = arr.slice(0, middle);
  const rightSide = arr.slice(middle, arr.length);

  return merge(mergeSort(leftSide), mergeSort(rightSide));
};

let merge = (left, right) => {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
};

export { mergeSort, merge };
