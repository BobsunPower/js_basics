function summerOutfit(lst) {
    let temperature = Number(lst[0]);
    let dayPart = lst[1];
    let clothes;
    let shoes;
    switch (dayPart){
        case "Morning":
            if (temperature >= 10 && temperature <= 18) {
              clothes = "Sweatshirt";
              shoes = "Sneakers";
            }else if (temperature > 18 && temperature <= 24) {
                clothes = "Shirt";
                shoes = "Moccasins";
            }else if (temperature >= 25){
                clothes = "T-Shirt";
                shoes = "Sandals";
            } break;
        case "Afternoon":
            if (temperature >= 10 && temperature <= 18) {
                clothes = "Shirt";
                shoes = "Moccasins";
            }else if (temperature > 18 && temperature <= 24) {
                clothes = "T-Shirt";
                shoes = "Sandals";
            }else if (temperature >= 25) {
                clothes = "Swim Suit";
                shoes = "Barefoot";
            } break;
        case "Evening":
            if (temperature >= 10 && temperature <= 18){
                clothes = "Shirt";
                shoes = "Moccasins";
            }else if (temperature > 18 && temperature <= 24){
                clothes = "Shirt";
                shoes = "Moccasins";
            }else if (temperature >= 25){
                clothes = "Shirt";
                shoes = "Moccasins";
            } break;
        }
        console.log(`It's ${temperature} degrees, get your ${clothes} and ${shoes}.`);
}