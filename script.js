function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }

  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);
  return [...sortedLeft, pivot, ...sortedRight];
}

const arr = [3, 0, 2, 5, -1, 4, 1, 10, 23, 15, 20, 12];
//if there is any duplicate value the set object make it once.
const sortedArr = quickSort([...new Set(arr)]);

console.log("Input array: " + arr);
console.log("Sorted output " + sortedArr);
