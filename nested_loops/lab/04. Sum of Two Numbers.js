function sumOfTwoNumbers(lst) {
    let start = Number(lst[0]); let end = Number(lst[1]); let magic = Number(lst[2]); let count = 0; let found = false;
    for (let x = start; x <= end; x++)
    {for (let y = start; y <= end; y++) {count++;
        if (x + y == magic) {console.log(`Combination N:${count} (${x} + ${y} = ${magic})`); found = true; x = end; break;}}}
    if (!found) {console.log(`${count} combinations - neither equals ${magic}`);}
}