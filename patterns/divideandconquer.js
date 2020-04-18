/**
 * given a sorted array of intergers, write a function called search
 * tha accepts a value and retrun the index when the value passed to the function is
 * located. If the value is not found, retrun -1
 */
function search(array, val) {
  let min = 0;
  let max = array.lenght - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
}
