const marks = (() => {
    const x = "X";
    const o = "O";
    const e = "_"; // Empty
    
    return { x, o, e };
})();

const gameboard = (() => {
    const size = 3;
    const board = Array(size).fill(null).map(x => Array(size).fill(marks.e));

    function setTile(row, column, selection) {
        board[row][column] = selection;
    };

    function isEmpty(row, column) {
        return (board[row][column] === marks.e);
    }

    function getSize() {
        return size;
    }

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
                setTile(i, j, marks.e);
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

    function isDraw() {
        return board.some(tile => tile === marks.e);
    }

    return {
        setTile,
        printBoard,
        clearBoard,
        checkWinCondition,
        isEmpty,
        isDraw,
        getSize
    };
})();

// TO DO: Switch the player class with a players IIFE that holds all the player data.

class player {
    constructor(selection, name = "Player") {
        this.selection = selection; // X or O
        this.name = name;
    }
}

const gameLogic = (() => {
    let hasStarted = false;
    let firstPlayer;
    let secondPlayer;
    let choice;

    function selectMark() {
        while(true) {
            choice = prompt(`If you want to start as ${marks.x}, enter ${marks.x}. If you want to start as ${marks.o}, enter ${marks.o}.`);
            if(choice == null) {
                console.log("No selection made. Please enter a valid choice.");
                continue;
            } else if(choice.toUpperCase() === marks.x) {
                firstPlayer = new player(marks.x);
                secondPlayer = new player(marks.o);
                console.log("Choice is x");
                break;
            } else if(choice.toUpperCase() === marks.o) {
                firstPlayer = new player(marks.o);
                secondPlayer = new player(marks.x);
                console.log("Choice is o");
                break;
            } else {
                console.log("Invalid entry.");
            }
        }
    }

    function playRound(player) {
        while(true) {
            let whichRow, whichColumn;
            while(true) {
                whichRow = prompt("Enter which row you'll place a mark on.");
                if(!validateRound(whichRow)) {
                    console.log("Invalid selection");
                    continue;
                }
                break;
            }
            while(true) {
                whichColumn = prompt("Enter which column you'll place a mark on.");
                if(!validateRound(whichColumn)) {
                    console.log("Invalid selection");
                    continue;
                }
                break;
            }
            if(!gameboard.isEmpty(whichRow, whichColumn)) {
                console.log("That box has been already marked. You need to pick another one.");
                continue;
            }
            gameboard.setTile(whichRow, whichColumn, player.selection);
            break;
        }
    }

    function validateRound(num) {
        if(num >= 0 && num <= gameboard.getSize()-1) {
            return true;
        }
    }

    function endGame(player) {
        console.log(`Player ${player.selection} has won the game!`);
        gameboard.clearBoard;
    }

    function gameLoop() {
        while(true) {
            // First players' turn
            playRound(firstPlayer);
            gameboard.printBoard();
            if(gameboard.checkWinCondition(firstPlayer.selection)) {
                endGame(firstPlayer);
                break;
            }
            // Second players' turn
            playRound(secondPlayer);
            gameboard.printBoard();
            if(gameboard.checkWinCondition(secondPlayer.selection)) {
                endGame(secondPlayer);
                break;
            }
        }
    }

    function startGame() {
        selectMark();
        gameLoop();
    }

    return {
        startGame
    };
})();

const gameboardDisplayer = (() => {
    const startGameButton = document.getElementById("start");
    const switchMarkButton = document.getElementById("switch");
    const clearScoreboardButton = document.getElementById("clear");

    startGameButton.addEventListener("click", gameLogic.startGame);
    switchMarkButton.addEventListener("click", players.switchMarks);
    clearScoreboardButton.addEventListener("click", players.clearScoreboard);

    return {

    };
})();

// gameLogic.startGame();