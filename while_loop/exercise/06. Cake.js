function cake(lst) {
    let idx = 0;
    let pieces = Number(lst[idx++]) * Number(lst[idx++]);
    let cmd = lst[idx++];
    while (cmd != "STOP" && pieces > 0) {pieces -= Number(cmd); cmd = lst[idx++];}
    if(pieces >= 0) {console.log(`${pieces} pieces are left.`)}
    else {console.log(`No more cake left! You need ${Math.abs(pieces)} pieces more.`)}
}