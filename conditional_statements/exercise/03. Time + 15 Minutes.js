function timePlus15Minutes(lst) {
    let hours = Number(lst[0]);
    let minutes = Number(lst[1]) + 15;
    hours += parseInt(minutes / 60);
    minutes %= 60;
    if (hours > 23){
        hours %= 24;
    }
    if(minutes < 10 ){
        minutes = "0" + minutes;
    }
    console.log(`${hours}:${minutes}`);
}