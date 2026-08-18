let humanScore = 0;
let computerScore =0;

function getComputerChoice()
{
   let answer =  Math.floor(Math.random() *3);
   if (answer === 0)
    {
        return "r";
    } 
    else if(answer === 1)
    {
        return "p";
    }
    else
    {
        return "s";
    }
}




function getHumanChoice()
{
    let answer = prompt ("Type r for rock,p for paper or s for scissors").toLowerCase();
    return answer;

}





function playRound(human,computer)
{
    if ((human=="r" && computer == "s") ||(human == "s" && computer == "p") || (human == "p" && computer == "r"))
    {
        alert("You win!");
        humanScore +=1;
        console.log(`Your Score:${humanScore} Computer Score:${computerScore}`);
    }
    else if (human == computer)
    {
        alert("Tie!")
        console.log(`Your Score:${humanScore} Computer Score:${computerScore}`);
    }
    else
    {
        alert("Computer Win!")
        computerScore +=1;
        console.log(`Your Score:${humanScore} Computer Score:${computerScore}`);
    }

}

function playGame ()
{
    let humanChoice = getHumanChoice();
    console.log (`You choice ${humanChoice}`);
    let computerChoice = getComputerChoice();
    console.log (`Computer Choice : ${computerChoice}`);

    playRound(humanChoice,computerChoice);
}

for (let i =0; i<=5; i++)
{
    playGame();
}

if (humanScore > computerScore)
{
    alert(`You win with Your Score: ${humanScore} | Computer Score ${computerScore}`);
}
else if (computerScore > humanScore)
{
    alert(`Computer win with Your Score: ${humanScore} | Computer Score ${computerScore}`);
}
else 
{
    alert(`The Game Tie with Your Score: ${humanScore} | Computer Score ${computerScore}`);
}


