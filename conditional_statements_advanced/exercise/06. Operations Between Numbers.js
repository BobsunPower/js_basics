function operationsBetweenNumbers(lst) {
    let fst = Number(lst[0]);
    let sec = Number(lst[1]);
    let sign = lst[2];
    let res;
    let evenOdd = "odd";
    switch(sign) {
        case "+": res = fst + sec; break;
        case "-": res = fst - sec; break;
        case "*": res = fst * sec; break;
        case "/": res = (fst / sec).toFixed(2); break;
        case "%": res = fst % sec; break;
    }
    if (res % 2 == 0) {evenOdd = "even"}
    if (!sec && (sign === "/" || sign === "%")) {console.log(`Cannot divide ${fst} by zero`);}
    else if (sign == "/" || sign == "%") {console.log(`${fst} ${sign} ${sec} = ${res}`);}
    else {console.log(`${fst} ${sign} ${sec} = ${res} - ${evenOdd}`);}
}