function histogram(lst) {
    let seq = Number(lst[0]);
    let under200 = 0; let under400 = 0; let under600 = 0; let under800 = 0; let above799 = 0;
    for (let i = 1; i <= seq; i++) {let num = Number(lst[i]);
        if (num < 200) {under200++;}
        else if (num < 400) {under400++;}
        else if (num < 600) {under600++;}
        else if (num < 800) {under800++;}
        else {above799++;}}
    console.log(`
    ${((under200 / seq) * 100).toFixed(2)}%
    ${((under400 / seq) * 100).toFixed(2)}%
    ${((under600 / seq) * 100).toFixed(2)}%
    ${((under800 / seq) * 100).toFixed(2)}%
    ${((above799 / seq) * 100).toFixed(2)}%`);
}