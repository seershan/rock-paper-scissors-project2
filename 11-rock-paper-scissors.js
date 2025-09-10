const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

    updateScoreElement();

    function playGame(playerMove) {
            
    let result = '';

    let computerMove = pickComputerMove();

    if (playerMove === 'Rock') {
         if (computerMove === 'Rock') {
        result = 'Tie!';
    }
    else if (computerMove === 'Paper') {
        result = 'You Loose!';
    }
    else if (computerMove === 'Scissors') {
        result = 'You Win!';
    }
    }

    else if (playerMove === 'Scissors') {
            if (computerMove === 'Rock') {
        result = 'You Loose!';
    }
    else if (computerMove === 'Paper') {
        result = 'You Win!';
    }
    else if (computerMove === 'Scissors') {
        result = 'Tie!';
    }
    }

    else if (playerMove === 'Paper') {
         computerMove = pickComputerMove();
    result = '';

    if (computerMove === 'Rock') {
        result = 'You Win!';
    }
    else if (computerMove === 'Paper') {
        result = 'Tie!';
    }
    else if (computerMove === 'Scissors') {
        result = 'You Loose!';
    }
    }

    if (result === 'You Win!') {
        score.wins += 1;
    }
 
    else if (result === 'Tie!') {
        score.ties += 1;
    }

    else if (result === 'You Loose!') {
        score.losses += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
    // localStorage only stores string so 
    // we changed it using JSON.stringify

    updateScoreElement();

     document.querySelector('.js-result').
        innerHTML = result;

        document.querySelector('.js-moves').innerHTML =
        `You
        <img src="images/${playerMove}-emoji.png"
        class="move-icon"
        >
        <img src="images/${computerMove}-emoji.png"
        class="move-icon"
        >
        Computer`;
        }

        function updateScoreElement() {
            document.querySelector('.js-score').innerHTML = 
            `Wins: ${score.wins}, Looses: ${score.losses}, Ties: ${score.ties}`;
        }

        function pickComputerMove() {
            let computerMove = '';
            const randomNumber = Math.random();

            if (randomNumber >= 0 && randomNumber < 1/3){
                computerMove = 'Rock';
            }
            else if (randomNumber >= 1/3 && randomNumber < 2/3){
                computerMove = 'Paper';
            }
            else if (randomNumber >= 2/3 && randomNumber < 1){
                computerMove = 'Scissors'
            }

            return computerMove;
                }
