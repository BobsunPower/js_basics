function equalSumsEvenOddPosition(lst) {
    let start = Number(lst[0]); let end = Number(lst[1]); let result = "";
    for (let i = start; i <= end; i++) { let num = "" + i; let even = 0; let odd = 0;
        for (let j = 0; j < num.length; j++)
        {if (j % 2 != 0) {even += Number(num[j]);}
        else {odd += Number(num[j]);}}
        if (even == odd) {result += `${num} `;}}
    if (result != "") {console.log(result);}
}