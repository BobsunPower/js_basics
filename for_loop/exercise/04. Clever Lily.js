function cleverLily(lst) {
    let age = Number(lst[0]);
    let washingMachine = Number(lst[1]);
    let money = Number(lst[2]) * (Math.floor(age / 2) + (age % 2));
    for (let i = 1; i <= age; i++) {if (i % 2 == 0) {money += i * 5 - 1;}}
    let dif = Math.abs(money - washingMachine).toFixed(2);
    if (money >= washingMachine) {console.log(`Yes! ${dif}`);}
    else {console.log(`No! ${dif}`);}
}