//Bingo
let ranking = [
    {name: 'Admin', rounds: 14},
    {name: 'Silvia', rounds: 23},
    {name: 'Lucas', rounds: 56},
    {name: 'Marc', rounds: 68}
];
const numberOfRows = 3;
const numberOfColumns = 5;
const basePoints = 100;

const welcomeNameAndGreet = () => {
    console.log('Welcome to ISDI Bingo');
    let nameOk = false;
    let playerName;
    do{
        playerName = prompt('Enter your name');
        if(playerName === null) {
            console.log('Sorry, try again');
        }else if(playerName.trim === '' || !isNaN(playerName)){
            console.log('Sorry, try again');
        }else{
            nameOk = true;
        }
    }
    while(nameOk === false);
    console.log(`Hi ${playerName}, ready to play`);
    return playerName;
}
const randomNumber = () => Math.floor(Math.random() * 99) + 1;
 
const showRules = () => {
    console.log('You start with 100 points and lose 1 for each round');
    console.log('Good luck!!');
}
const showRanking = () => {
    let rankingFormated = [['Top','Name','Points']];
    for(let i = 1; i <= ranking.length; i++) {
        rankingFormated.push([i,ranking[i-1].name, basePoints - ranking[i-1].rounds]);
    }
    console.table(rankingFormated);
}
const enterResults = (player) => {
    let i;
    for( i = 0; i < ranking.length; i++){
        if(player.rounds < ranking[i].rounds){
            break;
        }
    }
    ranking.splice(i , 0, player);  
    showRanking();
    console.log(`Bye ${player.name}, see you next time`);
}
const cardGenerator = () => {                  
    let cardNumbers = [];
    do{
        let number = randomNumber();
        if(cardNumbers.includes(number)){
        }else{
            cardNumbers.push(number);
        }
    }while(cardNumbers.length < numberOfColumns * numberOfRows);
    return cardNumbers;
}
const formatTheCard = (playerCard) => {
    let formatedCard =[];
    for(let i = 0; i < numberOfRows; i++){
        formatedCard[i] = playerCard.slice(i * numberOfColumns ,(i + 1) * numberOfColumns);
    }
    return formatedCard;
}
const newNumber = (list) => {
    let number;
    
    do{ 
        number = randomNumber();
    }while(list.includes(number));
    shownumber(number);
    return number;
}
const shownumber = (number) => {
    switch(number){
        case 22:
            console.log('The two ducks 22');
            break;
        case 25:
            console.log('Christmas 25');
            break;
        default :
            console.log(`The number is ${number}`);
    }
}
const enterToNumberList = (list,number) => {
    let i;
    for(i = 0; i <= list.length; i++){
        if(number < list[i]){
            break;
        }    
    } 
    list.splice(i , 0, number);
    return list;
}
const checkLine = (line) => line.filter(number => number === 'X').length === numberOfColumns;
    
const checkFirstLine = (card) => {
    card = formatTheCard(card);
    let correctLine = false;
    let whichRow;
    for(let i = 0; i < numberOfRows; i++){
        if(checkLine(card[i])){
            switch(i){
                case 0:
                    whichRow = 'first';
                    break;
                case 1:
                    whichRow = 'second';
                    break;
                default:
                    whichRow = 'third';
            }     
            console.log(`Congratulations, that's line at ${whichRow} row!`);
            correctLine = true;
            break;
        }
    }   
    return correctLine;
}
const checkBingo = (card) => {
    if(card.filter(number => number === 'X').length === numberOfRows * numberOfColumns){
        console.log("Congratulations, that's a BINGO!!!");
        return true;
    }else{
        return false;
    }
}
const newRound = (playerCard) => {
    let numberList = [];
    let rounds = 0;
    let firstLine = false;
    let continueGame;
    do{
        rounds++;
        let number = newNumber(numberList);
        numberList = enterToNumberList (numberList,number);
        if(playerCard.includes(number)){
            playerCard[playerCard.findIndex(index => index === number)] = 'X';
            console.table(formatTheCard(playerCard));
            if(firstLine === false){
                firstLine = checkFirstLine(playerCard);
            }
            if(checkBingo(playerCard)){
                break;
            }
        }else{
            console.table(formatTheCard(playerCard));
        }
        continueGame = confirm('Ok to new round or Cancel to quit the game');
    }while(continueGame); 
    if(continueGame === false){
        rounds = basePoints;
    }
    return rounds;
}
const bingo = () => {
    let result = {};
    let card = [];
    result.name = welcomeNameAndGreet();
    showRules();
    do{
        card = cardGenerator();
        console.table(formatTheCard(card));
    }while(confirm('Want to change the card?'));
    result.rounds = newRound(card);
    enterResults(result);
}

bingo();