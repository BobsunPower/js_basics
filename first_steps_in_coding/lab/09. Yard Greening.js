function yardGreening(meters){
    let squareMeters = Number(meters)
    let price = squareMeters * 7.61
    let discount = price * 0.18
    let total = price - discount
    console.log(`The final price is: ${total} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}