let play = true;

while(play){

    let random = Math.floor(Math.random()*100)+1;
    let win = false;
    let attempt = 0;

    for(let i = 1; i <= 10 && win == false; i++){

        let guess = Number(prompt("Guess number (1-100)"));

        if(guess < 1 || guess > 100 || isNaN(guess)){
            alert("Invalid Number");
        }
        else{

            attempt++;

            if(guess > random){
                alert("Too High!");
            }
            else if(guess < random){
                alert("Too Low!");
            }
            else{
                alert("Congratulations! You Win!");
                alert("Attempts : " + attempt);
                win = true;
            }
        }
    }

    if(win == false){
        alert("Game Over!");
        alert("Number was : " + random);
    }

    let again = prompt("Play Again? yes/no");

    if(again.toLowerCase() == "no"){
        alert("Thank You!");
        play = false;
    }
}