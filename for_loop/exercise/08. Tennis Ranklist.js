function tennisRanklist(lst) {
    let idx = 0;
    let tournaments = Number(lst[idx++]);
    let initialPts = Number(lst[idx++]);
    let wins = 0; let pts = 0;
    for (let i = 0; i < tournaments; i++) {switch (lst[idx++]) {
            case "W": pts += 2000; wins++; break;
            case "F": pts += 1200; break;
            case "SF": pts += 720; break;}}    
    let finalPoints = initialPts + pts;
    let averagePoints = Math.floor(pts / tournaments);
    let winPercent = wins / tournaments * 100;
    console.log(`
    Final points: ${finalPoints}
    Average points: ${averagePoints}
    ${winPercent.toFixed(2)}%`)
}