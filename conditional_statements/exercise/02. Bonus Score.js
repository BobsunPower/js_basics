function bonusScore(lst) {
    let score = Number(lst[0]);
    let bonus;
    if (score <= 100) {
        bonus = 5;
    } else if (score <= 1000) {
        bonus = score * 0.2;
    } else {
        bonus = score * 0.1;
    }
    if (score % 2 == 0) {
        bonus += 1;
    } else if (score % 10 == 5) {
        bonus += 2;
    }
    console.log(`${bonus}\n${score + bonus}`);
}