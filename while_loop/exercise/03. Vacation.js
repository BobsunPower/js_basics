function vacation(lst) {
    let idx = 0;
    let cost = Number(lst[idx++]);
    let savings = Number(lst[idx++]);
    let days = 0; let counter = 0;
    while (savings < cost && counter < 5) {days++; let action = lst[idx++]; let amount = Number(lst[idx++]);
        if (action == "save") {savings += amount; counter = 0;}
        else if (action == "spend") {savings -= Math.min(savings, amount); counter++;}}
    if (counter == 5) {console.log("You can't save the money."); console.log(days);}
    else {console.log(`You saved the money for ${days} days.`);}
}