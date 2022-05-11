function invalidNumber(lst) {
    let num = Number(lst[0]);
    if ((num<100 || num>200) && num != 0) {
        console.log("invalid")
    }
}