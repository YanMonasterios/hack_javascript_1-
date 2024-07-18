/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [7,5,3,1];

let pre = result.filter(n => n % 2 !== 0).map(n => n);

pre.reverse()

console.log(pre);


//export result
module.exports = result;