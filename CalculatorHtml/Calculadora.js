let values = {dot: false, operation: '', result: 0, actualNumber: 0, nDecimal: 0.1, actualDecimal: 0, maxNDecimal: 0};
const maximumOfCaracters = 9;

const addEventListeners = () => {
    //numbers
    const button0 = document.querySelector("#button-0");
    button0.addEventListener("click", () => numberEntered(0));
    
    const button1 = document.querySelector("#button-1");
    button1.addEventListener("click", () => numberEntered(1));
    
    const button2 = document.querySelector("#button-2");
    button2.addEventListener("click", () => numberEntered(2));
    
    const button3 = document.querySelector("#button-3");
    button3.addEventListener("click", () => numberEntered(3));
    
    const button4 = document.querySelector("#button-4");
    button4.addEventListener("click", () => numberEntered(4));
    
    const button5 = document.querySelector("#button-5");
    button5.addEventListener("click", () => numberEntered(5));
    
    const button6 = document.querySelector("#button-6");
    button6.addEventListener("click", () => numberEntered(6));
    
    const button7 = document.querySelector("#button-7");
    button7.addEventListener("click", () => numberEntered(7));
    
    const button8 = document.querySelector("#button-8");
    button8.addEventListener("click", () => numberEntered(8));
    
    const button9 = document.querySelector("#button-9");
    button9.addEventListener("click", () => numberEntered(9));
    //operations
    const buttonSum = document.querySelector("#button-sum");
    buttonSum.addEventListener("click", () => operationEntered('+'));
    
    const buttonSusbtract = document.querySelector("#button-substract");
    buttonSusbtract.addEventListener("click", () => operationEntered('-'));
    
    const buttonMult = document.querySelector("#button-multiplication");
    buttonMult.addEventListener("click", () => operationEntered('*'));
    
    const buttonDivision = document.querySelector("#button-division");
    buttonDivision.addEventListener("click", () => operationEntered('/'));
    //dot
    const buttonDot = document.querySelector("#button-dot");
    buttonDot.addEventListener("click", () => dotEntered());
    //result
    const buttonResult = document.querySelector("#button-result");
    buttonResult.addEventListener("click", () => resultEntered());
    //return
    const buttonReturn = document.querySelector("#button-ret");
    buttonReturn.addEventListener("click", () => returnEntered());
    //reset
    const buttonAc = document.querySelector("#button-ac");
    buttonAc.addEventListener("click", () => resetEntered());
}
const resetEntered = () => {
    values.dot = false;
    values.operation = '';
    values.result = 0;
    values.actualNumber = 0;
    values.nDecimal = 0.1;
    values.actualDecimal = 0;
    values.maxNDecimal = 0;
    sendToDisplay(values.actualNumber, values.actualDecimal);
}
const parcialReset = () => {
    values.dot = false;
    values.actualNumber = 0;
    values.nDecimal = 0.1;
    values.actualDecimal = 0;
}
const numberEntered = (number) => {
    if(values.dot === false){
        values.actualNumber = (values.actualNumber * 10) + number;
    }else{
        values.actualNumber = values.actualNumber + (number * values.nDecimal);
        values.nDecimal = values.nDecimal / 10;
        values.actualDecimal++;
    }
    sendToDisplay(values.actualNumber, values.actualDecimal);
}
const dotEntered = () => {
    if(values.dot === false){
        values.dot = true;
    }
}
const operationEntered = (operation) => {
    onMemoryOperation();
    values.operation = operation; 
}
const onMemoryOperation = () => {
    if(values.operation !== ''){
        switch(values.operation){
            case '+':
                values.result = values.result + values.actualNumber;
                break;
            case '-':
                values.result = values.result - values.actualNumber;
                break;
            case '*':
                values.result = values.result * values.actualNumber;
                break;
            case '/':
                values.result = values.result / values.actualNumber;
        }
    }else{
        values.result = values.actualNumber;
    }
    if(values.actualDecimal > values.maxNDecimal){
        values.maxNDecimal = values.actualDecimal;
    }
    parcialReset();
    sendToDisplay(values.result, values.maxNDecimal);
}
const resultEntered = () => {
    onMemoryOperation();
    values.operation = '';
}
const returnEntered = () => {
    parcialReset();
    sendToDisplay(values.actualNumber, values.actualDecimal);

}
const sendToDisplay = (number, decimals) =>{
    const toDisplay = document.querySelector("#show-number");
    formatToDisplay = number.toFixed(decimals).toString();
    if(formatToDisplay.length <= maximumOfCaracters){
        toDisplay.textContent = formatToDisplay;
    }else{
        toDisplay.textContent = 'SyntaxErr';
    }
}
const calculator = () => {
    addEventListeners();
    resetEntered();        
}

calculator();