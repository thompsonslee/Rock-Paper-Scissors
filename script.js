Math.random()
let computerhand = Math.floor((Math.random()*3) +1)
let playerhand = parseInt(prompt("enter 1,2,3"))

if (playerhand === 1 || playerhand === 2 || playerhand === 3){
    checkgame()
}






function checkgame(){

    
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
