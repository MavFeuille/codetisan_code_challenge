/* Given an integer array, get the largest even number from the array, return -1 if not found.

    Examples:

    Input: [2,3,4,10,5,8]
    Output: 10
    Explanation: The largest even number in the array is 10.
*/

const getTheLargest = (arr) => {
  let evens = [];

  // Get all the even numbers from arr
  for (const num of arr) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }

  /* Return -1 if no even number is found, 
     else sort the evens array in ascending order and return the last index value which should be the largest even number.
  */
  if (evens.length === 0) {
    return -1;
  } else {
  evens.sort((a, b) => a - b)
  return evens.pop();
  }
}

console.log(getTheLargest([2,3,4,10,5,8]));
console.log(getTheLargest([3,1,9,17]));