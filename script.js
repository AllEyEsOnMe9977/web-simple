let ComputerScore = 0;
let PlayerScore = 0;
let PlayerResult = document.getElementById('PlayerResult');
let ComputerResult = document.getElementById('ComputerResult');
let result = document.getElementById('result');
function Choices(PlayerChoice) {
    let comChoice = Math.floor(Math.random() * 3) + 1;
    let pc;

    switch (comChoice) {
        case 1:
            pc = 'Rock';
            break;
        case 2:
            pc = 'Paper';
            break;
        case 3:
            pc = 'Scissor';
            break;
        default:
            break;
    }

    PlayerResult.textContent = `Player: ${PlayerChoice}`;
    ComputerResult.textContent = `Computer: ${pc}`;

    if (PlayerChoice === pc) {
        // Draw
        ComputerScore++;
        PlayerScore++;
        result.textContent = "WithDraw!";
    } else {
        // Determine the winner
        if (
            (PlayerChoice === 'Rock' && pc === 'Paper') ||
            (PlayerChoice === 'Scissor' && pc === 'Rock') ||
            (PlayerChoice === 'Paper' && pc === 'Scissor')
        ) {
            // Computer wins
            ComputerScore += 10;
            PlayerScore -= 5;
            result.textContent = "Computer Won!";
        } else {
            // Player wins
            ComputerScore -= 5;
            PlayerScore += 10;
            result.textContent = "You Won!";
        }
    }

    document.getElementById('ComputerScore').textContent = `Computer Score: ${ComputerScore}`;
    document.getElementById('PlayerScore').textContent = `Player Score: ${PlayerScore}`;
}
function ResetScores(){
    ComputerScore = 0;
    PlayerScore = 0;

    document.getElementById('ComputerScore').textContent = `Computer Score: ${ComputerScore}`;
    document.getElementById('PlayerScore').textContent = `Player Score: ${PlayerScore}`;

    // Reset other UI elements as needed
    PlayerResult.textContent = 'Player_Choice:';
    ComputerResult.textContent = 'Comp_Choice';
}