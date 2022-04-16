function concatenateData(data) {
    let list = data;
    let firstName = list[0];
    let lastName = list[1];
    let age = Number(list[2]);
    let city = list[3];
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${city}.`)
}