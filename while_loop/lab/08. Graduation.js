function graduation(lst) {    
    let idx = 0; let name = lst[idx++]; let grades = 0; let year = 1; let fails = 0;
    while (year <= 12) {let grade = Number(lst[idx++]); if (grade >= 4) {year++; grades += grade;}
    else {fails++; if (fails > 1) {break;}}}
    if (year == 13) {let averageGrade = (grades / 12).toFixed(2); console.log(`${name} graduated. Average grade: ${averageGrade}`);}
    else {console.log(`${name} has been excluded at ${year} grade`);}
}