function journey(lst) {
    let budget = Number(lst[0]);
    let season = lst[1];
    let destination = "Europe";
    let placeToStay = "Hotel";
    if (budget <= 100) {
        destination = "Bulgaria";
        if (season == "summer") {
            placeToStay = "Camp";
            budget *= 0.3;
        } else if (season == "winter") {
            budget *= 0.7;
        }
    } else if (budget > 100 && budget <= 1000) {
        destination = "Balkans";
        if (season == "summer") {
            placeToStay = "Camp";
            budget *= 0.4;
        } else if (season == "winter") {
            budget *= 0.8;
        }
    } else if (budget > 1000) {
        budget *= 0.9;
    }
    console.log(`Somewhere in ${destination}\n${placeToStay} - ${budget.toFixed(2)}`);
}