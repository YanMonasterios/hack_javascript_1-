/**
 * mediante el loop for agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 * output => [5,4,3,2,1]
 */
let result = [1, 2, 3, 4, 5];

result.reverse();

for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}

//export result
module.exports = result;