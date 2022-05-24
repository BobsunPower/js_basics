function vowelsSum(lst) {
    let txt = lst[0]
    let vlu = 0;
    for (let i = 0; i < txt.length; i++) {
        switch(txt[i]) {
            case "a": vlu += 1; break;
            case "e": vlu += 2; break;
            case "i": vlu += 3; break;
            case "o": vlu += 4; break;
            case "u": vlu += 5; break;
        }
}   
    console.log(vlu)
}