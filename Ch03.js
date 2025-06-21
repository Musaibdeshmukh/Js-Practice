// nn bb ss u - Primitives in Js
let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3")
let e = "Musaib"
let f = Symbol("I am a nice symbol")
let g
console.log(a, b, c , d, e, f, g)
console.log(typeof c)    // `typeof` is an operator that returns the data type of a variable or value.


// Non Primitive Data Type - Objects in Js
const item = {
  "Musaib": true,
  "Affan": false,
  "Fauzan": 67,
  "Saeed": undefined
}
console.log(item["Saeed"])