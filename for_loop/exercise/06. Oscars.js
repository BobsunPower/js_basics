function oscars(lst) {
    let idx = 0;
    let actor = lst[idx++];
    let pts = Number(lst[idx++]);
    let judges = Number(lst[idx++]);
    let nominated = false;
    for (let i = 0; i < judges; i++)
    {pts += (lst[idx++].length * Number(lst[idx++])) / 2;
        if (pts > 1250.5) {nominated = true; break;}}
    if (nominated) {console.log(`Congratulations, ${actor} got a nominee for leading role with ${pts.toFixed(1)}!`);}
    else {console.log(`Sorry, ${actor} you need ${(1250.5 - pts).toFixed(1)} more!`);}
}