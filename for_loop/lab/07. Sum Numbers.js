function sumOfNumbers(lst) {
    let txt = lst[0];
    let vlu = 0;
    for (let i = 0; i < txt.length; i++) {vlu += Number(txt[i])}
    console.log(`The sum of the digits is:${vlu}`)
}