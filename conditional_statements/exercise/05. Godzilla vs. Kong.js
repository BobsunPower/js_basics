function godzillaVsKong(lst) {
    let budget = Number(lst[0]);
    let people = Number(lst[1]);
    let clothing = Number(lst[2]) * people;
    let decor = budget * 0.1;
    if (people > 150) {
        clothing *= 0.9;
    }
    let expenses = decor + clothing;
    if (expenses > budget) {
        console.log(`Not enough money!\nWingard needs ${(expenses - budget).toFixed(2)} leva more.`);
    } else {
        console.log(`Action!\nWingard starts filming with ${(budget - expenses).toFixed(2)} leva left.`);
    }
}