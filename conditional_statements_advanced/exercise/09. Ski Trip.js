function skiTrip(lst) {
    let days = Number(lst[0]);
    let roomType = lst[1];
    let rating = lst[2];
    let price = 18;
    if (roomType == "apartment") {price = 25; if (days < 10) {price *= 0.7;} else if (days <= 15) {price *= 0.65;} else {price *= 0.5;}}
    else if (roomType == "president apartment") {price = 35; if (days < 10) { price *= 0.9;} else if (days <= 15) {price *= 0.85;} else {price *= 0.8;}}
    price *= days - 1;
    let total = rating == "positive" ? (price *= 1.25) : (price *= 0.9);
    console.log(total.toFixed(2));
}