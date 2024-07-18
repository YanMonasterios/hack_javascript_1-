/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [1, 3, 5, 7];

let pre = result.filter(n => n % 2 !== 0).map(n => n);

console.log(pre);

//export result
module.exports = result;