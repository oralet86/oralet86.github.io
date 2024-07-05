let user_score = 0;
let server_score = 0;

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

function playRound() {
    let user_choice = getUserChoice();
    let server_choice = getServerChoice();

    let result = calculateWinner(user_choice, server_choice);
    announceWinner(result);
    
    if (result == 1) {
        user_score++;
    }
    else if (result == -1) {
        server_score++;
    }
}