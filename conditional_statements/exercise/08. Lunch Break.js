function lunchBreak(lst) {
    let show = lst[0];
    let episode = lst[1];
    let time = lst[2] * 0.625;
    if (time >= episode) {
        console.log(`You have enough time to watch ${show} and left with ${Math.ceil(time - episode)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${show}, you need ${Math.ceil(episode - time)} more minutes.`)
    }
}