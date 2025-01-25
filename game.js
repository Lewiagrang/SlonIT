let answer = Math.round(Math.random()*100)
let isWin = false
let attempt = 50
let strideLength = 25

while(!isWin){
    if(attempt === answer){
        isWin = true
        console.log(`Компьютер 2: Пробую число ${attempt}.`);
        console.log("Компьютер 1: Угадал!>.");
    }
    else if(attempt > answer){
        console.log(`Компьютер 2: Пробую число ${attempt}.`);
        console.log("Компьютер 1: Меньше.");
        
        attempt = attempt - strideLength
        strideLength = Math.round(strideLength/2)  
        
    }
    else if(attempt < answer){
        console.log(`Компьютер 2: Пробую число ${attempt}.`);
        console.log("Компьютер 1: Больше>.");
        

        attempt = attempt + strideLength
        strideLength = Math.round(strideLength/2)  

    }
}