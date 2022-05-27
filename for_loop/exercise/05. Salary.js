function salary(lst) {
    let facebook = 150; let instagram = 100; let reddit = 50;
    let oppenedTabs = Number(lst[0]);
    let salary = Number(lst[1]);
    let index = 2;
    for (let i = 0; i < oppenedTabs; i++) {
        let tab = lst[index++];
        switch(tab){
            case "Facebook": salary -= facebook; break;
            case "Instagram": salary -= instagram; break;
            case "Reddit": salary -= reddit; break;}
        if(salary <= 0){console.log("You have lost your salary."); break;}}
    if (salary > 0) {console.log(salary);}
}