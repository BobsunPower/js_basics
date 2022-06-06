function maxNumber(lst) {
    let index = 0;
    let data = lst[index++];
    let max = Number.MIN_SAFE_INTEGER;
    while (data !== "Stop") {let cnt = Number(data); max = cnt > max ? cnt : max; data = lst[index++];}
    console.log(max);
}