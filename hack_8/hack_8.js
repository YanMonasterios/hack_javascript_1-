/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    if (arr[i] === "bar") {
      result.push(arr[i].replace("a", "@"));
    } else if (arr[i] === "baz") {
      result.push(arr[i].replace("a", "@"));
    } else if (arr[i] === "qux") {
      result.push(arr[i].toUpperCase());
    }
  }
  
  console.log(result);

//export result
module.exports = result;