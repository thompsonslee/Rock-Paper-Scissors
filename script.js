Math.random()
let computerhand 
console.log(computerhand)

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

rock.addEventListener("click", function(){
    checkgame(1)
});
paper.addEventListener("click", function(){
    checkgame(2)
});
scissors.addEventListener("click", function(){
    checkgame(3)
});


function checkgame(playerhand){
    let computerhand = Math.floor((Math.random()*3) +1)
    console.log (computerhand)

    if (computerhand === 1){
        if (playerhand === 1){
            scoring("tie")
        }
        else if (playerhand === 2){
            scoring("playerwin")
        }
        else if (playerhand === 3){
            scoring("computerwin")
        }
    }


    else if (computerhand === 2){
        if (playerhand === 1){
            scoring("computerwin")
        }
        else if (playerhand === 2){
            scoring("tie")
        }
        else if (playerhand === 3){
            scoring("playerwin")
        }
    }


    else if (computerhand === 3){
        if (playerhand === 1){
            scoring("playerwin")
        }
        else if (playerhand === 2){
            scoring("computerwin")
        }
        else if (playerhand === 3){
            scoring("tie")
        }
    }
}
let computerscore = 0
let playerscore = 0
function scoring(result){
    if (computerscore === 5){
        alert("computer wins")
    }
    else if (playerscore ===5){
        alert("player wins")
    }
    //if no one has won, run code below
    else if (result === "playerwin"){
            playerscore += 1
            document.getElementById("playerscore").innerHTML = playerscore
        }
    else if (result === "computerwin"){
            computerscore += 1
            document.getElementById("computerscore").innerHTML = computerscore
        }
    else if (result === "tie"){ 
            return ("tie")
        }
        console.log (computerscore)
        console.log (playerscore)
    }





