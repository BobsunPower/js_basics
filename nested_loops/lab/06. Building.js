function building(lst) {
    let floors = Number(lst[0]); let rooms = Number(lst[1]); let sign;
    for (let row = floors; row > 0; row--) {let floor = "";
        for (let col = 0; col < rooms; col++)
        {if (row == floors) {sign = "L";}
        else if (row % 2 != 0) {sign = "A";}
        else {sign = "O";}
            floor += `${sign}${row}${col} `;}
        console.log(floor);
    }
}