function animalType(lst) {
    let animal = lst[0];
    switch(animal) {
        case "dog": specie = "mammal"; break;
        case "crocodile":case "tortoise": case "snake": specie = "reptile"; break;
        default: specie = "unknown";
    }
    console.log(specie);
}