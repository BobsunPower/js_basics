function accountBalance(lst) {
    let idx = 0;
    let tot = 0;
    let cmd = lst[idx++];
    while (cmd !== "NoMoreMoney") {let mny = Number(cmd); if (mny < 0) {console.log("Invalid operation!"); break;}
        tot += mny;
        console.log(`Increase: ${mny.toFixed(2)}`);
        cmd = lst[idx++];    }
    console.log(`Total: ${tot.toFixed(2)}`);
}