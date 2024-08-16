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

    markAsRead() {
        this.readStatus = true;
    }

    markAsUnread() {
        this.readStatus = false;
    }

    renderBook() {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.setAttribute("data-read", (this.readStatus) ? "true" : "false");
        bookDiv.setAttribute("data-index", Book.library.findIndex(a => {
            a.title === this.title &&
            a.pageLength === this.pageLength
        }));
        
        const img = document.createElement("img");
        img.src = (this.readStatus) ? "svg/book-read.svg" : "svg/book-unread.svg";
        img.alt = "Book Image";
        bookDiv.appendChild(img);

        const titleSpan = document.createElement('span');
        titleSpan.classList.add('title');
        titleSpan.textContent = this.title;
        bookDiv.appendChild(titleSpan);

        const pagesContainer = document.createElement('div');
        pagesContainer.classList.add('pages-container');

        const pageSizeSpan = document.createElement('span');
        pageSizeSpan.textContent = 'Page size: ';
        pagesContainer.appendChild(pageSizeSpan);

        const pagesSpan = document.createElement('span');
        pagesSpan.classList.add('pages');
        pagesSpan.textContent = this.pageLength;
        pagesContainer.appendChild(pagesSpan);

        bookDiv.appendChild(pagesContainer);

        const readContainer = document.createElement('div');
        readContainer.classList.add('read-container');

        const readLabelSpan = document.createElement('span');
        readLabelSpan.textContent = 'Read? ';
        readContainer.appendChild(readLabelSpan);

        const readSpan = document.createElement('span');
        readSpan.classList.add('read');
        readSpan.textContent = (this.readStatus) ? read_true_emoji : read_false_emoji;
        readContainer.appendChild(readSpan);

        const changeButton = document.createElement('button');
        changeButton.classList.add('change');
        changeButton.textContent = 'Change';
        readContainer.appendChild(changeButton);

        bookDiv.appendChild(readContainer);

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove');
        removeButton.textContent = 'Remove Book';
        bookDiv.appendChild(removeButton);
    }
}

