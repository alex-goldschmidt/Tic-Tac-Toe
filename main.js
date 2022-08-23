const xButton= document.querySelector('.X');
const oButton= document.querySelector('.O');
const container = document.querySelector('.container');
const content = document.querySelector('.content');

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
	for (let i = 1; i <= 9; i++) {
		const cell = document.createElement('div');
        cell.style.border = 'solid';
        cell.style.width = '150px';
        cell.style.height = '150px';
        cell.style.fontSize = '100px';
        cell.id = `${i}`;
        cell.className = 'cell';
        cell.style.display = 'grid';
        cell.style.justifyContent = 'center';
        cell.style.alignContent = 'center';
        container.append(cell);

        cell.addEventListener('click', function cellClick() {
            cell.append(content.innerHTML);
            if (content.innerHTML === 'X') {
              content.innerHTML = 'O'
            }
            else {
              content.innerHTML = 'X';
            }
            cell.removeEventListener("click", cellClick);
        });

        container.style.display = 'inline-grid';
        container.style.gridTemplateRows = `repeat(${3}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${3}, 1fr)`;
	}
})();