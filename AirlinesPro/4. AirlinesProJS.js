const flights = [
  { id: 0, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },

  { id: 1, to: "New York", from: "Barcelona", cost: 700, scale: false },

  { id: 2, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },

  { id: 3, to: "Paris", from: "Barcelona", cost: 210, scale: false },

  { id: 4, to: "Roma", from: "Barcelona", cost: 150, scale: false },

  { id: 5, to: "London", from: "Madrid", cost: 200, scale: false },

  { id: 6, to: "Madrid", from: "Barcelona", cost: 90, scale: false },

  { id: 7, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

  { id: 8, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

  { id: 9, to: "Sydney", from: "Barcelona", cost: 150, scale: true },

  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

function findIndexFlight(flightId) {
  for (let i = 0; i < flights.length; i++) {
    if (flights[i].id === flightId) {
      return i;
    }
  }
  return null;
}
function showflightsformat(flightToFormat) {
  let scaleToFormat;
  const indexToFormat = findIndexFlight(flightToFormat);
  if (flights[indexToFormat].scale === true) {
    scaleToFormat = "with scales";
  } else {
    scaleToFormat = "without scales";
  }
  return `The flight from ${flights[indexToFormat].from} to ${flights[indexToFormat].to} ${scaleToFormat} that costs ${flights[indexToFormat].cost}€`;
}

function showLastFlights() {
  const lastestFlightsToday = 5;
  let listLastestFlights = flights[flights.length - lastestFlightsToday].to;

  for (
    let i = flights.length + 2 - lastestFlightsToday;
    i <= flights.length;
    i++
  ) {
    listLastestFlights = listLastestFlights.concat(", ", flights[i - 1].to);
  }
}
function adminActions() {
  let adminExit = false;

  adminExit = true;
  if (flights.length < 15) {
    adminCreateFlight();
  }
  adminExit = true;
  if (flights.length > 0) {
    adminRemoveFlight();
  }
  if (adminExit === true) {
    adminActions();
  }
}

function askUserOrAdmin() {
  const userAdmin = "Admin";
  if (userAdmin === null) {
    askUserOrAdmin();
  }
  switch (userAdmin.toLowerCase()) {
    case "admin":
      adminActions();
      break;
    case "user":
      userActions();
      break;
    default:
      askUserOrAdmin();
  }
}

function userMaxPrice() {
  const userMaximumPrice = 2;
  const arrayCorrectPrice = [];
  if (Number.isNaN(userMaximumPrice) || userMaximumPrice === null) {
    return userMaxPrice();
  }
  flights.forEach((flight) => {
    if (flight.cost <= userMaximumPrice) {
      arrayCorrectPrice.push(flight.id);
    }
  });
  if (arrayCorrectPrice.length > 0) {
    return arrayCorrectPrice;
  }

  return userMaxPrice();
}
function userEnteredId(arrayFlightIds) {
  let userIdSelected = " flight";
  if (Number.isNaN(userIdSelected) || userIdSelected === null) {
    userEnteredId(arrayFlightIds);
    return;
  }
  userIdSelected = Number(userIdSelected);

  let userCorrectId = false;
  arrayFlightIds.forEach((flight) => {
    if (flight === userIdSelected) {
      userCorrectId = true;
      showflightsformat(userIdSelected);
    }
  });
  if (userCorrectId === false) {
    userEnteredId(arrayFlightIds);
  }
}
function adminAskId() {
  let adminId = 6;
  if (Number.isNaN(adminId) || adminId === null) {
    return adminAskId();
  }
  adminId = Number(adminId);
  flights.forEach((flight) => {
    if (flight.id === adminId) {
      adminId = adminAskId();
    }
  });
  return adminId;
}
function userActions() {
  const arrayFilteredFlights = userMaxPrice();
  showFlightsAndId(arrayFilteredFlights);
  userEnteredId(arrayFilteredFlights);
}
function adminAskCost() {
  const flightCost = "flight";
  if (Number.isNaN(flightCost) || flightCost === null) {
    return adminAskCost();
  }
  return flightCost;
}
function adminCreateFlight() {
  flights.push({
    id: adminAskId(),
    from: "origin",
    to: "airport",
    scale: true,
    cost: adminAskCost(),
  });
  showFlightsAndId(flights.map((flight) => flight.id));
}

function adminRemoveFlight() {
  let adminIdRemove = 2;
  if (Number.isNaN(adminIdRemove) || adminIdRemove === null) {
    return adminRemoveFlight();
  }
  adminIdRemove = Number(adminIdRemove);
  const flightId = findIndexFlight(adminIdRemove);
  if (flightId === null) {
    return adminRemoveFlight();
  }
  flights.splice(flightId, 1);

  showFlightsAndId(flights.map((flight) => flight.id));
}

welcomeNameAndGreet();
flightsList();
showAveragePrice();
showNumberOfScales();
showLastFlights();

askUserOrAdmin();
