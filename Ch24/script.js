// MATCHES, CLOSEST, CONTAINS

let id1 = document.getElementById("id1")
let sp1 = document.getElementById("sp1")
console.log(id1)
console.log(id1.matches(".class"))
console.log(id1.matches(".box"))
console.log(sp1.closest("#sp1"))
console.log(id1.contains(sp1))
console.log(sp1.contains(sp1))
console.log(sp1.contains(id1))