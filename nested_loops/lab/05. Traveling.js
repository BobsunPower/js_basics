function traveling(lst) {
    let idx = 0; let place = lst[idx++];
    while (place != "End") {let money = Number(lst[idx++]);
        while (money > 0) {money -= Number(lst[idx++]);}
        console.log(`Going to ${place}!`); place = lst[idx++];}
}