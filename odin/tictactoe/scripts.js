const x = "X";
const o = "O";
const empty = "_";

const gameboard = (() => {
    const size = 3;
    const board = Array(size).fill(null).map(x => Array(size).fill(empty));

    function setTile(row, column, selection) {
        board[row][column] = selection;
    };

    function printBoard() {
        let board_ = "";
        board.forEach(row => {
            let row_ = "";
            row.forEach(tile => {
                row_ += tile;
            });
            board_ += row_ + "\n";
        });
        console.log(board_);
    }

    function clearBoard() {
        for(let i = 0; i < size; i++) {
            for(let j = 0; j < size; j++) {
                setTile(i, j, empty);
            }
        }
    }
    
    function checkWinCondition(selection) {
        // Checks for winning horizontally
        if(board.some(row => row.every(tile => tile === selection))) {
            return true;
        }

        // Checks for winning vertically
        for(let i = 0; i < size; i++) {
            let wonVertically = true;
            for(let j = 0; j < size; j++) {
                if(board[j][i] !== selection) {
                    wonVertically = false;
                    break;
                }
            }
            if(wonVertically) {
                return true;
            }
        }

        // Checks for winning diagonally
        let wonDiagonally = true;
        for(let i = 0; i < size; i++) {
            if(board[i][i] !== selection) {
                wonDiagonally = false;
                break;
            }
        }
        if(wonDiagonally) {
            return true;
        }

        // Checks for winning cross-diagonally
        let wonXDiagonally = true;
        for (let i = 0; i < size; i++) {
            if(board[i][size-i-1] !== selection) {
                wonXDiagonally = false;
                break;
            }
        }
        if(wonXDiagonally) {
            return true;
        }

        // No win condition has been achieved, so no one has won yet
        return false;
    }

    return {
        setTile,
        printBoard,
        clearBoard,
        checkWinCondition,
    };
})();

const gameboardDisplayer = (() => {

})();

class player {
    constructor() {
        
    }
}