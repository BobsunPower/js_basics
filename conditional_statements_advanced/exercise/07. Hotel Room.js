function hotelRoom(lst) {
    let month = lst[0];
    let nights = Number(lst[1]);
    let apartmentPrice = 65;
    let studioPrice = 50;
    switch(month) {
        case "May": case "October":
            if (nights > 14) {studioPrice *= 0.7}
            else if (nights > 7) {studioPrice *= 0.95} break;
        case "June": case "September": studioPrice = 75.2; apartmentPrice = 68.7;
            if (nights > 14) {studioPrice *= 0.8} break;
        case "July": case "August": studioPrice = 76; apartmentPrice = 77; break;
    }
    if (nights > 14) {apartmentPrice *= 0.9;}
    console.log(`Apartment: ${(apartmentPrice * nights).toFixed(2)} lv.\nStudio: ${(studioPrice * nights).toFixed(2)} lv.`)
}