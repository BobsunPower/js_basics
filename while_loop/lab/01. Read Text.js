function readText(lst) {
    let idx = 0; let txt = lst[idx++];
    while (txt != "Stop") {console.log(txt);txt = lst[idx++];}
}