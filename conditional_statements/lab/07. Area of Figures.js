function areaOfFigures(lst) {
    if (lst[0] === "square") {
        console.log(Number(lst[1] ** 2).toFixed(3));
    } else if (lst[0] === "rectangle") {
        console.log(Number(lst[1] * Number(lst[2]).toFixed(3)));
    } else if (lst[0] === "circle") {
        console.log((Math.PI * (Number(lst[1] ** 2)).toFixed(3)));
    } else if (lst[0] === "triangle") {
        console.log((Number(lst[1]) * Number(lst[2]) / 2).toFixed(3));
    }
}