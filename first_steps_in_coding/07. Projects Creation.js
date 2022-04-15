function projectCreation(data) {
    let list = data
    let architectName = list[0];
    let projects = Number(list[1]);
    let neededHours = projects * 3
    console.log(`The architect ${architectName} will need ${neededHours} hours to complete ${projects} project/s.`)
}
