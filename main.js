/**
 * 2.3 - Mathematics
 * ICS3 - Mr. Brash 🐿️
 * 
 * Make sure to read the README.md (especially if you missed class)
 * Then checkout the YOUR_TASK.md to see the practice plan
 * 
 * Don't forget - these are playgrounds. Once you finish the requested task, feel free to play.
 **/ 

// Get a random number between 0 and 100
let random_number = Math.random() * 100

// Round it to the nearest whole number
random_number = Math.round(random_number)

// Output the result usijng a new way to insert a variable into a string (called a template)
console.log(`I generated the number ${random_number}`)

// ***  Your code goes below  ***

let celcius = 100
let fahrenheit = 0
celcius +=2
fahrenheit = (celcius * 9/5) + 32 
console.log(fahrenheit)

// Part 2

fahrenheit = 77
celcius = (fahrenheit - 32) * 5/9
console.log(celcius)

// Part 3

console.log(`${77} degrees Fahrenheit is ${celcius} degrees celsius.`)

// Math gives me a headache :(

// Part 4...

let y2 = 0
let y1 = 5
let x2 = 6
let x1 = -4
m = (y2 - y1)/(x2 - x1)
console.log(m)

// Part 5 AUUUGHHHH

let r = Math.random() * 10;
let h = Math.random() * 10;
let volume = Math.round(Math.PI * r**2 * h)
console.log(`The volume of my random cylinder is ${volume}`)
