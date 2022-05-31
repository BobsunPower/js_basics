function sumNumbers(lst) {
    let idx = 0;
    let cap = lst[idx++]; let sum = 0;
    while (sum < cap) {sum += Number(lst[idx++]);}
    console.log(sum);
}