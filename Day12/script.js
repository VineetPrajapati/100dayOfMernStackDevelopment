/* 
Conditional Statements and Loops in JavaScript
(if, else, switch, and loops (for, while, do-while)).These ar crucial for making decisions in our code and executing tasks repeatedly.
*/

// If statement exexutes a block od code if a condition is true
let age = 18;
if (age >= 18) {
  console.log(`You are eligible to vote.`);
}

// if-else statement used to execute code when the condition is false.
let num = 10;
if (num % 2 == 0) {
  console.log(`Even number`);
} else {
  console.log(`Odd number`);
}

// else if ladder checks multiple conditions with else if.
let marks = 85;
if (marks >= 90) {
  console.log(`Grade: A`);
} else if (marks >= 75) {
  console.log(`Grade: B`);
} else {
  console.log(`Grade: C`);
}

// switch statement : evalutes an expression and matches it against multiple cases;
/* 
switch (condition) {
    case value1:
        // code for value        
        break;
    case value2:
        // Code for value2

    default:
        // Code if no case matches
        break;

} 
*/
let day = 3;
switch (day) {
  case 1:
    console.log(`Monday`);
    break;
  case 2:
    console.log(`Tuesday`);
    break;
  case 3:
    console.log(`Wednesday`);
    break;
  default:
    console.log(`Invalid day`);
}

// Loops: helps us execute a block of code multiple times.
// for loop : used when the number of iterations is known;
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// while loop : executes as long as the condition is true.
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}

// do-while loop executes the code block at least once, and then repeates while the condition is true.
let val = 1;
do {
  console.log(val);
  val++;
} while (val <= 5);
