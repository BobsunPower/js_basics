function sequence2Kplus1(lst) {
    let idx = 0;
    let cap = Number(lst[idx++]); let sum = 1;
    while (sum <= cap) {console.log(sum); sum = sum * 2 + 1;}
}