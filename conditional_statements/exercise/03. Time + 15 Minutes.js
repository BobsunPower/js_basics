function timePlus15Minutes(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]) + 15;
    hours += parseInt(minutes / 60);
    minutes %= 60;
    if (hours > 23){
        hours %= 24;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    console.log(`${hours}:${minutes}`)
}