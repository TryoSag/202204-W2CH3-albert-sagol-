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
        showflightsformat(flight.id);
    });
}
function showflightsformat(flightToFormat) {
    let scaleToFormat;
    if(flights[flightToFormat].scale === true){
        scaleToFormat = 'with scales';
    }else{
        scaleToFormat = 'without scales';
    }
    console.log(`The flight from ${flights[flightToFormat].from} to ${flights[flightToFormat].to} ${scaleToFormat} that costs ${flights[flightToFormat].cost}€`);
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

welcomeNameAndGreet();
flightsList();
showAveragePrice();
showNumberOfScales();
showLastFlights ();