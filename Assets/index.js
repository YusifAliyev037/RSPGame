console.log(window);
const gameRule = ["r", "s", "p"];
let playerpoint1 = 0;
let playerpoint2 = 0;





function randomElement(){
    const randomIndex = Math.floor(Math.random() * gameRule.length);
    return gameRule[randomIndex];
}

function resultGame(u,c){
    console.log(u);
    console.log(c);


    if(u == "r" && c == "s"){
        console.log("WIN");
        playerpoint1+=1;
    }
    else if( u == "s" && c == "p"){
        console.log("WIN");
        playerpoint1+=1;
    }
    else if( u == "p" && c == "r"){
        console.log("WIN");
        playerpoint1+=1;
    }
    else if( u == c){
        console.log("DRAW");
    }
    else{
        console.log("LOSE");
        playerpoint2+=1;
    }

}

window.addEventListener("keypress", function(e){
    // console.log(e.key);
    const userChoise = e.key; 
    if(gameRule.indexOf(userChoise) !=-1){
        const compchoise = randomElement();
        resultGame(userChoise, compchoise)
    }else{
        alert("Duzgun herf sec: bunlar olmalidir: r s p")
    }
    
})