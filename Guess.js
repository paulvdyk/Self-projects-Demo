let maximum = parseInt(prompt("Enter the maximum number"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number !"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess or type q to quit"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high ! Enter a new guess:");
    } else {
        guess = prompt("Too low! Enter a new guess:");
    }
}
if (guess === 'q') {
    console.log("Ok, you quit!")
} else {
    console.log("Congrats you win")
    console.log(`You got it! It took you ${attempts} guesses`)
}
