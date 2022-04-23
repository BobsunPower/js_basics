function fishTank(lst) {
    console.log(Number(lst[0]) * Number(lst[1]) * Number(lst[2]) * 0.001 * (1 - (Number(lst[3] / 100))));
}