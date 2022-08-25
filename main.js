const xButton= document.querySelector('.X');
const oButton= document.querySelector('.O');
const container = document.querySelector('.container');
const content = document.querySelector('.content');
const players = document.querySelector('.players');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const results = document.querySelector('.results');
const cells = document.querySelectorAll('.cell');


const Player = (name, marker) => {
	return { name, marker };
    //marker = x or o
}

const markerSelection = (e) => {
    switch (e.target.dataset.value) {
        case "X":
        console.log("X");
        content.innerHTML = "X";
        break;

        case "O":
        console.log("O");
        content.innerHTML = "O";
        break;
    }};

xButton.addEventListener('click', markerSelection);
oButton.addEventListener('click', markerSelection);

const gameBoard = (() => {
        cells.forEach((cell) => {
            cell.addEventListener('click', function cellClick() {
                cell.append(content.innerHTML);
                if (content.innerHTML === 'X') {
                  content.innerHTML = 'O';
                }
                else {
                  content.innerHTML = 'X';
                }
                cell.removeEventListener("click", cellClick);
            });    
        })

    xButton.addEventListener('click', function xClick() {
        player1.innerHTML = "Player 1 is X";
        player2.innerHTML = "Player 2 is O";
        oButton.disabled = 'true';
        xButton.disabled = 'true';
        });
    
    oButton.addEventListener('click', function oClick() {
         player1.innerHTML = "Player 1 is O";
         player2.innerHTML = "Player 2 is X";
         xButton.disabled = 'true';
         oButton.disabled = 'true'; 
})})();