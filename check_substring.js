/* Write a JavaScript function to check whether a string contains 'code' string, 
   return true if it contains 'code' string or return false otherwise.
*/

const checkString = (str, search) => {
  let strLowerCase = str.toLowerCase();
  let searchLowerCase = search.toLowerCase();
  return strLowerCase.includes(searchLowerCase) ? true : false;
};

console.log(checkString('Codetisan', 'code'));
console.log(checkString('source code', 'CODE'));
console.log(checkString('Developer', 'code'));