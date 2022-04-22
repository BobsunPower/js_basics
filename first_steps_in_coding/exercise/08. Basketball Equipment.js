function basketballEquipment(lst) {
    subscription = Number(lst[0]);
    sneakers = subscription * 0.6;
    kit = sneakers * 0.8;
    ball = kit * 0.25;
    other = ball * 0.2;
    console.log(subscription + sneakers + kit + ball + other);
}