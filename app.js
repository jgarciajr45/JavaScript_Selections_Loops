console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FIZZBUZZ');
    } else if (i % 3 === 0) {
        console.log('FIZZ'); 
    } else if (i % 5 === 0) {
        console.log('BUZZ');
    }
}
// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

console.log("Ex1 while loop");
let i = 1;
while (i <= 100) {
    if (i % 2 !==0) {
        console.log(i);
    }
    i++;
}
console.log("Ex1 Do/While loop");
i = 1;
do {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
} while (i <= 100);

console.log("Ex2 while loop");
i = 1;
while (i <=100) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FIZZBUZZ');
    } else if (i % 3 === 0) {
        console.log('FIZZ');
    } else if (i % 5 === 0) {
        console.log('BUZZ');
    }
    i++;
}
console.log("Ex2 Do/While loop");
i = 1;
do {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FIZZBUZZ');
    } else if (i % 3 === 0) {
        console.log('FIZZ'); 
    } else if (i % 5 === 0) {
        console.log('BUZZ');
    }
    i++;
} while (i <= 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
