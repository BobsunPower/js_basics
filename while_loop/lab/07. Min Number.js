function maxNumber(lst) {
    let idx = 0;
    let num = lst[idx++];
    let mnm = Number.MAX_SAFE_INTEGER;
    while (num !== "Stop")
    {let cnt = Number(num); mnm = cnt < mnm ? cnt : mnm; num = lst[idx++];}
    console.log(mnm);
}