function personalTitles(lst) {
    let age = Number(lst[0]);
    let sex = lst[1];
    if (age >= 16 && sex == "m") {
      console.log("Mr.");
    } else if (age < 16 && sex == "m") {
      console.log("Master");
    } else if (age >= 16 && sex == "f") {
      console.log("Ms.");
    } else if (age < 16 && sex == "f") {
      console.log("Miss");
    }
  }