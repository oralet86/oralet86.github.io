const read_true_emoji = "✅";
const read_false_emoji = "❎";

const addBook = document.querySelector(".addbook");
const addBookDialog = document.getElementById("addbook-dialog");
const addBookForm = document.getElementById("addbook-form");
const addBookConfirm = document.getElementById("confirm");

addBook.addEventListener("click", () => addBookDialog.showModal());

addBookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formTitle = document.getElementById("title");
    const formPages = document.getElementById("pages");
    const formRead = document.getElementById("read");

    console.log(formTitle.value, formPages.value, formRead.checked);
    new Book(formTitle.value, formPages.value, formRead.checked);

    addBookDialog.close();
})


class Book {
    static library = [];

    static addToLibrary(book) {
        Book.library.push(book);
    }

    static removeFromLibrary(book) {
        const index = Book.library.findIndex(a => {
            a.title === book.title &&
            a.pageLength === book.pageLength
        });
        Book.library.remove(index);
    }

    constructor(title = "Lord of The Rings", pageLength = 1984, readStatus = false) {
        this.title = title;
        this.pageLength = pageLength;
        this.readStatus = readStatus;
        Book.addToLibrary(this);
        console.log(Book.library);
    }
}