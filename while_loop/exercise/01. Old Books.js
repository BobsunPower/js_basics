function oldBooks(lst) {
    let idx = 0; let wantedBook = lst[idx++]; let checkedBooks = 0; let currentBook = lst[idx++];
    while (currentBook != wantedBook && currentBook != "No More Books") {currentBook = lst[idx++]; checkedBooks++;}
    if (currentBook != wantedBook) {console.log("The book you search is not here!"); console.log(`You checked ${checkedBooks} books.`);}
    else {console.log(`You checked ${checkedBooks} books and found it.`);}
}