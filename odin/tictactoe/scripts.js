const marks = (() => {
  const x = "X";
  const o = "O";
  const e = "_"; // Empty

  return { x, o, e };
})();

const gameboard = (() => {
  const size = 3;
  const board = Array(size)
    .fill(null)
    .map((x) => Array(size).fill(marks.e));

  function setTile(row, column, selection) {
    board[row][column] = selection;
  }

  function isEmpty(row, column) {
    return board[row][column] === marks.e;
  }

  function getSize() {
    return size;
  }

  function printBoard() {
    let board_ = "";
    board.forEach((row) => {
      let row_ = "";
      row.forEach((tile) => {
        row_ += tile;
      });
      board_ += row_ + "\n";
    });
    console.log(board_);
  }

  function clearBoard() {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        setTile(i, j, marks.e);
      }
    }
  }

  function checkWinCondition(selection) {
    // Checks for winning horizontally
    if (board.some((row) => row.every((tile) => tile === selection))) {
      return true;
    }

    // Checks for winning vertically
    for (let i = 0; i < size; i++) {
      let wonVertically = true;
      for (let j = 0; j < size; j++) {
        if (board[j][i] !== selection) {
          wonVertically = false;
          break;
        }
      }
      if (wonVertically) {
        return true;
      }
    }

    // Checks for winning diagonally
    let wonDiagonally = true;
    for (let i = 0; i < size; i++) {
      if (board[i][i] !== selection) {
        wonDiagonally = false;
        break;
      }
    }
    if (wonDiagonally) {
      return true;
    }

    // Checks for winning cross-diagonally
    let wonXDiagonally = true;
    for (let i = 0; i < size; i++) {
      if (board[i][size - i - 1] !== selection) {
        wonXDiagonally = false;
        break;
      }
    }
    if (wonXDiagonally) {
      return true;
    }

    // No win condition has been achieved, so no one has won yet
    return false;
  }

  function isDraw() {
    return board.some((tile) => tile === marks.e);
  }

  return {
    setTile,
    printBoard,
    clearBoard,
    checkWinCondition,
    isEmpty,
    isDraw,
    getSize,
  };
})();

const players = (() => {
  class player {
    constructor(mark, name = "Player", score = 0) {
      this.mark = mark; // X or O
      this.name = name;
      this.score = score;
    }
  }

  let leftPlayer = new player(marks.x);
  let rightPlayer = new player(marks.o);

  let currentPlayer = leftPlayer;

  function switchMarks() {
    const tempMark = leftPlayer.mark;
    leftPlayer.mark = rightPlayer.mark;
    rightPlayer.mark = tempMark;
  }

  function resetPlayers() {
    leftPlayer = new player(marks.x);
    rightPlayer = new player(marks.o);
    currentPlayer = leftPlayer;
  }

  function switchCurrentPlayer() {
    if (currentPlayer.mark === leftPlayer.mark) {
      currentPlayer = rightPlayer;
    } else {
      currentPlayer = leftPlayer;
    }
  }

  return {
    switchMarks,
    resetPlayers,
    switchCurrentPlayer,
    currentPlayer,
  };
})();

const tictactoeUI = (() => {
  const startGameButton = document.getElementById("start");
  const switchMarkButton = document.getElementById("switch");

  startGameButton.addEventListener("click", gameLogic.startGame);
  switchMarkButton.addEventListener("click", players.switchMarks);

  return {};
})();