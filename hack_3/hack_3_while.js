/**
 * mediante el loop while agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 *  output => [5,4,3,2,1]
 */
let result = [1, 2, 3, 4, 5];
let i = 0;

result.reverse();

while (i < result.length) {
  console.log(result[i]);
  i++;
}
//export result
module.exports = result;