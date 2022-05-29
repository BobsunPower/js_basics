function trekkingMania(lst) {
    let idx = 0;
    let crews = Number(lst[idx++]);
    let musala = 0;
    let montBlanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let climbers = 0;
    for (let i = 0; i < crews; i++) {let crew = Number(lst[idx++]); climbers += crew;
        if (crew <= 5) {musala += crew;}
        else if (crew <= 12) {montBlanc += crew;}
        else if (crew <= 25) {kilimanjaro += crew;}
        else if (crew <= 40) {k2 += crew;} else {everest += crew;}}
    console.log(`
    ${(musala / climbers * 100).toFixed(2)}%
    ${(montBlanc / climbers * 100).toFixed(2)}%
    ${(kilimanjaro / climbers * 100).toFixed(2)}%
    ${(k2 / climbers * 100).toFixed(2)}%
    ${(everest / climbers * 100).toFixed(2)}%`);
}