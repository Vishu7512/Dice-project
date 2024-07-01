// app.js

// Function to generate a random number between 1 and 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  // Function to determine the winner or if it's a draw
  function determineWinner(randomNumber1, randomNumber2) {
    const gameTitle = document.getElementById('gameTitle');
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
  
    // Set the src attribute of the dice images
    img1.setAttribute('src', `./images/dice${randomNumber1}.png`);
    img2.setAttribute('src', `./images/dice${randomNumber2}.png`);
  
    // Determine the winner or if it's a draw
    if (randomNumber1 > randomNumber2) {
      gameTitle.innerHTML = "Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
      gameTitle.innerHTML = "Player 2 Wins!";
    } else {
      gameTitle.innerHTML = "It's a Draw!";
    }
  }
  
  // Run the game on page load
  window.onload = function() {
    const randomNumber1 = rollDice();
    const randomNumber2 = rollDice();
    determineWinner(randomNumber1, randomNumber2);
  };
  