function newHouse(lst) {
    let flowers = lst[0];
    let quantity = Number(lst[1]);
    let budget = Number(lst[2]);
    let expenses;
    switch(flowers) {
        case "Roses":
            expenses = quantity * 5;
            if (quantity > 80) {expenses *= 0.9} break;
        case "Dahlias":
            expenses = quantity * 3.8;
            if (quantity > 90) {expenses *= 0.85} break;
        case "Tulips":
            expenses = quantity * 2.8;
            if (quantity > 80) {expenses *= 0.85} break;
        case "Narcissus":
            expenses = quantity * 3;            
            if (quantity < 120) {expenses *= 1.15} break;
        case "Gladiolus":
            expenses = quantity * 2.5;
            if (quantity < 80) {expenses *= 1.2} break;
        default: break;
    }
        if (budget >= expenses) {
            console.log(`Hey, you have a great garden with ${quantity} ${flowers} and ${(budget - expenses).toFixed(2)} leva left.`);
        } else {
            console.log(`Not enough money, you need ${(expenses - budget).toFixed(2)} leva more.`);
    }
}