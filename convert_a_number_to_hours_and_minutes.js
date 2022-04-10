/* Write a JavaScript function to convert a given number in minutes to hours and minutes.
    Examples:

    Input: 235
    Output: '3:55'
    Explanation: 235 is equal to 3 hours and 55 minutes.
*/

const covertTime = (num) => {
  let hour = Math.floor(num / 60);
  console.log("🚀 ~ file: convert_a_number_to_hours_and_minutes.js ~ line 11 ~ covertTime ~ hour", hour)
  let minutes = num - hour * 60;
  return `${hour}:${minutes}`;
}

console.log(covertTime(235));