function examPreparation(lst) {
    let idx = 0;
    let limit = Number(lst[idx++]);
    let badGrades = 0; let grades = 0; let tasks = 0; let lastTask;
    let cntTask = lst[idx++];
    while (cntTask != "Enough" && badGrades != limit)
    {let grade = Number(lst[idx++]); if (grade <= 4) {badGrades++;}
        tasks++; grades += grade; lastTask = cntTask; cntTask = lst[idx++];}
    if (cntTask == "Enough") {
        console.log(`Average score: ${(grades / tasks).toFixed(2)}`);
        console.log(`Number of problems: ${tasks}`);
        console.log(`Last problem: ${lastTask}`);
    } else {console.log(`You need a break, ${badGrades} poor grades.`);}
}