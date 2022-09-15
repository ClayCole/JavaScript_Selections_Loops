console.log("Hello World!\n==========\n");

// // Exercise 1 Section
// for (let index = 0; index <= 100; index++) {
//     if (index % 2 != 0) {
//         console.log(index);
//     }
//     else{
//         console.log();
//     }
          
// }

// // Exercise 2 Section
// for (let index = 1; index <= 100; index++) {
//     if (index % 3 == 0 && index % 5 == 0) {
//         console.log('FIZZBUZZ', index)
//     }
//     else if (index % 3 == 0) {
//         console.log('FIZZ', index)
//     }
//     else if (index % 5 == 0) {
//         console.log('BUZZ', index)
//     }
//     else{
//         console.log();
//     }
// }

// // Exercise 3 section 
// let index = 1;
// do {
//     if (index % 2 != 0) {
//         console.log(index);
//     }
//     index++;
// } while (index<=100);

// // Exercise 4
// let value = Math.round((Math.random() * 500)); // creates a random number 
// between 0 and 500

// let n = Math.round(Math.random() * (500 - 100) + 100);// creates a random number 
// between 100 and 500

// for (let index = 0; index <= n; index++) {
//     if (index == value) {
//         console.log("Found Value", index);
//         break;
//     }
//     if (index == n) {
//         console.log("Did not find Value",index);
//     }
    
// }

// // Exercise 5

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let index = start; index <= n; index++) {
        if (index % fizzDivisor == 0 && index % buzzDivisor == 0) {
            console.log('FIZZBUZZ', index)
        }
        else if (index % fizzDivisor == 0) {
            console.log('FIZZ', index)
        }
        else if (index % buzzDivisor == 0) {
            console.log('BUZZ', index)
        }
        else{
            console.log();
        }
    }


