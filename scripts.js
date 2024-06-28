let user_score = 0;
let server_score = 0;

function getUserChoice() {
    let response = prompt("Write 'rock', 'paper' or 'scissors' to play. \n If you win, you get a cookie!");
    return (response.toLowerCase().trim())
}

function getServerChoice() {
    let response = Math.random()*3

    switch (response%3) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function calculateWinner(first_player_choice, second_player_choice) {
    // returns 1 if first player wins, -1 if second player wins, 0 if it's a tie
    if (first_player_choice == "rock") {
        if (second_player_choice == "rock") {
            return 0
        }
        else if (second_player_choice == "paper") {
            return -1
        }
        else {
            return 1
        }}

    else if (first_player_choice == "paper") {
        if (second_player_choice == "rock") {
            return 1
        }
        else if (second_player_choice == "paper") {
            return 0
        }
        else {
            return -1
        }}

    else if (first_player_choice == "scissors") {
        if (second_player_choice == "rock") {
            return -1
        }
        else if (second_player_choice == "paper") {
            return 1
        }
        else {
            return 0
        }}
}