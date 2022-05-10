function numberInRange(lst) {
    num = lst[0];
    let inRange = num >= -100 && num <= 100 && num != 0 ? "Yes" : "No";
    console.log(inRange);
}