// number of Km 
let numberKm = prompt('How many kilometers do you wan to travel?');
console.log("Km che desidera viaggiare", numberKm);

// Passenger Age
let passengerAge = prompt('You can get a discount, respect of your age. How old are you?');
console.log("La tua eta", passengerAge);

// price of each kilometer
let priceKm = 0.21;
console.log("prezzo di ogni Km percorso", priceKm);

// price of the total kilometers traveled
let travelPrice = numberKm * priceKm;
console.log("Prezzo per il totale del viaggio", travelPrice);

// discount if your are minor
if (passengerAge < 18) {
    let percentage = (travelPrice * 20) / 100;
    let discountForMinors = travelPrice - percentage;

    console.log("prezzo scontato per minoreni", discountForMinors);
}

// discount if your are Older Adult
if (passengerAge > 65) {
    let percentage = (travelPrice * 40) / 100;
    let discountForOlderAdult = travelPrice - percentage;
    console.log("prezzo scontato per over 65", discountForOlderAdult);
}

