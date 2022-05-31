function password(lst) {
    let idx = 0;
    let usr = lst[idx++]; let pwd = lst[idx++];
    let tryPwd = lst[idx++];
    while (tryPwd !== pwd) {tryPwd = lst[idx++];}
    console.log(`Welcome ${usr}!`);
}