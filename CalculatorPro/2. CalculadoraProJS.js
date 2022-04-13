//Calculadora Pro
function operationSum(numberSum1, numberSum2) {
    return numberSum1 + numberSum2;
}
function operationSubstract(numberSubstract1, numberSubstract2) {
    return numberSubstract1 - numberSubstract2;
}
function operationMultiplication(numberMultiplication1, numberMultiplication2) {
    return numberMultiplication1 * numberMultiplication2;
}
function operationDivision(numberDivision1, numberDivision2) {
    return numberDivision1 / numberDivision2;
}
function operationRoot(numberRoot) {
    return Math.sqrt(numberRoot);
}
function calculator(arrayNumbersToOperate) {
    let arrayResultsCalculator = [];
    
    if(arrayNumbersToOperate.length == 1) {
        arrayResultsCalculator[0] = operationRoot(arrayNumbersToOperate[0]);
    }else {
        arrayResultsCalculator = [NaN,arrayNumbersToOperate[0],arrayNumbersToOperate[0],arrayNumbersToOperate[0],arrayNumbersToOperate[0]];
        for(let i = 1 ; i < arrayNumbersToOperate.length ; i++) {
            arrayResultsCalculator[1] = operationSum(arrayResultsCalculator[1],arrayNumbersToOperate[i]);
            arrayResultsCalculator[2] = operationSubstract(arrayResultsCalculator[2],arrayNumbersToOperate[i]);
            arrayResultsCalculator[3] = operationMultiplication(arrayResultsCalculator[3],arrayNumbersToOperate[i]);
            arrayResultsCalculator[4] = operationDivision(arrayResultsCalculator[4],arrayNumbersToOperate[i]);   
        }   
    }
    return arrayResultsCalculator;
}
function enterNumbers() {
    let arrayNumbersEntered = [];
    while(true) { 
        let userNumber = prompt('Enter a number or cancel to run the program');
        if(userNumber == null) {
            userNumber = '';
        }
        userNumber = userNumber.trim();
        if(isNaN(userNumber) || (arrayNumbersEntered.length == 0 && userNumber === '')) {
            alert('Wrong, enter a number');
        }else if(userNumber === '') {  
            return arrayNumbersEntered;
        }else{
            arrayNumbersEntered.push(Number(userNumber));

        }
    }
}
function showResults(arrayResults) {
    const arrayOperations = ['square Root','sum','substract','multiplication','division'];
    if(arrayResults.length == 1) {                          
        console.log('The result of the ' + arrayOperations[0] + ' is ' + formatResult(arrayResults[0]));    
    }else {
        for(let i = 1 ; i < arrayResults.length ; i++) {  
             console.log('The result of the ' + arrayOperations[i] + ' is ' + formatResult(arrayResults[i]));
        }
    }
}
function formatResult(resultToFormat) {                                           
    resultToFormat = resultToFormat.toFixed(3);
    for(let j = 0  ; j < 3 ; j++) {
        if(resultToFormat[resultToFormat.length - (j + 1)] != 0) {
            return resultToFormat.slice(0, (resultToFormat.length - j));
        }     
    }
    return resultToFormat.slice(0, (resultToFormat.length - 4));
}

while(true) {
    showResults(calculator(enterNumbers()));
    if(window.confirm('Do you want to leave?')) {
        console.log('Bye');
        break;
    } 
}