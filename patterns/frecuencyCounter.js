/* Write a function called same, which accepts two arrays.
The function should return true if every value in the array 
has it's corresponding value squared in the second array. The frecuency of the values
must be the same */

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}


/*
 * Given two strings, write a function to determite if the second string is an anagram of the firts
 * 
 */

function validAnagram(stringOne, stringTwo){
    // add whatever parameters you deem necessary - good luck!
    if ( stringOne.lenght !== stringTwo.lenght ){
        return false;
    }
    
    let auxStringOne = stringOne.split('');
    let auxStringTwo = stringTwo.split('');
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    
    for (let val of auxStringOne) {
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of auxStringTwo) {
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (let key in frequencyCounter1) {
      if (!(key in frequencyCounter2)) {
        return false;
      }
      if (frequencyCounter2[key] !== frequencyCounter1[key]) {
        return false;
      }
    }
    return true
  }
