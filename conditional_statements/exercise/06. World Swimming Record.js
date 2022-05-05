function worldSwimmingRecord(lst) {
    let recordSeconds = Number(lst[0]);
    let distanceMeters = Number(lst[1]);
    let meterSeconds = Number(lst[2]);
    let attemptSeconds = Math.floor(distanceMeters / 15) * 12.5 + distanceMeters * meterSeconds;
    if (attemptSeconds < recordSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${attemptSeconds.toFixed(2)} seconds.`);
    } else {
        let slower = (attemptSeconds - recordSeconds).toFixed(2);
        console.log(`No, he failed! He was ${slower} seconds slower.`);
    }
}