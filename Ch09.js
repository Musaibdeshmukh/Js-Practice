// let p = fetch('https://goweather.xyz/weather/warsaw');
// p.then(response => {
//     console.log(response.status);
//     console.log(response.ok);
//     return response.json();
// }).then(value2 => {
//     console.log(value2);
// })

// const createTodo = async () => {

// let options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//          title: 'Musaib',
//     body: 'Deshmukh',
//     userId: 1998,
//     }), 
// }

// let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//   let response = await p.json();
//   return response;
// }
// mainfunc = async () => {
//     let todo = await createTodo();
//     console.log(todo);
// }
// mainfunc();



/*
 const createTodo = async (todo) => {
        let options = {
                method: "POST",
                headers: {
                        "Content-type": "application/json"
                },
                body: JSON.stringify(todo),
        }
        let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
        let response = await p.json()
        return response
}

const getTodo = async (id) => {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        let r = await response.json()
        return r
}

const mainFunc = async () => {
        let todo = {
                title: 'Harry2',
                body: 'bhai2',
                userId: 1100,
        }
        let todor = await createTodo(todo)
        // console.log(todor)
        console.log(await getTodo(100))
}

mainFunc()
*/


// INNERHTML AND OUTERHTML IN JS

/* async function musaib() {
        let iznikWeather = new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve("27 Deg")
                }, 2000)
        })
        let istanbulWeather = new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve("21 Deg")
                }, 5000)
        })
        //     iznikWeather.then(alert)
        //     istanbulWeather.then(alert)
        console.log("Fetching iznik weather please wait...");
        let iznikW = await iznikWeather;
        console.log("Fetched iznik weather:" + iznikW);

        console.log("Fetching istanbul weather please wait...");
        let istanbulW = await istanbulWeather;
        console.log("Fetched istanbul weather:" + istanbulW);

        return [iznikW, istanbulW];
}
const rihab = async () => {
        console.log("Hey I am rihab and I am waiting")
}
const main1 = async () => {
        console.log("Welcome to weather control room");
        let a = await musaib();
        let b = await rihab();
}
main1();  */

// TRY AND CATCH IN JS

let a = prompt("Enter first number");
let b = prompt("Enter second number");
if (isNaN(a) || isNaN(b)) {
        throw syntaxError("Sorry this is not valid");
}
let sum = parseInt(a) + parseInt(b);
// let x = 10;
try {
        console.log("The sum is", + sum * x);
} catch (error) {
        console.log("An error occurred")
}
