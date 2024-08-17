const x = "X";
const o = "O";
const empty = "_";

const gameboard = ((size = 3) => {
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

    return {
        setTile,
        printBoard
    };
})();

const gameboardDisplayer = (() => {

})();

class player {
    constructor() {
        
    }
}
