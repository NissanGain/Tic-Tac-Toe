let currentPlayer = 'X';

let gameBoard = ['', '', '', '', '', '', '', '', ''];

const winningCombinations = [

    [0, 1, 2], [3, 4, 5], [6, 7, 8],

    [0, 3, 6], [1, 4, 7], [2, 5, 8],

    [0, 4, 8], [2, 4, 6]

];

function placeMark(cell) {

    const cellIndex = Array.from(cell.parentNode.children).indexOf(cell);

    if (gameBoard[cellIndex] === '' && !checkWinner()) {

        gameBoard[cellIndex] = currentPlayer;

        cell.textContent = currentPlayer;

        

        if (checkWinner()) {

            alert(`Player ${currentPlayer} wins!`);

        } else if (gameBoard.every(cell => cell !== '')) {

            alert("It's a draw!");

        } else {

            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

        }

    }

}

function checkWinner() {

    return winningCombinations.some(combination => {

        const [a, b, c] = combination;

        return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c];

    });

}