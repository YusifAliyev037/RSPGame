const user = document.querySelector("#user");
const computer = document.querySelector("#computer");
const score = document.querySelector("#score");
const final = document.querySelector("#final");
const final1 = document.querySelector("#final1");
const score1 = document.querySelector("#score1");
const userImg = document.querySelector("#userImg");
const compImg = document.querySelector("#compImg");


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
userImg.src = `./Assets/img/${u}.png`;
compImg.src = `./Assets/img/${c}.png`;



    if(u == "r" && c == "s"){
        final.innerHTML = "WIN";
        playerpoint1+=1;
        score.innerHTML = playerpoint1;



    }
    else if( u == "s" && c == "p"){
        final.innerHTML =   "WIN";
        playerpoint1+=1;
        score.innerHTML = playerpoint1

    }
    else if( u == "p" && c == "r"){
        final.innerHTML =   "WIN";
        playerpoint1+=1;
        score.innerHTML = playerpoint1

    }
    else if( u == c){
        final.innerHTML = "DRAW";
        final1.innerHTML = "DRAW";
    }
    else{
        final1.innerHTML = "LOSE"
        playerpoint2+=1;
        score1.innerHTML = playerpoint2
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