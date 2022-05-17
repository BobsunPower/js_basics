function onTimeForTheExam(lst) {
    let examHours = Number(lst[0]);
    let examMinutes = Number(lst[1]);
    let arrivalHours = Number(lst[2]);
    let arrivalMinutes = Number(lst[3]);
    let examTime = examHours * 60 + examMinutes;
    let arrivalTime = arrivalHours * 60 + arrivalMinutes;
    let timeGap = Math.abs(examTime - arrivalTime);
    if (examTime < arrivalTime) {console.log("Late");
        if (timeGap >= 60 && (timeGap % 60) < 10) {console.log(`${Math.floor(timeGap / 60)}:${"0" + (timeGap % 60)} hours after the start`);}
        else if (timeGap >= 60) {console.log(`${Math.floor(timeGap / 60)}:${(timeGap % 60)} hours after the start`)}
        else {console.log(`${(timeGap % 60)} minutes after the start`);}}
    else if (timeGap <= 30) {console.log("On time"); if (timeGap > 0) console.log(`${timeGap} minutes before the start`)} 
    else {console.log("Early");
        if (timeGap >= 60 && (timeGap % 60) < 10) {console.log(`${Math.floor(timeGap / 60)}:${"0" + (timeGap % 60)} hours before the start`)}
        else if (timeGap >= 60) {console.log(`${Math.floor(timeGap / 60)}:${(timeGap % 60)} hours before the start`)}
        else {console.log(`${(timeGap % 60)} minutes before the start`);}}
}