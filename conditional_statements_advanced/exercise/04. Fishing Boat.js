function fishingBoat(lst) {
    let budget = Number(lst[0]);
    let season = lst[1];
    let fishers = Number(lst[2]);
    let rent;
    switch(season) {
        case "Spring": rent = 3000; break;
        case "Summer": case "Autumn": rent = 4200; break;
        case "Winter": rent = 2600; break;
    }
    if (fishers <= 6) {
        rent *= 0.9;
    } else if (fishers > 7 && fishers <= 11) {
        rent *= 0.85;
    } else {
        rent *= 0.75;
    }
    if (fishers % 2 == 0 && season != ("Autumn")) {
        rent *= 0.95;
    }
    if (budget >= rent) {
        console.log(`Yes! You have ${(budget - rent).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(rent - budget).toFixed(2)} leva.`);
    }
}