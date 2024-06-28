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
