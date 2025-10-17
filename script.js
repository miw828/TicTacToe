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
const tiles = document.querySelectorAll(".tiles"); // this gets ALL of the class that are named tiles in the HTML program 

let playerSubmit = document.getElementById("submit"); // submit button
let restart = document.getElementById("restart"); // restart button
const playerHeader = document.getElementById("playerHeader"); 

const playerOne = {
    player: document.getElementById("playerOne"), 
    marker: 'X' 
}
const playerTwo = {
    player: document.getElementById("playerTwo"), 
    marker: 'O' 
}

let currentPlayer = playerOne; // will switch later down the line

const playerModal = document.getElementById("player"); 
const statusModal = document.getElementById("status"); 




let gameBoard = ["", "", "", "", "", "", "", "", ""]; // this is the gameBoard

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


tiles.forEach((tile, index) => { // this is an action with parameters 
    // tile is the div thats being changed 
    // index is the pointer in which the user is clicking 
    tile.addEventListener('click', () => {// is tile is clicked
        
    
        if (gameBoard[index] === "" && !gameEnd) { // if the tile is empty 
            gameBoard[index] = currentPlayer.marker; // lets the system know gameBoard[0] = 'X
            tile.textContent = currentPlayer.marker; // adds the textContent that it is equal to X
           
          
        if(win()){
        gameEnd = true; 
    statusModal.style.display = "block"; 
    statusModal.innerHTML +=`<h3>${currentPlayer.player.value}'s Wins!!</h3>`;
    
}


currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne; // switched
playerHeader.innerHTML = `<h3>${currentPlayer.player.value}'s Turn</h3>`; 
             
            
        }
    });
});


function win(){
   
  for (let i = 0; i < winConditions.length; i++) { // creates a for loop 
    const [a, b, c] = winConditions[i]; // groups each winCondition together 
    
    if (
      gameBoard[a] !== "" &&  // if one tile is not empty and all three tiles are equal to one another there is a winner
      gameBoard[a] === gameBoard[b] && 
      gameBoard[a] === gameBoard[c]
    ) {
      return true; // there’s a winner
    }
  }
  return false; // no win yet
}
playerSubmit.addEventListener("click", (e) => {  // this will just make the modal disappear
    
    e.preventDefault(); 
    playerModal.style.display = "none"
     
})



    








