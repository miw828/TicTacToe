// 1. Create Gameboard 
// 2. checkWin function 
        // show all the ways to win if boolean = true 
        // gameEnd is = true 
        // if gameEnd == true 

        // modual-status display block 
        // text of who won is shown and restart game is shown 
// 3. Block modual status display
//     
// 4. Start with modual player display 


let gameEnd = false; 
const tiles = document.querySelectorAll("tiles"); // this gets ALL of the class that are named tiles in the HTML program 

let playerSubmit = document.getElementById("submit"); // submit button
let restart = document.getElementById("restart"); // restart button'


const playerOne = {
    player: document.getElementById("playerOne"), 
    marker: 'X' 
}
const playerTwo = {
    player: document.getElementById("playerTwo"), 
    marker: 'O' 
}

let currentPlayer = playerOne ? playerTwo : playerOne; 
const playerModal = document.getElementById("player"); 

let gameBoard = ["", "", "", "", "", "", "", "", ""]; // this is the gameBoad

const winConditions = [ 
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

tiles.forEach((tiles, index) => { // creates the loop that 

    tiles.addEventListener('click', () =>{
        if(gameBoard[index] === ""){
            gameBoard[index] = currentPlayer.marker; 
            tiles.textContent = currentPlayer.marker; 
        }
    }
    )

})


playerSubmit.addEventListener("click", (e) => {  // this 
    e.preventDefault(); 
    playerModal.style.display = "none"
    document.getElementById("playerOne").value = ""; // resets the input
    document.getElementById("playerTwo").value = ""; 
})


