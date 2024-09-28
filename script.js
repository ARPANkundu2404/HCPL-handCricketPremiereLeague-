let runs = 0;
let totalruns = 0;

const choices = document.querySelectorAll(".choice");
const runspara = document.querySelector("#runs");
const totalrunspara = document.querySelector("#totalruns");
const restartButton = document.querySelector("#restart");

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = parseInt(choice.getAttribute("id"));
        console.log("choice was clicked",userChoice);
        playGame(userChoice)
    });
});

const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    const computerChoice = genComputerChoice();
    console.log("comp choice = ",computerChoice);

    if(userChoice == computerChoice){
        out();
    }
    else{
        runspara.innerHTML = userChoice;  
        totalruns += userChoice;  
        totalrunspara.innerHTML = totalruns; 
    }
};

const genComputerChoice = () => {
    const options = [0,1,2,3,4,5,6];
    const randid = Math.floor(Math.random() * 7);
    return options[randid];
}

const out = () => {
    console.log(" Out's that. ");
    alert("Out's that! start from beginning.");
    restartGame();  
};
 
const restartGame = () => {
    runs = 0;
    totalruns = 0;
    runspara.innerHTML = 0;  
    totalrunspara.innerHTML = 0;  
};

restartButton.addEventListener("click", restartGame);