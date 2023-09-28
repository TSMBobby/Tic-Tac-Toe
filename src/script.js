const cells = document.querySelectorAll('.tic-tac-toe-cell');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(e) {
    const cell = e.target;
    const cellIndex = Array.from(cells).indexOf(cell);

    if (gameBoard[cellIndex] === '' && gameActive) {
        gameBoard[cellIndex] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.style.backgroundColor = '#fff';

        if (checkWin(currentPlayer)) {
            announceWinner(currentPlayer);
        } else if (checkDraw()) {
            announceDraw();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin(player) {
    for (const combo of winningCombos) {
        if (
            gameBoard[combo[0]] === player &&
            gameBoard[combo[1]] === player &&
            gameBoard[combo[2]] === player
        ) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return gameBoard.every(cell => cell !== '');
}

function announceWinner(player) {
    gameActive = false;
    alert(`Spieler ${player} gewinnt!`);
}

function announceDraw() {
    gameActive = false;
    alert('Unentschieden!');
}

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});
