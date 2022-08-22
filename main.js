const xButton = document.querySelector(".X");
const oButton = document.querySelector(".O");
const container = document.querySelector('.container');

const Player = (name, marker) => {
	return { name, marker };
    //marker = x or o
}

const game = (() => {
	for (let i=1; i<=9; i++) {
		const cell = document.createElement('div');
        cell.style.border = 'solid';
        cell.style.width = '150px';
        cell.style.height = '150px';
        cell.id = `${i}`;
		cell.className = 'cell';
        cell.style.display = 'grid';
        container.append(cell);

        container.style.display = 'inline-grid';
        container.style.gridTemplateRows = `repeat(${3}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${3}, 1fr)`;
	}
})();

