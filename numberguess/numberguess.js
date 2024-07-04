const min=1;
const max=100;
const answer=Math.floor(Math.random()*(max-min+1)+min);

let attempts=0;
let guess;
let running=true;

while(running){
    guess=window.prompt(`Guess the number between ${min} and ${max}`);
    guess=Number(guess);

    if(isNaN(guess)){
        window.alert(`Please enter the valid number`); 
    }
    else if(guess<min||guess>max){
        window.alert(`Please enter within range`);
    }
    else{
        attempts++;
        if(guess<answer){
            window.alert(`Too Low!Try again`);
        }
        else if(guess>answer){
            window.alert(`Too High!Try again`);
        }
        else{
            window.alert(`Right guess!The number is ${answer} it took ${attempts} attempts`);
            running=false;
        }
    }
    
}