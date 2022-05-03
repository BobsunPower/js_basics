function timePlus15Minutes(lst) {
    let holiday = Number(lst[0]);
    let qtyPuzzle = Number(lst[1]);
    let qtyDoll = Number(lst[2]);
    let qtyBear = Number(lst[3]);
    let qtyMinion = Number(lst[4]);
    let qtyTruck = Number(lst[5]);
    let qtyToys = qtyPuzzle + qtyDoll + qtyBear + qtyMinion + qtyTruck;
    let toysPrice = (qtyPuzzle * 2.6) + (qtyDoll * 3) + (qtyBear * 4.1) + (qtyMinion * 8.2) + (qtyTruck * 2);
    if (qtyToys >= 50) {
        toysPrice *= 0.75;
    }
    toysPrice *= 0.9;
    let total = Math.abs(toysPrice - holiday).toFixed(2);
    if (toysPrice >= holiday) {
        console.log(`Yes! ${total} lv left.`);
    } else {
        console.log(`Not enough money! ${total} lv needed.`);
    }
}