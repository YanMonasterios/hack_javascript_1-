/**
 * mediante el loop for agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [1, 3, 5, 7];

// Invertir el orden de los elementos en el array
result.reverse();

for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
//export result
module.exports = result;