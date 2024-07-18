/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let n = 0;
let result = [1, 3, 5, 7];

result.reverse();

while (n < result.length) {
  console.log(result[n]);
  n++;
}
//export result
module.exports = result;