function repaining(input) {
    let nylonPrice = 1.5;
    let paintPrice = 14.5;
    let separatorPrice = 5;
    let bagsPrice = 0.4;
    let nylonQuantity = Number(input[0]) + 2;
    let paintQuantity = Number(input[1]) * 1.1;
    let separatorQuantity = Number(input[2]);
    let laborHours = Number(input[3]);
    let stockPrice = (nylonQuantity * nylonPrice) + (paintQuantity * paintPrice) + (separatorQuantity * separatorPrice) + bagsPrice;
    let laborPrice = stockPrice * 0.3;
    let total = laborHours * laborPrice + stockPrice;
    console.log(total);
  }