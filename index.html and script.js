<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="js/ui.js"></script>
    <script src="js/script.js"></script>
</body>
</html>

// javascript code :
let low = 1;
let high = 10;
let correct_ans = Math.floor(Math.random() * (high - low + 1)) + low;
let chances = 3;
let isWin = false;

while (chances > 0) {
    let userGuess = parseInt(prompt(`Guess a number between ${low} and ${high}`));

    if (userGuess < correct_ans) {
        alert("Correct answer is greater!");
    } else if (userGuess > correct_ans) {
        alert("Correct answer is smaller!");
    } else {
        alert("Congratulations! You guessed the correct number!");
        isWin = true;
        break;
    }

    chances--;
}

if (!isWin) {
    alert(`Sorry, you lost! The correct answer was ${correct_ans}`);
}

