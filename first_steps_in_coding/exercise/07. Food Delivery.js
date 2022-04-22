function foodDelivery(lst){
    let chikenMenu = 10.35 * Number(lst[0]);
    let fishMenu = 12.4 * Number(lst[1]);
    let vegMenu = 8.15 * Number(lst[2]);
    let total = (chikenMenu + fishMenu + vegMenu) * 1.2 + 2.5;
    console.log(total);
}