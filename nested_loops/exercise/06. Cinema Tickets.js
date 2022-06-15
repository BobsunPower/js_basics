function cinemaTickets(lst) {
    let idx = 0; let students = 0; let standards = 0; let kids = 0; let movie = lst[idx++];
    while (movie != "Finish") {let seats = Number(lst[idx++]); let sold = 0; let ticket = lst[idx++];
        while (ticket != "End")
        {switch (ticket) {
            case "student": students++; break;
            case "standard": standards++; break;
            case "kid": kids++; break;}
            sold++;
            if (sold == seats) {break;}
            ticket = lst[idx++];}
        let percent = (sold / seats) * 100;
        console.log(`${movie} - ${percent.toFixed(2)}% full.`);
        movie = lst[idx++];}
    let tickets = students + standards + kids;
    let studentPercent = (students / tickets) * 100;
    let standardPercent = (standards / tickets) * 100;
    let kidsPercent = (kids / tickets) * 100;
    console.log(`Total tickets: ${tickets}\n${studentPercent.toFixed(2)}% student tickets.\n${standardPercent.toFixed(2)}% standard tickets.\n${kidsPercent.toFixed(2)}% kids tickets.`)
}