function cinema(lst) {
    let ticket = lst[0];
    let r = Number(lst[1]);
    let c = Number(lst[2]);
    switch(ticket) {
        case "Premiere": console.log((12 * r * c).toFixed(2)); break;
        case "Normal": console.log((7.5 * r * c).toFixed(2)); break;
        case "Discount": console.log((5 * r * c).toFixed(2)); break;
    }
}