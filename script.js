Math.random()
let computerhand 
console.log(computerhand);

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

rock.addEventListener("click", function(){
    checkgame(1)
})
paper.addEventListener("click", function(){
    checkgame(2)
})
scissors.addEventListener("click", function(){
    checkgame(3)
})


function checkgame(playerhand){
    let computerhand = Math.floor((Math.random()*3) +1)
    console.log (computerhand)

    if (computerhand === 1){
        if (playerhand === 1){
            alert ("Tie!")
        }
        else if (playerhand === 2){
            alert ("Player Wins!")
        }
        else if (playerhand === 3){
            alert("Computer Wins!")
        }
    }


    else if (computerhand === 2){
        if (playerhand === 1){
            alert("Computer Wins!")
        }
        else if (playerhand === 2){
            alert("Tie!")
        }
        else if (playerhand === 3){
            alert("Player Wins!")
        }
    }


    else if (computerhand === 3){
        if (playerhand === 1){
            alert("Player Wins!")
        }
        else if (playerhand === 2){
            alert("Computer Wins!")
        }
        else if (playerhand === 3){
            alert("Tie!")
        }
    }
}





