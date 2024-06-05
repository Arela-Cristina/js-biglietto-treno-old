// number of Km 
let numberKm = prompt('How many kilometers do you wan to travel?');
console.log("Km che desidera viaggiare", numberKm);
document.getElementById("travelkm").innerHTML = numberKm;

// // Passenger Age
let passengerAge = prompt('You can get a discount, respect of your age. How old are you?');
console.log("La tua eta", passengerAge);
document.getElementById("age").innerHTML = passengerAge;

// price for each kilometer
let priceKm = 0.21;
console.log("prezzo di ogni Km percorso", priceKm);

// price for the total of kilometers traveled
let travelPrice = numberKm * priceKm;
console.log("Prezzo per il totale del viaggio", travelPrice);
document.getElementById("totale").innerHTML = travelPrice;

// discount if your are minor
if (passengerAge < 18) {
    let percentage = (travelPrice * 20) / 100;
    let discountForMinors = (travelPrice - percentage).toFixed(2);
    console.log("prezzo scontato per over 65", discountForMinors + '€');
    document.getElementById("sconto-minori").innerHTML = discountForMinors;

} else {
    travelPrice = numberKm * priceKm;
    console.log("prezzo senza nessun tipo di sconto, intero", travelPrice + '€');
    // document.getElementById("").innerHTML = travelPrice;

    // discount if your are an Older Adult
} if (passengerAge > 65) {
    let percentage = (travelPrice * 40) / 100;
    let discountForOlderAdult = (travelPrice - percentage).toFixed(2);
    console.log("prezzo scontato per over 65", discountForOlderAdult + '€');
    document.getElementById("sconto-over60").innerHTML = discountForOlderAdult;
}

