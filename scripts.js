let user_score = 0;
let server_score = 0;

const rock_button = document.querySelector("img#rock");
const paper_button = document.querySelector("img#paper");
const scissors_button = document.querySelector("img#scissors");

rock_button.addEventListener("click", () => { return playRound("rock", getServerChoice()) })
paper_button.addEventListener("click", () => { return playRound("paper", getServerChoice()) })
scissors_button.addEventListener("click", () => { return playRound("scissors", getServerChoice()) })

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

function playRound(user_choice, server_choice) {
    let result = calculateWinner(user_choice, server_choice);
    if (result == 1) {
        user_score++;
    }
    else if (result == -1) {
        server_score++;
    }

    console.log(`scoreboard: user ${user_score} - ${server_score} server`);
}

function getServerChoice() {
    let response = Math.floor(Math.random()*3)

    switch (response) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}