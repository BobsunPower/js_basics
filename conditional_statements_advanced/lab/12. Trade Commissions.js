function tradeComissions(lst) {
    let city = lst[0];
    let sale = Number(lst[1]);
    if (sale < 0 || !["Sofia", "Varna", "Plovdiv"].includes(city)) {
        console.log("error");
        return;
    }
    switch(city) {
        case "Sofia":
            if (sale > 0 && sale <= 500) {
                sale *= 0.05;
            } else if (sale > 500 && sale <= 1000) {
                sale *= 0.07;
            } else if (sale > 1000 && sale <= 10000) {
                sale *= 0.08;
            } else if (sale > 10000) {
                sale *= 0.12;
            }
            break;
            case "Varna":
                if (sale > 0 && sale <= 500) {
                    sale *= 0.045;
                } else if (sale > 500 && sale <= 1000) {
                    sale *= 0.075;
                } else if (sale > 1000 && sale <= 10000) {
                    sale *= 0.1;
                } else if (sale > 10000) {
                    sale *= 0.13;
                }
                break;
            case "Plovdiv":
                if (sale > 0 && sale <= 500) {
                    sale *= 0.055;
                } else if (sale > 500 && sale <= 1000) {
                    sale *= 0.08;
                } else if (sale > 1000 && sale <= 10000) {
                    sale *= 0.12;
                } else if (sale > 10000) {
                    sale *= 0.145;
                }
                break;
            default:
                System.out.println("error");
                return;
    }
    console.log(sale.toFixed(2));
}