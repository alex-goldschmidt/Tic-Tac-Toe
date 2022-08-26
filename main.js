const xButton= document.querySelector('.X');
const oButton= document.querySelector('.O');
const buttons = document.querySelector('.buttons');
const container = document.querySelector('.container');
const content = document.querySelector('.content');
const players = document.querySelector('.players');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const results = document.querySelector('.results');
const cells = document.querySelectorAll('.cell');
const restart = document.querySelector('.restart');

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
    let count = 0

    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    function gameLogic() {
        if (checkWinX()) {
            restart.style.boxShadow = "0 0 0 100vmax rgba(0,0,0,1)";
            restart.style.marginLeft = "215px";
            restart.innerHTML = "Play Again";

            results.innerHTML = "Player X wins the game!";
            results.style.color = "gold";
            results.style.boxShadow = "0 0 0 100vmax rgba(0,0,0,.3)";
            results.style.marginTop = "40px";
            results.style.fontSize = "50px";

            buttons.style.display = 'none';
            players.style.display = 'none';
            container.style.display = 'none';
        }
        if (checkWinO()) {
            restart.style.boxShadow = "0 0 0 100vmax rgba(0,0,0,1)";
            restart.style.marginLeft = "215px";
            restart.innerHTML = "Play Again";

            results.innerHTML = "Player O wins the game!";
            results.style.color = "blue";
            results.style.boxShadow = "0 0 0 100vmax rgba(0,0,0,.3)";
            results.style.marginTop = "40px";
            results.style.fontSize = "50px";

            buttons.style.display = 'none';
            players.style.display = 'none';
            container.style.display = 'none';
        }
         tie()
    }

    function checkWinX() {
        return winningCombos.some((combo) => {
            return combo.every((i) => {
                return cells[i].innerHTML === "X";
            })
        })
    }

    function checkWinO() {
        return winningCombos.some((combo) => {
            return combo.every((i) => {
                return cells[i].innerHTML === "O";
            })
        })
    }

    function tie() {
        if (count === 9 && checkWinO() !== true && checkWinX() !== true ) {
			results.innerHTML = "It\'s a tie!"
            restart.style.boxShadow = "0 0 0 100vmax rgba(0,0,0,1)";
            restart.style.marginLeft = "45px";
            restart.innerHTML = "Play Again";

            results.style.marginLeft = "5px";
            results.style.boxShadow = "0 0 0 100vmax rgba(0,0,0,.3)";
            results.style.marginTop = "40px";
            results.style.fontSize = "50px";
            results.style.color = 'white';
            
            buttons.style.display = 'none';
            players.style.display = 'none';
            container.style.display = 'none';
		}
    }

    cells.forEach((cell) => {
        cell.addEventListener('click', function cellClick()  {
            cell.append(content.innerHTML);
            count++;
            gameLogic();
            if (content.innerHTML === 'X') {
              content.innerHTML = 'O';
              cell.style.color = 'gold';
            }
            else {
              content.innerHTML = 'X';
              cell.style.color = 'blue';
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
        })

    restart.addEventListener('click', function restartGame() {
        window.location.reload();
})})();