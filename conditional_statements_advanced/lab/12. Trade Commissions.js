function tradeComissions(lst) {
    let city = lst[0];
    let sales = Number(lst[1]);
    let comission = -1;
    if (sales < 0 || !["Sofia", "Varna", "Plovdiv"].includes(city)) {
        console.log("error");
        return;
    }
    switch(city) {
        case "Sofia":
            if (sales > 0 && sales <= 500) {
                sales *= 0.05;
            } else if (sales > 500 && sales <= 1000) {
                sales *= 0.07;
            } else if (sales > 1000 && sales <= 10000) {
                sales *= 0.08;
            } else if (sales > 10000) {
                sales *= 0.12;
            }
            break;
            case "Varna":
                if (sales > 0 && sales <= 500) {
                    sales *= 0.045;
                } else if (sales > 500 && sales <= 1000) {
                    sales *= 0.075;
                } else if (sales > 1000 && sales <= 10000) {
                    sales *= 0.1;
                } else if (sales > 10000) {
                    sales *= 0.13;
                }
                break;
            case "Plovdiv":
                if (sales > 0 && sales <= 500) {
                    sales *= 0.055;
                } else if (sales > 500 && sales <= 1000) {
                    sales *= 0.08;
                } else if (sales > 1000 && sales <= 10000) {
                    sales *= 0.12;
                } else if (sales > 10000) {
                    sales *= 0.145;
                }
                break;
            default:
                System.out.println("error");
                return;
    }
    console.log(sales.toFixed(2));
}