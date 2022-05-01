/* Write a JavaScript function to check whether a string contains 'code' string, 
   return true if it contains 'code' string or return false otherwise.
*/

const checkString = (str, search) => {
  let strLowerCase = str.toLowerCase();
//   console.log("🚀 ~ file: check_substring.js ~ line 7 ~ checkString ~ newStr", newStr);
  let searchLowerCase = search.toLowerCase();
//   console.log("🚀 ~ file: check_substring.js ~ line 9 ~ checkString ~ searchLowerCase", searchLowerCase)
  return strLowerCase.includes(searchLowerCase) ? true : false;
};

// console.log(checkString('Codetisan', 'code'));
// console.log(checkString('source code', 'CODE'));
console.log(checkString('Developer', 'code'));