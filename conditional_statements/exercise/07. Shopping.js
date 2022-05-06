function shopping(lst) {
    let budget = Number(lst[0]);
    let qtyGC = Number(lst[1]);
    let qtyCPU = Number(lst[2]);
    let qtyRAM = Number(lst[3]);
    let priceGC = qtyGC * 250;
    let priceCPU = qtyCPU * (priceGC * 0.35);
    let priceRAM = qtyRAM * (priceGC * 0.1);
    let expenses = priceGC + priceCPU + priceRAM;
    if (qtyGC > qtyCPU) {
        expenses *= 0.85;
    }
    if (budget >= expenses) {
        console.log(`You have ${(budget - expenses).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(expenses - budget).toFixed(2)} leva more!`)
    }
}