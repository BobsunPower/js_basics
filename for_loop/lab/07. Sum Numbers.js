function sumOfNumbers(lst) {
    let seq = lst[0];
    let vlu = 0;
    for (let i = 0; i < seq.length; i++) {vlu += Number(seq[i])}
    console.log(`The sum of the digits is:${vlu}`)
}