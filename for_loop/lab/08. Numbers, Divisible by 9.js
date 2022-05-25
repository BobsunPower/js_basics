function numbersDivisibleBy9(lst) {
    let fst = Number(lst[0]); let sec = Number(lst[1]); let vlu = 0; let txt = "";
    for (fst; fst <= sec; fst++) {if (fst % 9 == 0) {vlu += fst; txt += `${fst}\n`;}}
    console.log(`The sum: ${vlu}`); console.log(txt);
}