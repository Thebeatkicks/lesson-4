/* EXERCISE 1: Guess the random number 

Create a function guessNumberGame that generates a random number between 1 and 10. 

The function should repeatedly prompt the user to guess the number until the correct number is guessed. 

Use a while loop to keep asking the user for input until they guess correctly.  

Provide feedback if the guess is too high or too low. */

function guessNumberGame() {
const randomNumber = Math.floor(Math.random() * 10) + 1;
let guess = null;

while (parseInt(guess) !== randomNumber) {
    guess = prompt("Pick a number between 1-10!"); 
    const guessNumber = parseInt(guess);

    if (guessNumber < randomNumber) {
        alert("Too low! Try again!");
    } else if (guessNumber > randomNumber) {
        alert("Too high! Try again");
    }

}

alert("Correct! The number was" + randomNumber + "!");

}

/* EXERCISE 2: Create an array of random numbers 

Create a function generateRandomArray that accepts one argument: length (the length of the array). 

Inside the function, use a for loop to generate an array of random numbers between 1 and 100. 

Return the array from the function. */

 function generateRandomArray(lenght) {
    const randomArray = []

    for (let i = 0; i <= lenght; i++) {
        if (i !== lenght) {
            randomArray.push(Math.floor(Math.random() * 100) + 1);
        }
        else {
            console.log(randomArray)
        }
    }
        

    //lenght är hur många loopar
    //varje loop addar en random siffra. 
    
    //lenght = randomNumber;

    //console.log(lenght)
 }

 

/* EXERCISE 3: Calculate the sum of even numbers in the array 

Create a function sumEvenNumbers that accepts an array as an argument. 

Use a for loop to iterate through the array and calculate the sum of the even numbers. 

Return the sum of the even numbers. */