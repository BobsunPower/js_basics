function trainTheTrainers(lst) {
    let idx = 0; let average = 0; let count = 0; let jury = Number(lst[idx++]); let presentation = lst[idx++];
    while (presentation != "Finish") {count++; let grades = 0;
        for (let i = 0; i < jury; i++) {grades += Number(lst[idx++]);}
        let grade = grades / jury;
        console.log(`${presentation} - ${grade.toFixed(2)}.`);
        average += grade; presentation = lst[idx++];}
    console.log(`Student's final assessment is ${(average / count).toFixed(2)}.`);
}