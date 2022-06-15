function numberPyramid(lst) {
    let n = Number(lst[0]); let num = 1;
    for (let row = 0; row < n; row++) {let line = "";
        for (let col = 0; col < row + 1; col++) {if (num > n) {row = n; break;}           
            line += `${num++} `;}
        console.log(line);}
}