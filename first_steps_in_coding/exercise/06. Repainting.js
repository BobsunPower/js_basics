function repaining(lst) {
    let nylonPrice = 1.5;
    let paintPrice = 14.5;
    let separatorPrice = 5;
    let bagsPrice = 0.4;
    let nylonQuantity = Number(lst[0]) + 2;
    let paintQuantity = Number(lst[1]) * 1.1;
    let separatorQuantity = Number(lst[2]);
    let laborHours = Number(lst[3]);
    let stockPrice = (nylonQuantity * nylonPrice) + (paintQuantity * paintPrice) + (separatorQuantity * separatorPrice) + bagsPrice;
    let laborPrice = stockPrice * 0.3;
    let total = laborHours * laborPrice + stockPrice;
    console.log(total);
  }