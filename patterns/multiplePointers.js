/**
 * Example: Write a function called sumZero wich accpets a sorted array of intergers
 * The function should find the first pair where the sum is 0. Return an array that includes both values
 * that sum to zero or undefined if a pair does not exist
 *  
 */
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);

/**
 * Exercise: 
 * Implement a function called countUniqueValues wich accepts a sorted
 * arraym and counts the unique values in the array. There can be negative 
 * number in the arraym but it will always be sorted.
 *
 */
