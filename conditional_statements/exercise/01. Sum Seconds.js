function sumSeconds(lst) {
    let time = (Number(lst[0]) + Number(lst[1]) + Number(lst[2]));
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}
