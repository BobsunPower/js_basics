function maxNumber(lst) {
    let idx = 0;
    let num = lst[idx++];
    let mxm = Number.MIN_SAFE_INTEGER;
    while (num !== "Stop")
    {let cnt = Number(num); mxm = cnt > mxm ? cnt : mxm; num = lst[idx++];}
    console.log(mxm);
}