function numbersDivisibleBy9(lst) {
    let fst = Number(lst[0]);
    let sec = Number(lst[1]);
    let vlu = 0;
    let txt = "";
    for (let i = fst; i <= sec; i++) {if (i % 9 == 0) {vlu += i; txt += `${i}\n`;}
    }
    console.log(`The sum: ${vlu}`);
    console.log(txt);
}