function walking(lst) {
    let goal = 10000;
    let idx = 0;
    let steps = 0;
    let goHome = false;
    while (steps < goal && !goHome) {if (lst[idx] == "Going home") {idx++; goHome = true;}
        steps += Number(lst[idx++]);}
    if (steps >= goal) {console.log("Goal reached! Good job!"); console.log(`${steps - goal} steps over the goal!`);}
    else {console.log(`${goal - steps} more steps to reach goal.`);}
}