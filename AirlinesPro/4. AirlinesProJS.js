//Airlines
let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];

function welcomeNameAndGreet () {
    let userName = prompt('Please, enter your name?', 'User');
    if(userName !== null){
        console.log(`Welcome to Skylab Airlines, ${userName}`);
    }else{
        welcomeNameAndGreet();
    }
}
function flightsList() {
    console.log('Flights for today');
    flights.forEach(flight => { 
        console.log(showflightsformat(flight.id));
    });
}
function showflightsformat(flightToFormat) {
    let scaleToFormat;
    const indexToFormat = findIndexFlight(flightToFormat);
    if(flights[indexToFormat].scale === true){
        scaleToFormat = 'with scales';
    }else{
        scaleToFormat = 'without scales';
    }
    return `The flight from ${flights[indexToFormat].from} to ${flights[indexToFormat].to} ${scaleToFormat} that costs ${flights[indexToFormat].cost}€`;
}
function findIndexFlight(flightId) {
    for(let i = 0; i < flights.length; i++){
        if(flights[i].id === flightId){
            return i;
        }
    }
    return null;
}
function showAveragePrice() {
    let totalPriceFlights = 0;
    flights.forEach(flight => {      
        totalPriceFlights = totalPriceFlights + flight.cost;
    })
    console.log(`The average price of flights is ${(totalPriceFlights / flights.length).toFixed(2)}€`);
}
function showNumberOfScales() {
    let numberScales = 0;
    flights.forEach(flight => {     
        if(flight.scale === true){
            numberScales++;
        }
    })
    console.log(`There are ${numberScales} flights with scales today`);
}
function showLastFlights () {
    const lastestFlightsToday = 5;
    let listLastestFlights = flights[flights.length - lastestFlightsToday].to;
    console.log('The lastest destinations today:');

    for(let i = (flights.length + 2) - lastestFlightsToday; i <= flights.length; i++){
        listLastestFlights = listLastestFlights.concat(', ', flights[i - 1].to);   
    }
    console.log(listLastestFlights);
}
// Pro
function askUserOrAdmin () {
    let userAdmin = prompt('You are User or Admin?');
    if(userAdmin === null) {
        askUserOrAdmin ();
    }
    switch(userAdmin.toLowerCase()) {
        case  'admin':
            console.log('Welcome Admin options');
            adminActions();
            break;
        case  'user':
            userActions();
            break;
        default:
            askUserOrAdmin ();
    }   
}
//User
function userActions() {
    let arrayFilteredFlights = userMaxPrice();
    showFlightsAndId(arrayFilteredFlights);
    userEnteredId(arrayFilteredFlights);
}
function showFlightsAndId(arrayFlights) {
    console.log('Updated list:');
    arrayFlights.forEach(flight => {
        console.log(`ID: ${flight} - ` + showflightsformat(flight));
    })
}
function userMaxPrice() {
    let userMaximumPrice = prompt('Please, enter the price of flight');
    let arrayCorrectPrice = [];
    if(isNaN(userMaximumPrice) || userMaximumPrice === null){
        console.log('Please, enter a number');
        return userMaxPrice();
    }
    flights.forEach(flight => {
        if(flight.cost <= userMaximumPrice){
            arrayCorrectPrice.push(flight.id);
        }
    })
    if(arrayCorrectPrice.length > 0){
        return arrayCorrectPrice;   
    }else{
        console.log('Sorry, there are no flights with this price or cheaper');
        return userMaxPrice();           
    }
}
function userEnteredId (arrayFlightIds) {
    let userIdSelected = prompt('Please, enter the ID of the flight');
    if(isNaN(userIdSelected) || userIdSelected === null){
        userEnteredId(arrayFlightIds);
        return;
    }else{
        userIdSelected = Number(userIdSelected);
    }
    let userCorrectId = false;
    arrayFlightIds.forEach(flight => {  
        if(flight === userIdSelected) {
            userCorrectId = true;
            console.log('You selected: ' + showflightsformat(userIdSelected));
            console.log('Thank you for your purchase, hope to see you again');
            return;
        }       
    })
    if(userCorrectId === false){
        console.log('You entered a wrong ID');
        userEnteredId(arrayFlightIds);           
    }
}
//Admin
function adminActions() {
    let adminExit = false;
    if(confirm('Do you want to create a new flight?')){
        adminExit = true;
        if(flights.length < 15){
            adminCreateFlight();
        }else{
            alert('Sorry, there are 15 flights in the list');
        }
    }else if(confirm('Do you want to remove a flight?')){
        adminExit = true;
        if(flights.length > 0){
            adminRemoveFlight();
        }else{
            alert('Sorry, there are no flights in the list');
        }
    }
    if(adminExit === true){
        adminActions();
    }else{
        console.log('Bye');
    }
}
function adminCreateFlight() { 
    flights.push({
        id: adminAskId(),
        from: prompt('Enter the airport of origin'),
        to: prompt('Enter the destination airport'),
        scale: window.confirm('The flight has scale?'),
        cost: adminAskCost()
    })
    showFlightsAndId(flights.map(flight => flight.id));
}
function adminAskId() { 
    let adminId = prompt('Please enter the ID');
    if(isNaN(adminId) || adminId === null){
        console.log('Please, enter a number');
        return adminAskId();
    }
    adminId = Number(adminId);
    flights.forEach(flight => {
        if(flight.id === adminId){
            console.log('Sorry, this ID has been used');
            adminId = adminAskId();
        }
    })
    return adminId;
}
function adminAskCost() {
    let flightCost = prompt('Enter the price of the flight');
    if(isNaN(flightCost) || flightCost === null){
        console.log('Sorry, it must be a number');
        return adminAskCost();
    }else{
        return flightCost;
    }
}
function adminRemoveFlight() {
    let adminIdRemove = prompt('Please enter the ID');
    if(isNaN(adminIdRemove) || adminIdRemove === null){
        console.log('Please, enter a number');
        return adminRemoveFlight();
    }
    adminIdRemove = Number(adminIdRemove);
    const flightId = findIndexFlight(adminIdRemove);
    if(flightId === null){
        console.log('Sorry, this ID has not been used');
        return adminRemoveFlight();
    }else{
        flights.splice(flightId,1);
    }
    showFlightsAndId(flights.map(flight => flight.id));
}


welcomeNameAndGreet();
flightsList();
showAveragePrice();
showNumberOfScales();
showLastFlights();

askUserOrAdmin();

