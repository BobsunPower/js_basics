function moving(lst) {
    let idx = 0;
    let width = Number(lst[idx++]);
    let length = Number(lst[idx++]);
    let height = Number(lst[idx++]);
    let area = width * length * height;
    let cmd = lst[idx++];
    while (cmd != "Done" && area > 0) {area -= Number(cmd); cmd = lst[idx++];}
    if (area >= 0) {console.log(`${area} Cubic meters left.`);}
    else {console.log(`No more free space! You need ${Math.abs(area)} Cubic meters more.`);}
}