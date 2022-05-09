function weekendOrWorkingDay(lst) {
    let day = lst[0];
    switch(day) {
        case "Monday": case "Tuesday": case "Wednesday": case "Thursday": case "Friday":
            work = "Working day"; break;
        case "Saturday": case "Sunday":
            work = "Weekend"; break;
        default: work = "Error";
    }
    console.log(work);
}