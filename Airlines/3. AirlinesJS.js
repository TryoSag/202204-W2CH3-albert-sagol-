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
function welcomeNameAndGreet() {
  const userName = "User";
  if (userName === null) {
    welcomeNameAndGreet();
  }
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
welcomeNameAndGreet();
showLastFlights();
